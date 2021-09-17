# Write a Microservice in 7 minutes!
By combining a few special nodejs libraries, its possible to build out
a fully functioning API featuring all CRUD operations for your data.

## Components

### Sequelize
Popular ORM that is compatible with most popular databases.  In this example
I've used Postgres.

https://sequelize.org/

### Express
Fast, minimalist web server.

https://expressjs.com/

### Finale
Creates REST endpoints and controllers for Sequelize models

https://github.com/tommybananas/finale

## Getting started

```
# build docker image
docker build . -t microservice
docker-compose up
```
Server runs on http://localhost:8080

Controller | Endpoint | Description
-----------|----------|------------
userResource.create | POST /users | Create a user
userResource.list | GET /users  | Get a listing of users
userResource.read | GET /users/:id | Get details about a user
userResource.update | PUT /users/:id | Update a user
userResource.delete | DELETE /users/:id | Delete a user
