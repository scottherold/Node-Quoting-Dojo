// <--- Modules --->
const express = require('express'); // imports express module
const session = require('express-session'); // imports session
const flash = require('express-flash'); // imports flash messages

// <--- Server Constructors --->
const port = process.env.PORT || 8000; // establishes port
const app = express(); // constructs express server
app.listen(port, () => console.log(`Express server listening on port ${ port }`)); // port-listening

// <--- Server Settings --->
app.set('view engine', 'ejs'); // sets templating engine to ejs
app.set('views', __dirname + '/views'); // maps views dir
app.use(express.urlencoded({extended: true})); // allows POST routes
// Session settings
app.use(session({
    secret: 'quoteSecKey',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));
app.use(flash()); // flash messages

// <--- Server Config --->
require(__dirname + '/server/config/database'); // DB connect
require(__dirname + '/server/config/routes')(app); // Routing