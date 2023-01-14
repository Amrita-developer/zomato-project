import Header from "./Header";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import Footer from "./Footer";


const Layout = (props) => {
  // const [cart,setCart]=useState()
     let header=<Header/>
     let footer=<Footer/>
    const location = useLocation();
    //return location.pathname; 
    
   if( location.pathname ==="/")
  {header=null}
    return ( 
        <div>
           {header}
          
            {props.children}
            {footer}
           
        </div>
     );
    
       }
    export default Layout; 