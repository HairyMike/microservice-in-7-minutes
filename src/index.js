const { Sequelize, Model, DataTypes } = require('sequelize');
const finale = require('finale-rest'),
      express = require('express'),
      http = require('http');

// Setup database
const database = new Sequelize('users', 'guest', 'guest', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres'
});

class User extends Model {}
User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, { sequelize: database, modelName: 'user' });

// Configure a web server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const server = http.createServer(app);

// Initialize finale
finale.initialize({
    app: app,
    sequelize: database
});

// Create REST resource
finale.resource({
    model: User,
    endpoints: ['/users', '/users/:id']
});

(async () => {
    await database.sync({ force: true })

    const steve = await User.create({
        username: 'steve.harris',
        birthday: new Date(1950, 6, 20)
    });
    console.log(steve.toJSON());

    server.listen(8080, function() {
        var host = server.address().address,
            port = server.address().port;
        console.log('listening at http://%s:%s', host, port);
    });
})();