const server = require('./src/Server/index');
require('dotenv').config();
const mongoose = require('mongoose');

/* CONEXÃO COM ATLAS DB */

const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;


mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@cluster0.6sjt4bd.mongodb.net/?retryWrites=true&w=majority`);
