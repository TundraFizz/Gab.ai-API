var bodyParser = require("body-parser");          // Allows you to read POST data
var express    = require("express");              // Express
var app        = express();                       // Define the application
app.use(bodyParser.urlencoded({extended: true})); // Setting for bodyParser
app.use(bodyParser.json());                       // Setting for bodyParser
app.use(express.static("./static"));              // Define the static directory
app.set("views", "./views");                      // Define the views directory

require("./node/post.js")(app);                   // Include POST requests second
require("./node/routes.js")(app);                 // Include web routes third

app.listen(9001);                                 // Start the server
