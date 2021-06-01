import React from 'react'
import Sider from './sider' ; 
import './NewProduct.css'
import axios from'axios' ; 
import logo from '../img/sign-add-icon.png' ; 
import {Redirect} from 'react-router-dom' ; 
class NewProduct extends React.Component { 
    constructor(props){
    super(props) ; 
        this.state={ 
            name : '',
            imgUrl :'',
            description :'' ,
            price :'',
            countInStock :null
        }
    }
        addProduct =()=>{
            const productObject ={
                name : this.state.name,
                imgUrl :this.state.imgUrl,
                description :this.state.description,
                price :this.state.price,
                countInStock: this.state.countInStock,
                redirect : null,
            };
            axios.post('/api/products/add',productObject)
            .then(res=> console.log(res.data)) ; 
            this.setState({redirect :"list"})
            }
        handleChange =(e)=>{ 
                let nam = e.target.name ; 
                let val = e.target.value ; 
                this.setState({[nam] : val}) ; 
            }
        
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
            }
        return(
        <div className="wrapper">
            <Sider></Sider>
            <h1 className="title">Add Product</h1>
            <br></br>
           <div className="img-add"> <img src={logo} alt="add" ></img> </div>
            <div class="container">
            <div className="from-cont">
        <form onSubmit={this.addProduct} class="form-group">
        <label>
     Name: <input  class="form-control" type="text"name="name"value={this.state.name}onChange={this.handleChange}/>
    </label>
    <br></br>
    <label>
    ImgLink: <input  class="form-control" type="text" name="imgUrl" value={this.state.imgUrl}onChange={this.handleChange}/>
    </label>
    <br></br>
    <label>
     Description: <textarea  class="form-control" type="textarea"name="description"value={this.state.description}onChange={this.handleChange} rows="5" cols="33"/>
    </label>
    <br></br>
    <label>
     Price: <input  class="form-control" type="text"name="price"value={this.state.price}onChange={this.handleChange}/>
    </label>
    <br></br>
    <label>
     CountInStock: <input  class="form-control" type="text"name="countInStock"value={this.state.countInStock}onChange={this.handleChange}/>
    </label>
    <br></br>
    <br></br>
    <input type="submit" class="btn" value="Submit" />
   </form>
   </div>
   </div>
        </div>
        ) ;
    }
}

export default NewProduct
