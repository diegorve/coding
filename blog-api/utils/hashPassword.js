const bcrypt = require('bcrypt');
const SALT_FACTOR = 10;  // ayuda a generar un string de manera aleatoria


module.exports = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt( SALT_FACTOR, function(err, salt) {
            if(err) reject(err);
            bcrypt.hash(password, salt, function(err, hash) {
                if(err) reject(err);
                resolve(hash)
            })
        })
    })
}