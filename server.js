const express = require("express");
const gymRoutes = require("./routes/gymRoutes.js");
const homeRoutes = require("./routes/homeRoutes.js");
require('dotenv').config();

const app = express();

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// making uploads file publicly available
app.use('/uploads', express.static('uploads'));

app.use('/api/gym', gymRoutes);
app.use('/api/home', homeRoutes);


app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
    
});

