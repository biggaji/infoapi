if(NODEENV = "production") {
    require('dotenv').config();
}
const express = require('express');

const app = express();

const cookieParser = require('cookie-parser');

const session = require('express-session');

const apiRoute = require('./routes/user');
/**
 *  Bring in neccessary middlewares
 */
 app.use(express.json());
 app.use(express.urlencoded({extended : false}));
 app.use(cookieParser());
 app.use(session({
    name: "sid",
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60000, httpOnly: true}
 }));


app.use('/api/v1', apiRoute);

app.get('/', (req,res) => {
    res.send("WEB APP UNDER CONSTRUCTION- VISIT THE API PAGE");
});
app.listen(7000, () => console.log("-----------------Server running on 7000-------------------"));