import axios from 'axios'
import React from 'react'
import Sider from './sider'
import MUIDataTable from 'mui-datatables' ;
import {Grid,Button} from "@material-ui/core" ; 
import DeleteIcon from '@material-ui/icons/Delete';
import {Link, Route} from 'react-router-dom' ; 
import './ListProduct.css' ;
import EditProduct from './EditProduct';
export default  class ProductList extends React.Component {    
    
     
    constructor(props){
        super(props)  ; 
        this.state = {prod: []};
    }
    componentDidMount=async()=>{
        this.GetData() ; 
    }
    componentDidUpdate=async()=>{
        this.GetData() ; 
    }
    GetData = async()=>{ 
        await axios.get('/api/products/')
        .then(res =>{
            this.setState({ prod : res.data}) ; 
        }).catch(function(e) {
            console.log(e) ; 
        })
    }
    deleteProduct= async(_id)=>{ 
        await axios.delete('/api/products/'+_id)
        .then((res)=>{
            console.log("Product Successfully Deleted")
        }).catch((e)=>{
            console.log(e) ; 
        })
        }
       
    render() { 
        const columns =[
            {
                label : "Name",
                name : "name"
            }, 
            {
                label : "Description", 
                name : "description"
            }, 
            { 
                label : "Price", 
                name : "price"
            },
            {
                label : "CountInStock", 
                name : "countInStock"
            },
            { 
                label :"Edit",
                name : "_id",
            options : {
                customBodyRender :(value)=>(
                    <Link className="button1" to={'edit/'+value}>
                        Edit
                    </Link>
                )
            },
            }, 
            { 
                
                label : "Delete",
                name : "_id",
                options : {
                    customBodyRender :(value)=>(
                        <Button onClick={()=>{this.deleteProduct(value)}}  variant="contained" color="secondary" startIcon={<DeleteIcon />} >
                            Delete
                        </Button>
                    ) 
            }
        },
        ] ; 
        return(
            <div className="wrapper">
            <Sider></Sider>
        <Grid container className="table table-striped">
        <Grid item xs={12}>
        <MUIDataTable title="Products List" data={this.state.prod} columns={columns}options={{
        filterType: "checkbox",
        }} />
    </Grid>
    </Grid>
    </div>
        );
    }
}

