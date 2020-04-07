const { Client } = require('pg');
// var connectionString = "postgres://mainuser:Valeriatqm123@localhost/ip:5432/restaurantinfo";
DATABASE_URL = 'postgres://mainuser:Valeriatqm123@127.0.0.1:5432/restaurantinfo';
const client = new Client({
    connectionString: DATABASE_URL
});

client.connect();

client.query('SELECT 1 + 1 AS solution', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected to pg')
    }
})

module.exports = client;

