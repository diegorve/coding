const express = require('express');
const { restart } = require('nodemon');
const app = express();
const port = 3600;
const axios = require('axios');

// endpoint
app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.send({
        message: 'Bienvenido',
        icon: 'icon'
    })
});

app.post('/', (req, res) => { // los navegadores solo procesan peticiones get, si se quiere testear la api con otras verbos se puede usar insomnia
    res.send({
        server: req.hostname,
        route: req.route
    })
})

app.post('/send-message', (req, res) => {
    res.send({
        message: {
            from: 'diegorve@yahoo.com',
            to: 'diego.vaca.enriquez@gmail.com',
            body: 'mensaje de prueba',
            deteInfo: Date.now()
        }
    })
})

app.get('/user/:name', (req, res) => { // los dos puntos indican que a partir de ahi es un parámetro
    const {name} = req.params;
    res.status(200).send({
        name: name.length
    })
});

app.get('/api/usuario/:usuario', (req, res) => { // los dos puntos indican que a partir de ahi es un parámetro
    const {usuario} = req.params;
    res.status(200).send({
        usuario
    })
});

app.get('/suma/', (req, res) => {
    const {num1, num2} = req.query;
    res.status(200).send({
        resultado: parseInt(num1) + parseInt(num2)
    })
})

app.get('/api', (req, res) => {
    res.send({
        mensaje: 'Hola mundo!',
    })
})

app.get('/api/swapi/:personaje', (req, res) => {
    const {personaje} = req.params;
    // const result = {};
    axios.get(`https://swapi.dev/api/people/${personaje}`)
    .then((r) => result = r.data.name)
    res.status(200).send(console.log(result))
})

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`)
})