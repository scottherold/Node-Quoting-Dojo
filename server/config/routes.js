// this module handles routing
// <--- Modules --->
const quotesController = require('../controllers/quotes'); // imports quotes controller

// <--- Routing --->
module.exports = app => {
    // ** GET routes **
    app.get('/', quotesController.index); // root
    app.get('/quotes', quotesController.showAll); // all

    // ** POST routes **
    app.post('/quotes', quotesController.create); // new
};
