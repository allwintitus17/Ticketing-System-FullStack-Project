// // const Note=require('../models/noteModel')
// // const Ticket=require('../models/ticketModel')
// // const User = require('../models/userModel')
// // const asyncHandler = require('express-async-handler');
// // const getNotes = asyncHandler(async (req, res) => {
     
// //     const user = await User.findById(req.user.id);
// //     if (!user) {
// //         res.status(401);
// //         throw new Error('User Not Found');
// //     }
// //     console.log(user)
// //     const tickets = await Ticket.find({ user: req.user.id });
     
// //     if(tickets.user.toString()!== req.user.id){
// //         res.status(401)
// //         throw new Error('User not authorized')
// //     }
// //      const notes=await Note.find({ticket:req.params.ticketId})
// //     res.status(200).json(notes);
// // });

// // const addNote = asyncHandler(async (req, res) => {
     
// //     const user = await User.findById(req.user.id);
// //     if (!user) {
// //         res.status(401);
// //         throw new Error('User Not Found');
// //     }
// //     console.log(user)
// //     const tickets = await Ticket.find({ user: req.user.id });
     
// //     if(tickets.user.toString()!== req.user.id){
// //         res.status(401)
// //         throw new Error('User not authorized')
// //     }
// //      const note=await Note.create({
// //         text:req.body.text,
// //         isStaff:false,
// //         ticket:req.params.ticketId,
// //         user:req.user.id
// //     })
// //     res.status(200).json(note);
// // });

// // module.exports={
// //     getNotes,
// //     addNote,
// // }
const Note = require('../models/noteModel');
const Ticket = require('../models/ticketModel');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// @desc    Get notes for a ticket
// @route   GET /api/tickets/:ticketId/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
    // Find the user making the request
    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Find the ticket and check if it belongs to the user
    const ticket = await Ticket.findById(req.params.ticketId);

    if (!ticket) {
        res.status(404);
        throw new Error('Ticket not found');
    }

    if (ticket.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    // Get the notes related to the ticket
    const notes = await Note.find({ ticket: req.params.ticketId });

    res.status(200).json(notes);
});

// @desc    Add a note to a ticket
// @route   POST /api/tickets/:ticketId/notes
// @access  Private
const addNote = asyncHandler(async (req, res) => {
    // Find the user making the request
    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401);
        throw new Error('User not found');
    }

    // Find the ticket and check if it belongs to the user
    const ticket = await Ticket.findById(req.params.ticketId);

    if (!ticket) {
        res.status(404);
        throw new Error('Ticket not found');
    }

    if (ticket.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }

    // Create a new note associated with the ticket
    const note = await Note.create({
        text: req.body.text,
        isStaff: false,
        ticket: req.params.ticketId,
        user: req.user.id,
    });

    res.status(200).json(note);
});

module.exports = {
    getNotes,
    addNote,
};
// const asyncHandler = require('express-async-handler');
// const Ticket = require('../models/ticketModel');
// const Note = require('../models/noteModel');

// // @desc Get notes for a ticket
// // @route GET /api/tickets/:ticketID/notes/
// // @access Private
// const getNotes = asyncHandler(async (req, res) => {
//     const { ticketID } = req.params;

//     const ticket = await Ticket.findById(ticketID);
//     // if (!ticket) {
//     //     res.status(404);
//     //     throw new Error('Ticket not found');
//     // }
//     // if (ticket.user.toString() !== req.user.id) {
//     //     res.status(401);
//     //     throw new Error('Not Authorised');
//     // }

//     const notes = await Note.find({ ticket: ticketID });
//     res.status(200).json(notes);
// });

// // @desc Create ticket note
// // @route POST /api/tickets/:ticketID/notes/
// // @access Private
// const createNote = asyncHandler(async (req, res) => {
//     const { ticketID } = req.params;

//     const ticket = await Ticket.findById(ticketID);
//     if (!ticket) {
//         res.status(404);
//         throw new Error('Ticket not found');
//     }
//     if (ticket.user.toString() !== req.user.id) {
//         res.status(401);
//         throw new Error('Not Authorised');
//     }

//     const newNote = await Note.create({
//         text: req.body.text,
//         isStaff: false,
//         user: req.user.id,
//         ticket: ticketID,
//     });

//     res.status(201).json(newNote);
// });

// module.exports = {
//     getNotes,
//     createNote,
// };