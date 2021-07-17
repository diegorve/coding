const express = require('express');
const bodyParser = require('body-parser');
const { createAlumno, fetchAlumnos } = require('./controllers/alumnoController');


const app = express(); // esto crea una nueva app de express

const PORT = process.env.PORT || 9000; // process es una biblioteca de nodejs que le permite acceder a partes del sistema operativo, .env permite acceder a las variables de entorno y .PORT accede a esta variable de entorno

app.use(bodyParser.urlencoded({extended: false})); // req.body o res.body puedan venir en un formulario básico de html
app.use(bodyParser.json()) // req.body o res.body pueden venir en formato json

app.get('/api/alumnos', fetchAlumnos);
app.post('/api/alumnos', createAlumno);

app.listen(PORT, () => {
    console.log(`Server start in port ${PORT}`)
});

