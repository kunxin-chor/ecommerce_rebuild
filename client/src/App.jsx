import { Route, Switch } from 'wouter';
import "./styles.css"

import Navbar from './Navbar';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import ProductPage from './ProductPage';
import FlashMessage from './FlashMessage';
import ShoppingCart from './ShoppingCart';

function App() {


  return (
    <>
      <Navbar />
      <FlashMessage/>

      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/cart" component={ShoppingCart}/>
      </Switch>
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2023 E-Shop. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;