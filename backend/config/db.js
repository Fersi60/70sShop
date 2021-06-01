require('dotenv').config() ; 
const mongoose = require('mongoose') ; 

const concetdb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
        }) ; 
        console.log("MongoDB  conection  Success") ;
    }catch(e){ 
        console.error("Mongo conection fail") ; 
        process.exit(1) ;
    }
}

module.exports = concetdb ; 