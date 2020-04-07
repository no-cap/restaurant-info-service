const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
const faker = require('faker');
counter = 0;

const categories = ['Japanese', 'Vietamese', 'Chinese', 'Korean', 'American', 'Mexican', 'French', 'Italian', 'buffet', 'bar'];

const dataGen = () => {
    writer.pipe(fs.createWriteStream('data.csv'));
    for (var i = 0; i < 15000000; i++) {
        const randomRating = Math.floor(Math.random() * 6);
        const randomRestaurantid = Math.floor(Math.random() * 10000000) + 1;
        const randomUserId = Math.floor(Math.random() * 40000000) + 1;
        writer.write({
            user_id: randomUserId,
            restaurant_id: randomRestaurantid,
            rating: randomRating,
            date: faker.date.past().toLocaleDateString()
        })
    }
    writer.end();
    console.log('done');
}

dataGen();