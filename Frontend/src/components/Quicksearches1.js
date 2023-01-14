import { Component } from "react";
import "../Styles/Quicksearches.css";

class Quicksearches extends Component {

    cardDetails() {

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
        return cards;
    }
    render() {
        const cards = this.cardDetails();
        return (

            <div className="container ">
                <div className="row mt-3 ">
                    {cards.map(card => (

                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto">
                            <div className="card" >
                                <img src={require('../Assets/' + card.image)} className="rounded card-img-top "></img>
                                <div className="card-body">
                                    <a href="#" className="stretched-link text-dark">
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className="card-text">{card.description} </p>
                                    </a>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        )

    }
}
export default Quicksearches;
