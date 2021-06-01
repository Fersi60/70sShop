import React from 'react' ; 
import './Product.css' ; 
import {Link} from 'react-router-dom' ; 
const Product = ({name,imgUrl,description,price,_id}) => {
    return (
        <div className="product">
            <img src={imgUrl} alt={name}/>
            <div className="product__info">
                <p className="info__name">{name}</p>
                <p className="info_desp">{description.substring(0,100)}....</p>
                <p className="info__price">{price}DT</p>
                <Link to={`/products/${_id}`}className="info_btn">View</Link>
            </div>
        </div>
    )
}

export default Product
