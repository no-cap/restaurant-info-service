CREATE TABLE restaurants (
    id INT AUTO_INCREMENT,
    category VARCHAR(50) NOT NULL,
    restaurant_name VARCHAR(50) NOT NULL,
    claimed VARCHAR(6) NOT NULL,
    prize VARCHAR(5) NOT NULL,
    PRIMARY KEY("id")
)

CREATE TABLE reviews (
    id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    comment TEXT NOT NULL,
    rating SMALLINT NOT NULL,
    date DATE NOT NULL,
    PRIMARY KEY('id'),
    FOREIGN KEY('restaunrant_id') REFERENCES restaurants('id')
)




CREATE KEYSPACE restaurants_data
WITH REPLICATION = {'class': 'SimpleStrategy'}

CREATE TABLE restaurants (
    category VARCHAR,
    restaurant_name VARCHAR,
    claimed VARCHAR,
    prize VARCHAR
)

