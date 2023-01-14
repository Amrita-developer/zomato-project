import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Styles/Details.css';
import Cartlist from './Cartlist';
//import Cart from './Cart';

const Details = ({ count, addtoCart, handleShow }) => {
  const params = useParams();
  console.log(params)
  const [restuarantDetail, setRestuarantDetail] = useState({});
  const [itemDetail, setItemDetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5300/restaurant/" + params.restuarant_id)
      .then(res => res.json())
      .then(detail => setRestuarantDetail(detail.data[0]));

  }, []);

  useEffect(() => {
    fetch("http://localhost:5300/item/" + params.restuarant_id)
      .then(res => res.json())
      .then(detail => setItemDetail(detail.data));

  }, []);




  return (
    <>

      
        <div className="container cart">
        {/* <a href=''><div classname="shopping-cart stretched-link" onClick={() => handleShow(false)}>Shopping</div></a> */}
        {/* <a href=''><div className='cart stretched-link text-dark ' onClick={() => handleShow(true)}>Cart<sup>{count}</sup></div></a> */}
       <div className='cart1 stretched-link text-dark ' onClick={() => handleShow(true)}>
          <img src={require("../Assets/cart-icon.png")} height="50" width="50"  ></img>
         
          <span className="count text-primary">{count}</span>
          </div> 
          
        </div>
        <div className="container">

          <div className=" header-image mt-3">
            <img src={"http://localhost:4500/images/" + restuarantDetail.image} height=" 420px" />
          </div>

          <div className="row justify-content-around my-4">
            <h5 className="col-6 fw-bold restaurant-title">{restuarantDetail.restuarant_name}</h5>

            <h5 className="col-6 rating"> {restuarantDetail.rating}&nbsp;★ </h5>
            <h5 className="fw-bold mt-3">{restuarantDetail.restuarant_description}</h5>
            <h5 className="fw-bold d-inline">{restuarantDetail.Address}</h5>
          </div>

          <div className="row mt-5">
            <h3>Recommended Food Items</h3>
            {itemDetail.map(cards => (

              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-3 my-5">

                <div className="item-card" >
                  <img src={"http://localhost:4500/images/" + cards.item_image} className="rounded" ></img>

                  {/* <a href="#" className="stretched-link text-dark">  */}

                  <h5 className="card-name mt-2">{cards.item_name}</h5>
                  <div className="row">
                    <div className="col-6">
                      <h5 className="card-cost">$&nbsp; {cards.cost} </h5>
                    </div>
                    <div className="col-6">
                      <h5 className="card-rating">{cards.rating}&nbsp;★ </h5>
                    </div>
                  </div>
                  <button className="btn btn-primary order mt-1" onClick={() => addtoCart(cards)}>ADD</button>
                  {/* </a>  */}
                </div>
              </div>

            ))}
          </div>
        </div>
     


    </>

  );
}
export default Details;