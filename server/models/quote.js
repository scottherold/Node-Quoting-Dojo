// this module handles 'user' model
// <--- Modules --->
const mongoose = require('mongoose'); // imports mongoose for model construction
const { Schema } = mongoose; // constructs an empty schema object from mongoose

// ** Schema **
// uses generic blank Schema object to not immedietly require a mongoose connection
const QuoteSchema = new Schema({
    name: {
        type: String, 
        minlength: [2, 'The minimum length for name is two characters'],
        maxlength: [20, 'The maximum length for name is twenty characters'],
        required: [true, 'Name is required']
    },
    quote: {
        type: String, 
        minlength: [6, 'The minimum length for quote is six characters'],
        maxlength: [50, 'The maximum length for name is fifty characters'],
        required: [true, 'Quote is required']
    },
}, {timestamps: true});

// ** Document Model **
module.exports = mongoose.model('Quote', QuoteSchema); // Model to create documents and chain mongoose methods