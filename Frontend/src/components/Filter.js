import { Component } from "react";
import '../Styles/Filter.css'
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restuarantList: [],
            locations: [],
            filterChange: false,
            filterParams: ''
        };
    }

    componentDidMount()
    {
        this.locationFetch();
    }

    locationFetch()
    {
        fetch("http://localhost:5300/zomato_locations")
      .then(res => res.json())
      .then(locations=>this.setState({locations:locations.data}))
    }

    filterList(){
        console.log("List")
        let filterParams='';
        
        
        const location = document.querySelector('select[name=filter-location]').value;
        
        const cuisine = document.querySelectorAll('input[name=cuisine]:checked'); 

        const cost = document.querySelectorAll('input[name=cost]:checked'); 

        const sort = document.querySelectorAll('input[name=sort]:checked'); 
        console.log('location is'+location);
        // console.log('cuisine is'+cuisine);
        // console.log('cost is'+cost);
        // console.log('sort is'+sort);

        
         if (location) {
            // http://localhost:2500/restuarants/getall?location=1
            filterParams = 'location=' + location;
            if (filterParams) {
                filterParams += '&';
            }
        }

        if (cuisine && cuisine.length) {
            let cuisineIds = [];
            // will take all the ids from the selected checkboxes and puts it in the array cuisineIds
            cuisine.forEach(c => {
                cuisineIds.push(c.id);
            });


            if (filterParams) {
                filterParams += '&';
            }
            filterParams += 'cuisine=' + cuisineIds.join(',');
        }

        if (sort.length) {
            if (filterParams) {
                filterParams += '&';
            }
            filterParams += 'sort=' + sort[0].id; // we know that this is a radiogroup and can have only 1 value at a time. so we can always be sure that the array size will be 1
        }

        if (cost.length) {
            if (filterParams) {
                filterParams += '&';
            }
            filterParams += 'cost=' + cost[0].id; // we know that this is a radiogroup and can have only 1 value at a time. so we can always be sure that the array size will be 1
        }

        console.log(filterParams);

        this.setState({
            filterParams: filterParams
        });

        fetch('http://localhost:5300/restro/getall?' + filterParams)
            .then(res => res.json())
            .then(restuarants => {
                this.setState({
                    filterChange: false,
                    restuarantList: restuarants.data
                });
            });

    }

    componentDidUpdate(previousProps,previousState){
        if(this.state.filterChange)
        {
            if(previousState.filterChange!==this.state.filterChange)
            {
                this.filterList();
            }
        }
    }
    render() {
        const updateFilter=()=>
        {
            this.setState(
                {
                    filterChange:true
                }
            )
        }
        return (
            <>
<div className="container filter">
            <div className="row  ">
                <div className=" my-5 ms-5">
                    <label>Select Location</label>
                    <select name="filter-location" defaultValue={''}>
                    <option value="" disabled>Please select a location</option>
                    {this.state.locations.map(location=>(
                        <option value={location.location_id} key={location.location_id}>{location.location_name}</option>
                                           ))}
                    </select>
                        <hr className="line"/>

                    <label>Cuisines</label>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="cuisine" id="1" />
                        <label className="form-check-label" htmlFor="1">North Indian</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="cuisine" id="2" />
                        <label className="form-check-label" htmlFor="2">South Indian</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="cuisine" id="3" />
                        <label className="form-check-label" htmlFor="3">Fast Food</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="cuisine" id="4" />
                        <label className="form-check-label" htmlFor="4">Any</label>
                    </div>
                   
                    <hr className="line"/>
                   <label>Cost</label>
                   <div className="form-check">
                   <input type="radio" className="form-check-input" name="cost" id="lt" />
                        <label className="form-check-label" htmlFor="lt">Less than 500</label>
                   </div>
                   <div className="form-check">
                   <input type="radio" className="form-check-input" name="cost" id="gt" />
                        <label className="form-check-label" htmlFor="gt">Greater than 500</label>
                   </div>

                   <hr className="line"/>
                   <label>Sort by</label>
                   <div className="form-check">
                   <input type="radio" className="form-check-input" name="sort" id="hl" />
                        <label className="form-check-label" htmlFor="hl">Prices high to low</label>
                   </div>
                   <div className="form-check">
                   <input type="radio" className="form-check-input" name="sort" id="lh" />
                        <label className="form-check-label" htmlFor="lh">Prices low to high</label>
                   </div>
                   
                   <hr className="line"/>
                   <button onClick={updateFilter}>Apply</button>
              </div>
              </div>

              </div>
              <div className="container">
              <div className="row mt-3">
                    {this.state.restuarantList.map(card => (
                        // <div className="results  col-md-8 col-lg-6 col-xl-4 col-xxl-4 my-3 mx-auto">
                        <div className="results  col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4  my-3 mx-auto">
                        <div className="card" key={card.restuarant_id}>
                            <img src={"http://localhost:4500/images/" + card.image} className="rounded card-img-top "></img>
                             {/* <div className="card-body">  */}
                                <a href="#" className="stretched-link text-dark">
                                    <h5 className="card-title">{card.restuarant_name}</h5>
                                    <p className="card-text">{card.rating}*</p> 
                                    <h6 className="card-text1">{card.Address}</h6> 
                                </a>
                            {/* </div>  */}
                        </div>
                     </div>
    
                    ))}
                    </div>
                    </div>
                    {/* </div> */}
             {/* </div>   */}
</>
           
        )
    }


}

export default Filter;