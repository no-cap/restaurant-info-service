const Model  = require('./models.js');

const getCurrent = (req, res) => {
    Model.getCurrent((err, data) => {
        if (err) {
            res.status(400).end();
        } else {

            res.send(data)
        }
    })
};

const getRestaurant = (req, res) => {
    Model.getRestaurant((err, data) => {
        if(err) {
            res.status(400).end();
        } else {
            res.send(data)
        }
    })
}

const postRestaurant = (req, res) => {
    let info = req.body;
    Model.postRestaurant((err, data) => {
        if(err) {
            res.status(400).end();
        } else {
            res.send(data)
        }
    }, info)
}


module.exports = {
    getCurrent,
    getRestaurant,
    postRestaurant
}