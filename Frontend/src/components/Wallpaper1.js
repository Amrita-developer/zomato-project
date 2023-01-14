import { useState } from 'react';
import { useEffect } from 'react';
import '../Styles/Wallpaper.css'
const Wallpaper1 = () => {

    const [locations, setLocations] = useState([]);
    const [restaurants,setRestaurants]=useState([]);

    const locationFetch = () => {
        fetch('http://localhost:3500/zomato_locations')
            .then(res => res.json())
            .then(locations => setLocations(locations.data));
    };

    const onLocationChange=(event)=>
    {
      let currentLocation=event.target.value;
    
      fetch('http://localhost:3500/restaurant?location=' +currentLocation)
      .then(res=>res.json())
      .then(restaurants=>setRestaurants(restaurants.data))
    }


    useEffect(() => {
        locationFetch();
    }, [])


    return (
        <>
            <div className="bg-img">

                <img src={require('../Assets/Zomato-PNG-Logo-White - Copy.png')} className="card-img  mx-auto d-block"></img>

                <h1 className="text-center text-light mt-4">Discover the best food & drinks in Thane</h1>

                <div className="container ">

                    <div className="d-flex justify-content-center header-flex ">
                        <div className="left-search-bar mx-3">

                            <select className="form-control2" id="sel1" defaultValue={''} onChange={onLocationChange}>
                                <option value="" disabled>Please select a location</option>
                                {locations.map(location => (
                                <option value={location.location_id} key={location.location_id}>{location.location_name}</option>
                            ))}
                            </select>
                        </div>


                        <div className="right-search-bar">
                            <select className="form-control1" defaultValue={''}>
                                <option value="" disabled>Please select a restuarant</option>
                                {restaurants.map(restaurant=>(
                                    <option value={restaurant.restuarant_id} key={restaurant.restuarant_id}>{restaurant.restuarant_name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Wallpaper1;