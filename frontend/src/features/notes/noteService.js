// import  axios from 'axios'
// const API_URL='/api/tickets/'

// const getNotes=async(ticketId,token)=>{
//     const config={
//         headers:{
//             Authorization:`Bearer ${token}`,
//         },
//     }
//     const response = await axios.get(API_URL + ticketId + '/notes', config);
//     return response.data
// }
// const createNote=async(noteText,ticketId,token)=>{
//     const config={
//         headers:{
//             Authorization:`Bearer ${token}`,
//         },
//     }
//     const response = await axios.post(API_URL + ticketId + '/notes', {text:noteText},config);
//     return response.data
// }

// const noteService={
//     getNotes,
//     createNote,
// }

// export default noteService

import axios from 'axios';

const API_URL = '/api/tickets/';
axios.defaults.baseURL='https://ticketing-system-fullstack-project.onrender.com'

const getNotes = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get(`${API_URL}${ticketId}/notes`, config);
    return response.data;
};

const createNote = async (noteText, ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.post(
        `${API_URL}${ticketId}/notes`,
        { text: noteText },
        config
    );
    return response.data; // Ensure this returns the created note object
};

const noteService = {
    getNotes,
    createNote, // Ensure this name matches the one used in the thunk
};

export default noteService;
