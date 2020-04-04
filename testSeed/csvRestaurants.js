const fs = require('fs');
const cvsWriter = require('csv-write-stream');
var writer = cvsWriter();
const faker = require('faker');
counter = 0;

const categories = ['Japanese', 'Vietamese', 'Chinese', 'Korean', 'American', 'Mexican', 'French', 'Italian', 'buffet', 'bar'];

const dataGen = () => {
    writer.pipe(fs.createWriteStream('data.csv'));
    for (var i = 0; i < 100; i++) {
        const priceRange = ['$', '$$', '$$$']
        const randomPrice = priceRange[Math.floor(Math.random() * 3)]
        const categoriesIndex = Math.floor(Math.random() * categories.length);
        var Claimstatus = true;
        if (Math.floor(Math.random() * 2) === 1) {
            Claimstatus = false;
        } else {
            Claimstatus = true;
        }
        writer.write({
            category: categories[categoriesIndex],
            name: faker.company.companyName(),
            claimed: Claimstatus,
            prize: randomPrice
        })
    }
    writer.end();
    console.log('done');
}

dataGen();