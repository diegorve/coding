const Alumno = require('../models/Alumnos');

const fetchAlumnos = async (req, res) => {
    // Va a retornar todos los alumnos
    const alumnos = new Alumno();
    const allAlumnos = await alumnos.getAlumnos();
    res.status(200).send(allAlumnos);
}

const createAlumno = async (req, res) => {
    // Va a crear un nuevo alumno con las siguientes reglas del negocio
    // Regla 1: Los alumnos deben tener los siguientes datos:
    // Nombre, Apellidos, Edad, id, correo
    const validFields = ['id', 'nombre', 'apellidos', 'edad', 'correo'];
    Object.keys(req.body).forEach((key) => { // me trae los keys de un objeto
        if(validFields.indexOf(key) === -1){
            return res.status(400).send({message: `Key: ${key}, no es válido`})
        }
    }); 

    // Regla 2: No puede haber dos alumnos con el mismo correo
    const alumno = new Alumno()
    const student = await alumno.getAlumnoByEmail(req.body.email);
    if(student) return res.status(400).send({message: `El alumno ya existe en la base de datos`})

    // Creación del alumno
    const newAlumno = await alumno.addAlumno(req.body);
    return res.status(201).send(newAlumno);
}


module.exports = {
    fetchAlumnos,
    createAlumno
}