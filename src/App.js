import * as React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import CreateProduct from './features/product/screens/createProduct';
import EditProduct from './features/product/screens/editProduct';
import Products from './features/product/screens/products';

const App = () => (
  <div className="container">
    <Router>
      <Switch>
        <Route exact path='/' component={Products} />
        <Route exact path='/create' component={CreateProduct} />
        <Route path='/edit/:id' component={EditProduct} />
      </Switch>
    </Router>
  </div>
);

export default App;
