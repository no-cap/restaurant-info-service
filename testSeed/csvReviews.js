const fs = require('fs');
const cvsWriter = require('csv-write-stream');
var writer = cvsWriter();
const faker = require('faker');
counter = 0;

const categories = ['Japanese', 'Vietamese', 'Chinese', 'Korean', 'American', 'Mexican', 'French', 'Italian', 'buffet', 'bar'];

const dataGen = () => {
    writer.pipe(fs.createWriteStream('data.csv'));
    for (var i = 0; i < 100; i++) {
        const randomRating = Math.floor(Math.random() * 6);
        const randomRestaurantid = Math.floor(Math.random() * 100) + 1;
        writer.write({
            date: faker.date.past().toLocaleDateString(),
            star: randomRating,
            restaurant_id: randomRestaurantid
        })
    }
    writer.end();
    console.log('done');
}

dataGen();