// import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
// import ticketService from './ticketService'
// // import { FaGlasses } from "react-icons/fa";
// // import { getTickets } from "../../../../backend/controllers/ticketController";

// const initialState={
//   tickets:[],
//   ticket:{},
//   isLoading:false,
//   isError:false,
//   isSuccess:false,
//   message:'',
// }

// export const createTicket  = createAsyncThunk('tickets/create',async(ticketData,thunkAPI)=>{
//   try{
//     const token=thunkAPI.getState().auth.user.token
//    return await ticketService.createTicket(ticketData,token)
// }catch(error){
//     const message=(error.response && error.response.data && error.response.data.message)||error.message || error.toString()
//     console.log(message)
//     return thunkAPI.rejectWithValue(message)
// }
// })


// // export const getTickets  = createAsyncThunk('tickets/getAll',async(thunkAPI)=>{
// //   try{
// //     const token=thunkAPI.getState().auth.user.token
// //    return await ticketService.getTickets(token)
// // }catch(error){
// //     const message=(error.response && error.response.data && error.response.data.message)||error.message || error.toString()
// //     console.log(message)
// //     return thunkAPI.rejectWithValue(message)
// // }
// // })
// // export const getTickets = createAsyncThunk('tickets/getAll', async (thunkAPI) => {
// //   try {
// //     console.log("hii gettickets")
// //     console.log('thunkAPI.getState()', thunkAPI)
// //     const token = thunkAPI.getState().auth.user.token;
// //     console.log('token', token)
// //     return await ticketService.getTickets(token);
// //   } catch (error) {
// //     const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
// //     console.log(message)
// //     return thunkAPI.rejectWithValue(message);
// //   }
// // });
// export const getTickets = createAsyncThunk('tickets/getAll', async (_, thunkAPI) => {
//   try {
//     console.log("hii gettickets");
//     console.log('thunkAPI.getState()', thunkAPI.getState());

//     const state = thunkAPI.getState();
//     const token = state?.auth?.user?.token;

//     if (!token) {
//       throw new Error('Token is missing');
//     }

//     console.log('token', token);

//     const response = await ticketService.getTickets(token);
//     console.log('response', response);

//     return response;
//   } catch (error) {
//     const message = 
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();

//     console.log('Error fetching tickets:', message);
//     return thunkAPI.rejectWithValue(message);
//   }
// });
// export const getTicket = createAsyncThunk(
//   'tickets/get',
//   async (ticketId, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await ticketService.getTicket(ticketId, token)
//     } catch (error) {
//       const message=(error.response&&error.response.data && error.response.data.message)||error.message||error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// export const ticketSlice = createSlice({
//   name:'ticket',
//   initialState,
//   reducers:{
//     reset:(state)=>initialState
//   },
//   extraReducers:(builder)=>{
//      builder
//      .addCase(createTicket.pending,(state)=>{
//           state.isLoading=true
//      })
//      .addCase(createTicket.fulfilled,(state)=>{
//          state.isLoading=false
//          state.isSuccess=true
//      })
//      .addCase(createTicket.rejected,(state,action)=>{
//       state.isLoading=false
//       state.isError=true
//       state.message=action.payload
//      })
//      .addCase(getTickets.pending,(state)=>{
//       state.isLoading=true
//  })
//  .addCase(getTickets.fulfilled,(state,action)=>{
//      state.isLoading=false
//      state.isSuccess=true
//      state.tickets=action.payload
//  })
//  .addCase(getTickets.rejected,(state,action)=>{
//   state.isLoading=false
//   state.isError=true
//   state.message=action.payload
//  })
//  .addCase(getTicket.pending,(state)=>{
//   state.isLoading=true
// })
// .addCase(getTicket.fulfilled,(state,action)=>{
//  state.isLoading=false
//  state.isSuccess=true
//  state.tickets=action.payload
// })
// .addCase(getTicket.rejected,(state,action)=>{
// state.isLoading=false
// state.isError=true
// state.message=action.payload
// })
//   }
// })

// export const {reset}=ticketSlice.actions
// export default ticketSlice.reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketService from './ticketService';

const initialState = {
  tickets: [], // List of tickets
  ticket: {},  // Single ticket details
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

// Async thunk to create a ticket
export const createTicket = createAsyncThunk('tickets/create', async (ticketData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await ticketService.createTicket(ticketData, token);
  } catch (error) {
    const message = (error.response?.data?.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Async thunk to get all tickets
export const getTickets = createAsyncThunk('tickets/getAll', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await ticketService.getTickets(token);
  } catch (error) {
    const message = (error.response?.data?.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Async thunk to get a single ticket
export const getTicket = createAsyncThunk('tickets/get', async (ticketId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await ticketService.getTicket(ticketId, token);
  } catch (error) {
    const message = (error.response?.data?.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const closeTicket = createAsyncThunk('tickets/close', async (ticketId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await ticketService.closeTicket(ticketId, token);
  } catch (error) {
    const message = (error.response?.data?.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});


export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTicket.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTickets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tickets = action.payload; // This should be an array
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ticket = action.payload; // Single ticket details
      })
      .addCase(getTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(closeTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tickets.map((ticket)=>ticket._id===action.payload._id ? (ticket.status='closed'):ticket)
      });
  }
});

export const { reset } = ticketSlice.actions;
export default ticketSlice.reducer;
