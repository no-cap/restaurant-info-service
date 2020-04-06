# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```






## CRUD API


## Create
Post 
=> Restaurant Info

Posts the header information of the restaurant;
 > API: /restaurant/:id
Example input:
```ssh
{
  rating: 4,
  comment: 'I really liked it ',
  name: 'Rowe, Mann and Conn'
}
```



## Read
 > API: /restaurants/:id
Gets the information seeded into the database to display

Example response:
```ssh
{
  id: 56
  category: "French"
  restaurantname: "Parker - Spinka"
  claimed: "false"
  prize: "$"
}
```


## Update 
=> Restaurant info
 > API: /restaurants/:id
Changes made in the restaurante information have to be updated

Example input:
```ssh
{
  id: 74,
  category: "Italian",
  restaunrantname: "Gino's",
  claimed: "true",
  prize: "$$"
}
```


## Delete 
 > API: /restaurants/:id

Deleting information from a current restaurant

- Restaurant
- Review

Example input:
```ssh
{
  restaurant_id: #
}
```

```ssh
{
  review_id: #
}
```
