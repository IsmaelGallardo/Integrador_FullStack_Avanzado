const express = require('express');
const mongoose = require('mongoose');
const hbs = require('hbs');
const nodemailer = require('nodemailer');
const router = require ('./routes/formulario')

port = 3000;

const admin = require("firebase-admin");

const serviceAccount = require("./db-final-avanzado-firebase-adminsdk-vuhmo-f802ec79c4.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const todosCollection = db.collection('todos');

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");
// Configurar directorio de vistas
app.set('views', __dirname + '/views');


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configuracion de Mongo 
mongoose.connect('mongodb://127.0.0.1:27017/bd_final_avanzado', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', err => {
    console.error('Error de conexión a la base de datos:', err);
});

//Controladores
const homeController = require('./controllers/homeController');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/user');

app.use('/', productRoutes);
app.use('/', userRoutes);
app.use('/', router)

//Rutas
app.get('/', homeController.index);

app.listen (port, () => {
    console.log(`Servidor funcionando en puerto ${port}`);
    console.log();
})