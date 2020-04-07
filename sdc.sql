-- CREATE DATABASE restaurantinfo;

\c restaurantinfo

CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    restaurant_name VARCHAR(60) NOT NULL,
    claimed VARCHAR(6) NOT NULL,
    prize VARCHAR(5) NOT NULL
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    rating SMALLINT NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY(restaurant_id) REFERENCES restaurants(id)
);


-- COPY restaurants (category, restaurant_name, claimed, prize) FROM '/Users/andresfelipevalenciatristan/Desktop/HR/seniorSide/SDC/restaurant-info-service/restaurants.csv' with delimiter ',' CSV HEADER;
-- psql -h localhost -d restaurantinfo -U mainuser -f sdc.sql






-- CASSANDRA 

-- CREATE KEYSPACE restaurants_data
-- WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': '1'} 

-- CREATE TABLE restaurants (
--     id int PRIMARY KEY,
--     category text,
--     restaurant_name text,
--     claimed text,
--     prize text
-- )

-- CREATE TABLE reviews (
--     id int PRIMARY KEY,
--     user_id int,
--     restaurant_id int,
--     rating int,
--     date date
-- )
