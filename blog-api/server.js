// Configuración básica de Express
const express = require('express');
const bodyParser = require('body-parser');  // permite parsear el body de una petición (verbos)
const routes = require('./routes');


const app = express();
app.use(bodyParser.json());  // esto permite que pueda aceptar como body un json
app.use(bodyParser.urlencoded({extended:true}))  // esto permite que pueda aceptar como body un urlencode
app.use('/api/v1/', routes);
// ejemplo de rutas: /api/v1/users

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
});