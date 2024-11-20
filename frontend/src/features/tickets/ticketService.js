import axios from 'axios'

const API_URL = '/api/tickets/'

// Create new ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, ticketData, config)

  return response.data
}

// Get user tickets
const getTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

const getTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + ticketId, config)

  return response.data
}

const closeTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + ticketId,{status:'closed'},config)

  return response.data
}
const ticketService={
     createTicket,
     getTickets,
     getTicket,
     closeTicket,
}

export default ticketService

// import axios from 'axios';

// const API_URL = '/api/tickets/';

// axios.defaults.baseURL = 'http://localhost:5000';

// const createTicket = async (ticketData, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   const response = await axios.post(API_URL, ticketData, config);
//   return response.data;
// };

// const getTickets = async (token) => {
//   try {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const response = await axios.get(API_URL, config);

//     console.log('Response data:', response.data); // Log the response data

//     return response.data;
//   } catch (error) {
//     console.error('Error fetching tickets:', error.response ? error.response.data : error.message);
//     throw error; // Re-throw the error to handle it in the calling code
//   }
// };

// const ticketService = {
//   createTicket,
//   getTickets,
// };

// export default ticketService;
