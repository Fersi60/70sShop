import React from 'react';
import Sidebar from './sider' ; 
import axios from 'axios' ;
import './NewProduct.css'
import {Redirect} from 'react-router-dom' ; 
class EditProduct extends React.Component { 
    constructor(props){ 
        super(props) 
        this.state={ 
            name : '',
            imgUrl :'',
            description :'' ,
            price :'',
            countInStock :null
        }
    }
    componentDidMount=()=>{ 
        const { id } = this.props.match.params; 
        this.GetOne(id) ; 
    }
    GetOne = async(id) =>{ 
        await axios.get('/api/products/'+ id)
        .then(res =>{
            this.setState({
                name : res.data.name,
                imgUrl : res.data.imgUrl,
                description : res.data.description,
                price : res.data.price,
                countInStock : res.data.countInStock

            }); 
        }).catch(function (e){
            console.log(e) ; 
        })
    }
    EditProduct= ()=> { 
        const{ id } = this.props.match.params ; 
        const ProductObject = { 
            _id:id, 
            name : this.state.name,
            imgUrl :this.state.imgUrl,
            description :this.state.description,
            price :this.state.price,
            countInStock: this.state.countInStock,
        }; 
        axios.put('/api/products/'+id,ProductObject).then(res=>console.log(res.data)); 
        this.setState({redirect :"list"}) ; 
    }
    handleChange = (e)=>{
        let nam =  e.target.name ; 
        let val = e.target.value; 
        this.setState({[nam]: val}) ; 
    }
    render(){
        if(this.state.redirect){ 
            return <Redirect to = {this.state.redirect}/> 
        }
        return (
            <div>
                <div className="wrapper">
                    <Sidebar/>
                    <div className="img-add"> </div>
            <div class="container">
            <div className="from-cont">
        <form onSubmit={this.EditProduct} class="form-group">
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
            </div>
        );
    }
    
}

export default EditProduct;