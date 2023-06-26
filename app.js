require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const hbs = require('hbs');

port = 3000;

const admin = require("firebase-admin");

const serviceAccount = require("./db-final-avanzado-firebase-adminsdk-vuhmo-f802ec79c4.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

/* const db = admin.firestore();
const todosCollection = db.collection('todos'); */

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configuracion de Mongo 
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', err => {
    console.error('Error de conexión a la base de datos:', err);
});

//Controladores
const homeController = require('./controllers/homeController');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/user');
const formularioRouter = require('./router/formulario'); // Incorporación del router del formulario

app.use('/', productRoutes);
app.use('/', userRoutes);
app.use(formularioRouter); // Incorporación del router del formulario

//Rutas
app.get('/', homeController.index);
/* app.get('/contacto', (req, res) => {
  res.render("contacto");
}); */

app.listen (port, () => {
    console.log(`Servidor funcionando en puerto ${port}`);
    console.log();
})