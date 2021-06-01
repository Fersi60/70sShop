const  express = require('express');
const router = express.Router() ; 

const {
    getProducts,
    getProductById,
    addProducts,
    updateProduct,
    deleteProduct
  } = require("../controller/ProductController");
  
  router.get("/", getProducts);
  router.get('/:id',getProductById) ;
  //admin 
  router.post("/add",addProducts) ; 
  router.put('/:productId',updateProduct) ; 
  router.delete('/:productId',deleteProduct) ; 
  module.exports = router;