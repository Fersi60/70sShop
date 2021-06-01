import './App.css';
import {BrowserRouter as  Router,Switch,Route, BrowserRouter} from 'react-router-dom' ; 
import {useState} from 'react' ; 
import HomeScreen from './Screens/HomeScreen' ; 
import ProductScreen from './Screens/ProductScreen' ; 
import CartScreen from './Screens/CartScreen' ; 

 
import Navbar from './Componnents/Navbar' ; 
import BackDrop from './Componnents/BackDrop' ;
import SideDrawer from './Componnents/SideDrawer' ; 
import Login from './Componnents/Login';
import RegisterScreen from './Componnents/RegisterScreen';
import ForgotPasswordScreen from './Componnents/ForgotPasswordScreen';
import PrivateScreen from './Componnents/PrivateScreen' ; 
import PrivateRoute from './Componnents/routing/PrivateRoute' ;
import dashboard from './dashboard/dashboard';
import listProduct from './dashboard/ListProduct' ;
import NewProduct from './dashboard/NewProduct';
import EditProduct from './dashboard/EditProduct';
function App() {

  const [sideToggle,setSideToggle] = useState(false);
  

  return (
    <>
    <Router>
    <Route exact path="/dashboard" component={dashboard}/>
     <Route  exact path="/dashboard/list" component={listProduct} />
     <Route  exact path="/dashboard/add" component={NewProduct} />
     <Route  exact path="/dashboard/edit" component={EditProduct} />
      <Navbar click ={() => setSideToggle(true)} />
      <BackDrop show={sideToggle} click={()=>setSideToggle(false)}/>
      <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path ="/products/:id" component={ProductScreen}/>
            <Route exact path ="/Cart" component={CartScreen}/>
            <PrivateRoute exact path="/private" component={PrivateScreen}></PrivateRoute>
            <Route exact path= "/login" component ={Login}/>
            <Route exact path= "/register" component ={RegisterScreen}/>
            <Route exact path= "/forgotpassword" component ={ForgotPasswordScreen}/>
            <Route exact path= "/logout" component ={PrivateScreen}/>

            
          </Switch>
        </main> 
    </Router>
    </>
  );
}

export default App;
