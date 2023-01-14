import { useState } from "react";
import "../Styles/Quicksearches.css";
import Orderonline from "./Orderonline";

const Quicksearches = () =>{
    const [location,setLocation]=useState([])
    const cards = [{
        title: 'Order Online',
        image: 'order-online.jpg',
        description: 'Stay home and order to your doorsteps'
    },
    {
        title: 'Dining Out',
        image: 'dining-img.jpg',
        description: 'View the citys favourite dining venues'
    },
    {
        title: 'Nightlifes and clubs',
        image: 'night-club.jpg',
        description: 'Explore the citys top nighlife outlets'
    }]

    const onCardChange= (event) => {
       // let currentlocation1= event.target.name;
        let currentlocation = event.target.value;
       // console.log(currentlocation1)
        console.log(currentlocation)
        let category= event.target.name;
        console.log(category)
       window.location.href = window.location.origin + '/location/' +currentlocation +'/' +category;
       
       
    } 
    return(
        <>  <div className="container ">
        <div className="row mt-3">
            {cards.map(card => (

                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto">
                    <div className="card"  onClick={onCardChange}>
                        <img src={require('../Assets/' + card.image)} className="rounded card-img-top " ></img>
                        <div className="card-body">
                            <a href='/filter/' className="stretched-link text-dark">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.description} </p>
                            </a>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    </div>
 </>
 )

}

    
export default Quicksearches;