const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')


class Alumno {
    constructor() {
        // Configuración de lowdb
        const adapter = new FileSync(file); // busca el archivo db.json en mi directorio de trabajo
        const db = new low(adapter);
        this.db = db;
    }

    async getAlumnos() {
        await this.db.read(); // va a leer los últimos datos de la base de datos
        return this.db.data.alumnos
    }

    async addAlumno(alumno) {
        this.db.data.alumnos.push(alumno);
        await this.db.write(); // modifica el db.json
        return alumno;
    }

    async getAlumnoByEmail(email) {
        await this.db.read();
        const alumno = this.db.data.alumnos.find(student => student.email === email);
        return alumno
    }
}

module.exports = Alumno;