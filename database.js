const mongoose = require('mongoose');
const connection = process.env.MONGO_URI;
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
