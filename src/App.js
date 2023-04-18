import React, { useEffect, useState } from 'react';
import './App.css';
import { setProducts } from './redux/actions/products.actions';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from './services/products.service';
import { ProductList } from './Components/Products/ProductsList';
import { BrowserRouter, Routes, Switch, Route, useParams, Redirect, withRouter } from 'react-router-dom'
import { Wellcome } from './Components/Wellcome/Wellcome';
import { ProductDetails } from './Components/Products/ProductDetails';
import { ViewCart } from './Components/Cart/ViewCart'
import { NavBar } from './Components/navBar/NavBar'
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';

function App() {
  useEffect(() => {

  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ProductList />}>
          </Route>
          <Route path='/products' element={<ProductList />}>
          </Route>
          <Route path='/products/:id' element={<ProductDetails />}>
          </Route>
          <Route path='/cart' element={<ViewCart />}>
          </Route>
          <Route path='/login' element={<Login />}>
          </Route>
          <Route path='/register' element={<Register />}>
          </Route>
          <Route path='/welcome' element={<Wellcome />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
