// const mongoose=require('mongoose')

// const ticketSchema=mongoose.Schema({
//     user:{
//         type:mongoose.Schema.Types.ObjectId,
//         required:true,
//         ref: 'User'
//     },product:{
//         type:String,
//         required:[true,'Please please select an Product'],
//         enum:['iPhone','Macbook Pro','iMac','iPad'],
//     },description:{
//         type:String,
//         required:[true,'please enter a description of the issue'],
//     },
//     status:{
//         type:Boolean,
//         required:true,
//         enum:['new','open','closed'],
//         default:'new',
//     }

// },{
//     timestamps:true,
// })

// module.exports=mongoose.model('Ticket',ticketSchema)

const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    product: {
        type: String,
        required: [true, 'Please select a product'],
        enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad'], // These values are case-sensitive
    },
    description: {
        type: String,
        required: [true, 'Please enter a description of the issue'],
    },
    status: {
        type: String, // Change this to String instead of Boolean
        required: true,
        enum: ['new', 'open', 'closed'], // Enum with string values
        default: 'new',
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Ticket', ticketSchema);
