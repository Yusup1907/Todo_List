const express = require("express");
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');



app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



const activity = require("./router/ActivityRouter");
const todo = require("./router/TodoRouter");

app.use("/api/v2", activity);
app.use("/api/v2", todo);



module.exports = app;
