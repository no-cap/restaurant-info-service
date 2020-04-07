const faker = require('faker');
const db = require('./db.js'); 

// const randomCard = faker.helpers.createCard(); // random contact card containing


const categories = ['Japanese', 'Vietamese', 'Chinese', 'Korean', 'American', 'Mexican', 'French', 'Italian', 'buffet', 'bar'];

const seeding = () => {
  for (var i = 0; i < 100; i++) {
    const priceRange = ['$','$$','$$$']
    const randomPrice = priceRange[Math.floor(Math.random() * 3)] 
    const categoriesIndex = Math.floor(Math.random() * categories.length);
    var Claimstatus = true;
    if (Math.floor(Math.random() * 2) === 1) {
      Claimstatus = false;
    }else{
      Claimstatus = true;
    }
    const createRestaurant = {
      category: categories[categoriesIndex],
      name: faker.commerce.productName(),
      claimed: Claimstatus
    };


    db.query(`INSERT INTO restaurants (category, restaurantname, claimed, prize)
    VALUES  ('${createRestaurant.category}', '${createRestaurant.name}','${createRestaurant.claimed}', '${randomPrice}' )`)
  }
  // VALUES ("${createRestaurant.category}", "${createRestaurant.name}", "${createRestaurant.claimed}", "${randomPrice}")

  for (var i = 0 ; i < 1000; i++) {
    const randomRating = Math.floor(Math.random() * 6);
    const randomRestaurantid = Math.floor(Math.random() * 100) +1;
    const createReview = {
      date: faker.date.past().toLocaleDateString(),
      star: randomRating,
      restaurant_id: randomRestaurantid
    };
    console.log(createReview.date)
  
     db.query(`INSERT INTO reviews (restaurant_id, rating, date)
     VALUES (${createReview.restaurant_id}, ${createReview.star}, '2019-02-22')`)
  }
}
//    VALUES (1, ${createReview.restaurant_id}, "Comment here", "${createReview.star}", "${createReview.date}")`)


seeding();

module.exports = {seeding};


// for (var i = 0 ; i < 10000; i++) {
//   const randomRating = Math.floor(Math.random() * 6);
//   const randomRestaurantid = Math.floor(Math.random() * 100) +1;
//   const createReview = {
//     date: faker.date.past().toLocaleDateString(),
//     star: randomRating,
//     restaurant_id: randomRestaurantid
//   };
//   console.log(randomRestaurantid)

//    db.query(`INSERT INTO reviews (user_id, restaurant_id, comment, rating, date)
//    VALUES (1, ${createReview.restaurant_id}, "Comment here", "${createReview.star}", "${createReview.date}")`)
// }
// }





// db.query(`INSERT INTO restaurants (category, restaurant_name, claimed, prize)
// VALUES ("${createRestaurant.category}", "${createRestaurant.name}", "${createRestaurant.claimed}", "${randomPrice}")`)