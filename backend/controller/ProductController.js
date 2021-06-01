const Product = require('../models/product');

const getProducts = async (req, res) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  const getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
  
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  //admin

  const addProducts = async (req,res) =>{
    try {
      var prod = new Product({
        name : req.body.name , 
        imgUrl : req.body.imgUrl,
        description :req.body.description,
        price : req.body.price, 
        countInStock : req.body.countInStock
        
      })
      var result = await prod.save() ; 
      res.send(result);
  } catch(e){
      console.error(e) ; 
      res.status(500).send(e);
  }
}; 
const updateProduct = async (req,res) =>{ 
  try { 
      var prod = await Product.findById({_id : req.params.productId}).exec() ; 
      prod.name =  req.body.name ; 
      prod.imgUrl = req.body.imgUrl ; 
      prod.description = req.body.description ;
      prod.price = req.body.price ; 
      prod.countInStock = req.body.countInStock ; 
      
      
      var result = await prod.save() ; 
      res.send(result);
  }catch(e){ 
      res.status(400).send("unable to update the database");
  }
}
 const deleteProduct = async (req,res) =>{ 
   try{ 
      var result = await Product.deleteOne({_id: req.params.productId}).exec() ; 
      res.send(result);
   }catch(e){ 
      res.status(500).send(e);
   }
 }

  module.exports = {
    getProducts,
    getProductById,
    addProducts,
    updateProduct,
    deleteProduct,
  };