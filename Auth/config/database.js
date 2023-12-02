const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,
        useUnifiedTopology:true}
        )
        .then(()=>{console.log("BD Connection succesfully")})
        .catch((err) =>{
            console.log("DB connection issue");
            console.error(err);
            process.exit(1);
        })
}