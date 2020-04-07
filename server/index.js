const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db.js')
const Controller = require('./controller.js');

const app = express();
const port = 3005;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json())
// need to check the path
app.use(express.static(__dirname + '/../client/dist'));

let lastRetaurant;

app.get('/currentRestaurant', (req, res) => {
  Controller.getCurrent(req, res);
})

app.get('/restaurant', (req, res) => {
  Controller.getRestaurant(req, res)
});

app.post('/restaurant', (req, res) => {
  Controller.postRestaurant(req, res)
});
//   res.send('Hello World!')
// )

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
