import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import Layout from './components/Layout/Layout';
import Orderonline from './components/Orderonline';
import Filter from './components/Filter';
//import Cart from './components/Cart';
import { useEffect, useState } from "react";
import Cartlist from './components/Cartlist';
function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setshowCart] = useState(false);
  console.log(cart)
  const addtoCart = (data) => {
    localStorage.getItem('user')&&localStorage.getItem('pass')?
    setCart([...cart, { ...data, quantity: 1 }]):
    alert("Please Login First before to Order Food")
  }

  const handleShow = (value) => {
    setshowCart(value)
    // window.location.href = window.location.origin + '/cart';
  }
  
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>

            {
              showCart ?
                <Route path='/restaurant/:restuarant_id' element={<Cartlist cart={cart} handleShow={handleShow}></Cartlist>}></Route> :
                 <> 
                  <Route path='/restaurant/:restuarant_id' element={<Details addtoCart={addtoCart} count={cart.length} handleShow={handleShow}>
                  </Details>}></Route>
                  <Route path='/item/:restuarant_id' element={<Details addtoCart={addtoCart} count={cart.length} handleShow={handleShow}>
                  </Details>}></Route>
                 </> 

           } 


            <Route exact path='/' element={<Home />} ></Route>
           <Route path='/location/:location/:category' element={<Orderonline />}></Route> 
           {/* <Route path='/:location_name' element={<Orderonline/>}></Route>  */}
            <Route path='/filter' element={<Filter />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
