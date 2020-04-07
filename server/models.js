const db = require('../db/pg.js')

var hello; 
const Model = {
    lastRestaurant: 0,
    getCurrent: (callback) => {
        const query = `SELECT * FROM restaurants INNER JOIN reviews ON restaurants.id=restaurant_id WHERE restaurants.id = ${Model.lastRestaurant}`;
        db.query(query, (err, data) => {
            if (err) {
                callback(err);
            } else {
                if (data.length === 0) {
                    const queryString =`SELECT * FROM restaurants where id=${Model.lastRestaurant}`;
                    db.query(queryString, (err, data) => {
                        if(err) {
                            callback(err);
                        } else {
                            callback(null, data)
                        }
                    })
                } else {
                    callback(null, data);
                }
            }
        })
    },
    getRestaurant: (callback) => {
        const randomRestaurant = Math.floor(Math.random() * 100) +1;
        const query = `SELECT * FROM restaurants INNER JOIN reviews ON restaurants.id=restaurant_id WHERE restaurants.id = ${randomRestaurant}`
        db.query(query, (err, data) => {
            if (err) {
                callback(err);
            } else {
                if (data.length === 0) {
                    const queryString = `SELECT * FROM restaurants where id=${randomRestaurant}`
                    db.query(queryString, (err, data) => {

                        if (err) {
                            callback(err);
                        } else {
                            callback (null, data)
                        }
                    })
                } else {
                    
                    Model.lastRestaurant = randomRestaurant;
                    callback(null, data);
                }
            }
        })
    },
    postRestaurant: (callback, info) => {
        console.log(3, Model.lastRestaurant)
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
    
        today = yyyy + '-' + mm + '-' + dd;
        var id; // revisar aca 
        const query = `SELECT id from restaurants where restaurantname = "${info.name}"`;
        db.query(query, (err, data) => {
            if (err) {
                callback(err);
            } else {
                id = data[0].id;
                const queryString = `INSERT INTO reviews(rating, date, restaurant_id) VALUES (${info.rating},"${today}",${id})`;
                db.query(queryString, (err, data) => {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, data)
                    }
                })
            }
        })
    }
}


module.exports = Model;