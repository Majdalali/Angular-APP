const express = require('express');
const path = require('path');
const bodyParser = require('body-Parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();
const users = require('./routes/users');
const config = require('./config/database');

const port = 3000;

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('connected to database'+config.database)
});


app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

 
app.use('/users',users);


app.get('*' ,(req, res) => {
   res.send(path.join(__dirname, 'myapp1'))
});
app.listen(port , () => {
    console.log('server started on port'+port);
} );