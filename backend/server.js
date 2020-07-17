const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');

const app = express();

app.use('/js', express.static(path.join(__dirname,"../backend/public/dist/js/")));
app.use('/css', express.static(path.join(__dirname,"../backend/public/dist/css/")));
app.get('/', function(req,res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../backend/public/dist/') });
});

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/herder.routes")(app);

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
