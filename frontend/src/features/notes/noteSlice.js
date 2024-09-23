// import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
// import noteService from './noteService'

// const initialState={
//     notes:[],
//     isError:false,
//     isSuccess:false,
//     isLoading:false,
// }

// export const getNotes = createAsyncThunk('notes/getAll', async (ticketId, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await noteService.getNotes(ticketId,token);
//     } catch (error) {
//       const message = (error.response?.data?.message) || error.message || error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   });

// export const noteSlice=createSlice({
//     name:'note',
//     initialState,
//     reducers:{
//         reset:(state)=>initialState,
//     },
//     extraReducers:(builder)=>{
//         builder
//         .addCase(getNotes.pending, (state) => {
//             state.isLoading = true;
//           })
//           .addCase(getNotes.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.isSuccess = true;
//             state.notes= action.payload; // Single ticket details
//           })
//           .addCase(getNotes.rejected, (state, action) => {
//             state.isLoading = false;
//             state.isError = true;
//             state.message = action.payload;
//           })
//     },
// })

// export const {reset}=noteSlice.actions
// export default noteSlice.reducer

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import noteService from './noteService';

const initialState = {
    notes: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '', // Added to store error messages
};

// Async thunk to fetch notes for a specific ticket
export const getNotes = createAsyncThunk(
    'notes/getAll', 
    async (ticketId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await noteService.getNotes(ticketId, token);
        } catch (error) {
            const message = error.response?.data?.message || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);
// export const createNote = createAsyncThunk(
//     'notes/create', 
//     async ({noteText,ticketId}, thunkAPI) => {
//         try {
//             const token = thunkAPI.getState().auth.user.token;
//             return await noteService.createNotesNotes(noteText,ticketId, token);
//         } catch (error) {
//             const message = error.response?.data?.message || error.message || error.toString();
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// );
export const createNote = createAsyncThunk(
    'notes/create',
    async ({ noteText, ticketId }, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await noteService.createNote(noteText, ticketId, token);
        } catch (error) {
            const message = error.response?.data?.message || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        reset: (state) => initialState, // Reset to initial state
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNotes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getNotes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.notes = action.payload; // Store fetched notes
            })
            .addCase(getNotes.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload; // Store error message
            })
            .addCase(createNote.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createNote.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.notes.push(action.payload) // Store fetched notes
            })
            .addCase(createNote.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload; // Store error message
            });
    },
});

export const { reset } = noteSlice.actions;
export default noteSlice.reducer;
