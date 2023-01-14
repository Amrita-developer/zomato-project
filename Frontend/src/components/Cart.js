// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import '../Styles/Details.css';
// import Cartlist  from '../components/Cartlist';
// import Details from "../components/Details";

// const Cart = () => {

//   //cart
//  const [cart,setCart]=useState([]);
//  const [showCart,setshowCart]=useState(false);
//   console.log(cart)
//    const addtoCart=(data)=>{
//   setCart([...cart,{...data,quantity:1}])
//   }
//   const count=cart.length
// const handleShow=(value)=>
// {
// setshowCart(value)
// }

    
//     return (
//        <>
//     {/* <div onClick={()=>handleShow(false)}>Shoopping</div>  */}
//  {/* <div className='text-dark cart' onClick={()=>handleShow(true)}>Cart<sup>{count}</sup></div>    */}
//  {
// showCart ? 
//  <Cartlist cart={cart} ></Cartlist> :
 
//  <Details addtoCart={addtoCart} count={cart.length}/>
// }
         
//  </> 
       
//     );
// }
// export default Cart;