const db = require('../../data/dbConfig'); 

module.exports = {
    getAll() {
        return db('cars'); 
    }, 
    insert(car) {
        return db('cars').insert(car)
        .then(([id]) => {
            return db('cars').where('id', id).first()
          })
    }, 
}