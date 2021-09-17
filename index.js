const { Sequelize, Model, DataTypes } = require('sequelize');
const finale = require('finale-rest'),
      express = require('express'),
      http = require('http');

// Setup database
const database = new Sequelize('musicians', 'guest', 'guest', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres'
});

class Musicians extends Model {}
Musicians.init({
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
}, { sequelize: database, modelName: 'musicians' });

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
const musiciansResource = finale.resource({
    model: Musicians,
    endpoints: ['/musicians', '/musicians/:id']
});

(async () => {
    await database.sync({ force: true })

    const steve = await Musicians.create({
        name: 'Steve Harris',
        instrument: 'Bass'
    });
    console.log(steve.toJSON());

    server.listen(8080, function() {
        var host = server.address().address,
            port = server.address().port;
        console.log('listening at http://%s:%s', host, port);
    });
})();
