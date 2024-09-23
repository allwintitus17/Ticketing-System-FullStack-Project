const express=require('express')
const router=express.Router()
const {getTickets,createTicket,getTicket,deleteTicket,updateTicket}=require('../controllers/ticketController')

const {protect} = require('../middleware/authMiddleware')
const noteRouter=require('./noteRoutes')
router.use('/:ticketId/notes',noteRouter)
console.log('ticketRoute')
router.post('/', protect,createTicket)
 router.route('/').get(protect,getTickets)

router.route('/:id').get(protect,getTicket);

router.route('/:id').get(protect,getTicket).delete(protect,deleteTicket).put(protect,updateTicket)
module.exports=router
// const express = require('express');
// const router = express.Router();
// const { getTickets, createTicket } = require('../controllers/ticketController');
// const { protect } = require('../middleware/authMiddleware');

// // Routes for tickets
// router.route('/')
//   .get(protect, getTickets)  // GET request to fetch tickets, protected by authentication middleware
//   .post(protect, createTicket);  // POST request to create a new ticket, also protected

// module.exports = router;
