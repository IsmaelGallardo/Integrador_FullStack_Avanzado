const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

// Configurar transportador SMTP
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});


router.get('/contacto',(req, res) => {
    res.render("contacto")
});

router.post('/contacto/enviar', async(req, res) =>{
    const { nombre, email, mensaje } = req.body;


// Validar campos
if (!nombre || !email || !mensaje){
    return res.render('formulario', { error: 'Todos los campos son obligatorios' });
}


//Configurar transportador SMTP

/* const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'aniyah.oreilly78@ethereal.email',
        pass: 'pRASM5DvKdYEzfeC3a'
    }
}); */

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