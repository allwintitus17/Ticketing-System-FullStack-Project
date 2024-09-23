// const express=require('express')
// const router=express.Router({mergeParams:true})


// const {getNotes,addNote}=require('../controllers/noteController')

// const {protect}=require('../middleware/authMiddleware')

// router.route('/').get(protect,getNotes).post(protect,addNote)

// module.exports=router

// const express = require('express');
// const router = express.Router({ mergeParams: true });
// const { getNotes, createNote } = require('../controllers/noteController');

// const { protect } = require('../middleware/authMiddleware');

// router.route('/').get(protect, getNotes).post(protect, createNote);

const express = require('express');
const router = express.Router({ mergeParams: true });
const { getNotes, addNote } = require('../controllers/noteController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getNotes).post(protect, addNote);

module.exports = router;
