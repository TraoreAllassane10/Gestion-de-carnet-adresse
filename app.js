const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contact.routes');
const userRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');
const favorisRoutes = require('./routes/favoris.routes');
const corbeilleRoutes = require('./routes/corbeille.routes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/carnet-adresses');

app.use('/contacts', contactRoutes);
app.use('/users', userRoutes);
app.use('/admin', adminRoutes);
app.use('/favoris', favorisRoutes);
app.use('/corbeilles', corbeilleRoutes);

app.use((req, res) => {
    res.status(404).send('Page introuvable');
})


module.exports = app;