var express    = require('express'),
    app        = express(),           // Init app with express
    mongoose   = require('mongoose'), // mongoose for mongodb
    port       = process.env.PORT || 8080,
    client_dir = '/client';


// Connect with the mongodb database
mongoose.connect('mongodb://localhost/dailyToDo');

app.configure(function() {
    app.use(express.static(__dirname + client_dir)); // set the static files location
    app.use(express.logger('dev'));
    app.use(express.bodyParser()); // pull information from html in POST
    app.use(express.methodOverride());
});

// App routes
require('./server/routes.js')(app);

// Load the single index page
app.get('*', function(req, res) {
    res.sendfile(client_dir + '/index.html'); 
});
// Start app with node
app.listen(port);
console.log("App listening on port " + port);