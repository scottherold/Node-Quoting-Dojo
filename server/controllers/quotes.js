// this module handles 'quotes' controller functions
// <--- Modules --->
const Quote = require('mongoose').model('Quote'); // Imports the Quote model

// <--- Controller Functions --->
module.exports = {
    // Index
    index: (req, res) => {
        res.render('index');
    },
    showAll: (req, res) => {
        Quote.find() // Query MongoDb w/ mongoose for all quotes
            .then(data => res.render('quotes', {quotes: data})) // bind data to template
            .catch(err => req.json(err)); // throw error in JSON
    },
    create: (req, res) => {
        const quote = new Quote(); // constructs new user object using form data
        quote.name = req.body.name;
        quote.quote = req.body.quote;

        quote.save() // save to DB
            .then( () => res.redirect('/quotes')) // on successful addtion to db, redirect to quotes
            .catch(err => {
                for (var key in err.errors) {
                    req.flash('formErrors', err.errors[key].message); // add error to formerrors
                }
                res.redirect('/');
            });
    }
}