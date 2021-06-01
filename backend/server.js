require("dotenv").config({path:"../env"})
const  express = require('express'); 
const concetdb = require("./config/db") ;
const productRouter = require('./routes/productRouter') ; 
const authRouter = require('./routes/authRouter') ; 
const privateRouter = require("./routes/private") ;
const errorHandler = require('./middleware/error') ; 

concetdb() ; 
const app = express() ;
app.use(function(req,res,next){ 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use(express.json()) ; 
app.use("/api/products",productRouter) ; 
app.use('/auth',authRouter);
app.use('/private',privateRouter);

app.use(errorHandler);

const port = process.env.PORT || 5000 ;
app.listen(port, () => {
    console.log(`Server started on port`);
});