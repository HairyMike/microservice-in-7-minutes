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
docker-compose up
```
Server runs on http://localhost:8080

If you want to run locally, you can do this:
```
docker-compose stop microservice
npm install
npm start # or use vscode debugging tools
```

Controller | Endpoint | Description
-----------|----------|------------
musicianResource.create | POST /musicians | Create a musician
musicianResource.list | GET /musicians  | Get a listing of musicians
musicianResource.read | GET /musicians/:id | Get details about a musician
musicianResource.update | PUT /musicians/:id | Update a musician
musicianResource.delete | DELETE /musicians/:id | Delete a musician
