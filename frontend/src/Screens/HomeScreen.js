import React from 'react'
import "./HomeScreen.css" ; 
import Product from '../Componnents/Product' ; 
import {useEffect} from 'react' ; 
import {useSelector , useDispatch} from 'react-redux'; 

import {getProducts as listProducts } from '../redux/actions/productAction' ; 
import FilterSection from '../Componnents/FilterSection';
const HomeScreen = () => {
    const dispatch = useDispatch();
  
    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;
  
    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]);
  
    return (
      <div className="homescreen">
        <br></br>
        <h2 className="homescreen__title">Latest Products : </h2>
        <br></br>
        <FilterSection></FilterSection>
        <div className="homescreen__products">
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) => (
              <Product
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                imgUrl={product.imgUrl}
                _id={product._id}
              />
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default HomeScreen;