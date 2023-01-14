import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Orderonline = () => {
    const params = useParams();
    console.log(params)
    //const [cardDetail, setcardDetail] = useState([]);
    const [Details, setDetail] = useState([]);
    //    useEffect(() => {
    //         fetch("http://localhost:5300/zomato_locations/" + params.location_name)
    //            .then(res => res.json())
    //          .then(detail => setcardDetail(detail.data[0]));

    //      },[]);

    useEffect(() => {
        fetch("http://localhost:5300/restaurant/category/" + params.location + '/' + params.category)
            .then(res => res.json())
            .then(detail => setDetail(detail.data));

    }, []);


    console.log('this is' + params.category)
    console.log('location' + params.location)

    return (
        <>
            <div className="container ">hiii
                <div className="row mt-3 ">
                    {Details.map(cards => (

                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto">

                            <div className="card">

                                <img src={"http://localhost:4500/images/" + cards.image} className="rounded card-img-top "></img>
                                <div className="card-body">
                                    <a href="" className="stretched-link text-dark">
                                        <h5 className="card-title">{cards.category}</h5>
                                        <p className="card-text">{cards.location} </p>
                                        <p className="card-name">{cards.restuarant_name}</p>
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
export default Orderonline;