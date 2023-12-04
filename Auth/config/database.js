const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }, (err) => {
        if (err) {
            console.log("DB connection issue");
            console.error(err);
            process.exit(1);
        }
        console.log("DB Connection successfully");
    });
};
