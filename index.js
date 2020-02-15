const app = require('./src/app');
const { env, port, db } = require('./src/config');
const { connect, mongoose } = require('./src/database');

try {

    connect(db.url); // Connect to MongoDB
    mongoose.set('debug', env === "DEV"); // Set Debug mode in DEV 

    //Start the server
    const listener = app.listen(port || 8001, () => {
        console.log('SERVER LISTENING ON PORT ' + listener.address().port);
    })

} catch (e) {
    console.error('ERROR:', e.message);
}