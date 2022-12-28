import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'http://localhost:3005/users?username=&password=';
const initialState = {
    user:null,
    isLoading:false,
    error:null
};
/* export const fetchUsers = createAsyncThunk('users/fetchUsers' ,async()=>{
    try{
        const response = await axios.get(BASE_URL)
        return response.data
    }
    catch(err){
        return err.message
    }
}); */
export const login = createAsyncThunk('user/login',async({username, password},{rejectWithValue})=>{
    try{
        const response = await axios.get(`http://localhost:3005/users?username=${username}&password=${password}`)
        const user = response.data;
        /* const users = response.data.filter(item=>item.username === username && item.password===password) */
        if(user.length===0){
            throw new Error('incorect username or password');
        }
        return user;
    }
    catch(error){
        return rejectWithValue(error.message);
    }
});
export const registerUser = createAsyncThunk('user/registerUser',async(initialUser,thunkAPI)=>{
    
    try{
        const response  = await axios.post(BASE_URL,initialUser)
        return response.data;
    }
    catch(err){
        return thunkAPI.rejectWithValue(err.message);
    }
})

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logOut:(state,action)=>{
            state.isLoading = false;
            state.error = null;
            state.user = null;
        }
    },
    extraReducers(builder){
        builder.addCase(login.pending,(state,action)=>{
            state.isLoading = true;
            state.error = null
        })
        .addCase(login.fulfilled, (state,action)=>{    
            state.isLoading = false;
            state.user = action.payload;
            
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
        //fetchUser extrareducers
        /* .addCase(fetchUsers.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading = false
            state.user = action.payload;
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.error;
        }) */
        //registerUser extrareducers
        .addCase(registerUser.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            action.payload.id = nanoid();
            state.user.push(action.payload);
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error;
        })
    }
});
export const selectUser = (state)=>state.user.user;
export const getError = (state)=>state.user.error;
export const getIsLoading = (state)=> state.user.isLoading;
export const {logOut} = userSlice.actions;
export default userSlice.reducer;
