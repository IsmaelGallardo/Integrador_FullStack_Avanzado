const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();


router.get('/',(req, res) => {
    res.render("formulario")
});

router.post('/enviar', async(req, res) =>{
    const { nombre, email, mensaje } = req.body;


// Validar campos
if (!nombre || !email || !mensaje){
    return res.render('formulario', { error: 'Todos los campos son obligatorios' });
}


//Configurar transportador SMTP

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'emie.beer54@ethereal.email',
        pass: '7y5m7DadhV1vUqsWgY'
    }
});


//Configurar correo electrónico
const mailOptions = {
    from: email,
    to: 'destinatario@ejemplo.com',
    subject: 'Formulario de contacto',
    text: `
    Nombre: ${nombre}\n
    Email:${email}\n 
    Mensaje:${mensaje}`
};

//Try.catch estructura de control para manejar errores y excepciones

try{
    //Enviar correo electrónico
    await transporter.sendMail(mailOptions);
    res.render('confirmacion',{
        nombre: req.body.nombre
    });
} catch (error){
    console.log(error);
    res.render('formulario', { error: 'Error al enviar mensaje'});
}


})
module.exports = router;