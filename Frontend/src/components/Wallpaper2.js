import { useState } from 'react';
import { useEffect } from 'react';
import { json} from 'react-router-dom';
import {useNavigate, useLocation} from 'react-router-dom';
//import {useHistory} from 'react-router-dom';
import '../Styles/Wallpaper.css'
//import Home from './Home';
const Wallpaper = () => {
// function onLoad()
//  {
//   checkuserIsLoogedIn();
// }

const [isLoggedin, setIsLoggedin] = useState(false);
// function checkuserIsLoogedIn()
//  {
//  let userInfo=window.localStorage.getItem('userInfo')
//  if(userInfo)
// {
//    userInfo=JSON.parse(userInfo)
//   let userInfoContainer=document.getElementById('user-info-container')
//   userInfoContainer.classList.remove("d-none");
//   let buttonInfoContainer=document.getElementById('user-button-container')
//   buttonInfoContainer.classList.add('d-none');
//   let userDivName=document.getElementById('user-info-container-name')
//   userDivName.innerHTML='Hi'+userInfo.first_name.toUpperCase()

//  }

//  }


  const [locations, setLocations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const [passW, setPassw] = useState("");
  const [username1, setUsername1] = useState("");
 
  //for location dropdown
  const locationFetch = () => {
    fetch("http://localhost:5300/zomato_locations")
      .then(res => res.json())
      .then(locations => setLocations(locations.data));
  }

  //for restaurant dropdown
  const onLocationChange = (event) => {
    let currentLocation = event.target.value;
    console.log(currentLocation);
    fetch("http://localhost:5300/restaurant/location/" + currentLocation)
      .then(res => res.json())
      .then(restaurants => setRestaurants(restaurants.data));
  }

  const onRestaurantChange = (event) => {
    let currentRestaurant = event.target.value;
    console.log(currentRestaurant)
    window.location.href = window.location.origin + '/restaurant/' + currentRestaurant;
  }


  useEffect(() => {
    locationFetch();
  }, []);

  //login code
  function Login(e) {

    e.preventDefault();

    fetch(`http://localhost:8900/userdetail/login`, {
      method: "POST",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        username: username1,
        password: passW,

      }),
    })
      .then((response) => {
        return response.json()
        })
        .then((data) => {
       if (data.status === 200) {
       alert('success')
       window.localStorage.setItem('user', username1)
       window.localStorage.setItem('pass', passW)
        } 
    //   .then((loginInfo)=>
    //   {
    //     console.log(loginInfo.data)
    //     if(loginInfo.data.length)
    //     {
    //        alert("Logged in successfully");
    //        //window.localStorage.setItem('userInfo', JSON.stringify(loginInfo.data[0]));
    //        window.localStorage.setItem('userInfo',JSON.stringify(loginInfo.data[0]))
    //        setIsLoggedin(true);
    // setPassw('');
    // setUsername1('');
    
        //}
        else 
         {
          alert('login id password incorrect')
        }
      })
     }

    
   


  //signup
    const [user, setUser] = useState({
    first_name: "", last_name: "", location: "", username: "", password: ""
     });
    const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value })
  }
    const signUp = (event) => {
    event.preventDefault();
    const { first_name, last_name, location, username, password } = user

    fetch(`http://localhost:5300/user`, {
      method: "POST",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
        // token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhbWFraGFudCIsImlhdCI6MTY2OTU0MjQ1MH0.qWxVWS_tpqLEBWl5qwBcb3bWL2G02RG-ShlnNytdf5o'
      },
      body: JSON.stringify({
        first_name, last_name, location, username, password
      }),
    })
    .then((response) => {
      return response.json()

    }).then((data) =>
     {
      if (data.status === 200)
       {
        alert("Reistration Successful");
          window.localStorage.setItem('userInfo',JSON.stringify(data[0]))
          window.location.reload();
       } 
      else
       {
        alert("Registration failed");
        window.location.reload();
       }
      })
     
     // .catch((err) => console.log(err));
  }

   //logout
   const navigate = useNavigate();
   const location = useLocation();
//    useEffect(() => {
//     if (location.reload) {
//         // "someData" is available here.
//         window.location.reload()
//     }
// });
   const logout = () => {
   // window.localStorage.removeItem('userInfo');
    window.localStorage.clear();
    //setIsLoggedin(false);
     window.location.reload()
     navigate('../components/Home', {replace: true})
   
  }

return (
  localStorage.getItem('user')&&localStorage.getItem('pass')?
                      <div className='log-userinformation d-flex login-signup-row' >
                           <div className='user-name '>Hello <span>{localStorage.getItem('user')}</span></div>
                           <button className='btn btn-danger col-1 logout-button' style={{margin:"10px",width:"120px"}} onClick={logout}>Logout</button>
                     </div>:
    <div >
    <div  id="home" >
                {/* <div id="user-info-container" class="user-info-container d-none">
                    <div id="user-info-container-name"></div>
                    <button type="button" class="col-auto btn border border-secondary border-2 rounded-3 mx-3">Logout</button>
                </div> */}
                <div class="button-container row flex-wrap justify-content-end" id="user-button-container">
                   

    {/* {!isLoggedin ? ( */}
      <div >
      <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="sign-up-close"></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="p-2">
                  <label for="uname"><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" name="username" id="username"
                    required onChange={(e) => setUsername1(e.target.value)} />
                </div>
                <div className="p-2">
                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="password" id="password"
                    required onChange={(e) => setPassw(e.target.value)} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={Login} >Login</button>
            </div>
          </div>
        </div>
      </div>
     
        


      <div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupLabel">Sign up</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3" id="sign-up-form">
                <div className="col-md-6">
                  <label for="first_name" class="form-label">First name</label>
                  <input type="text" class="form-control" id="first_name" name="first_name"
                    required autoComplete='off' value={user.fname} onChange={handleInputs} />
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-6">
                  <label for="last_name" class="form-label">Last name</label>
                  <input type="text" class="form-control" id="last_name" name="last_name"
                    required autoComplete='off' value={user.lname} onChange={handleInputs} />
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-6">
                  <label for="location" class="form-label">Location</label>
                  <select className="form-control" id="search-bar" name="location"
                    defaultValue={''} value={user.location} onChange={handleInputs}>
                    <option value="" disabled>Please select a location</option>
                    {locations.map(location => (
                      <option value={location.location_id} key={location.location_id}>{location.location_name}</option>
                    ))}

                  </select>
                  <div className="invalid-feedback">
                    Please select a location.
                  </div>
                </div>
                <div className="col-md-12">
                  <label for="username" class="form-label">Username</label>
                  <div className="input-group has-validation">
                    <input type="text" class="form-control" id="username" name="username"
                      required autoComplete='off' value={user.username} onChange={handleInputs} />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <label for="password" class="form-label">Password</label>
                  <div className="input-group has-validation">
                    <input type="password" class="form-control" id="password" name="password"
                      required autoComplete='off' value={user.password} onChange={handleInputs} />
                    <div className="invalid-feedback">
                      Please choose a password.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label" for="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit" onClick={signUp}>Create new user</button>
                </div>
              </form>
             
            </div>
          </div>
        </div>
      </div>
     </div>
       
          </div>
          </div>
      <div className=" bg-img" >
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-fixed-top'>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar gap-4" >


                <li className="nav-item ">
                  <a href='' className="nav-link" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
                </li>

                <li className="nav-item ">
                  <a href="" className="nav-link" data-bs-toggle="modal" data-bs-target="#signupModal">Sign up</a>
                </li>
              </ul>
            </div>
          </nav>

         

          <div className='logo-img text-center'>
            <img src={require('../Assets/Zomato-PNG-Logo-White - Copy.png')} className='mt-3' />
          </div>
          <div className='restaurant-title text-light text-center pt-3'>
            <h1>
              Discover the best food & drinks in Thane
            </h1>
          </div>


          <div className="row pt-1">

            <div className='col-12 col-sm-12 col-md-1 col-lg-2 col-xl-2 mx-4'></div>


            <div className='col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mx-4'>
              <div className='location-searchbar'>
                <select className="form-control" id="search-bar" defaultValue={''} onChange={onLocationChange}>
                  <option value="" disabled>Please select a location</option>
                  {locations.map(location => (
                    <option value={location.location_id} key={location.location_id}>{location.location_name}</option>
                  ))}

                </select>
              </div>
            </div>

            <div className='col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5'>
              <div className='restaurant-searchbar'>
                <select className="form-control1" id="search-bar1" defaultValue={''} onChange={onRestaurantChange}>
                  <option value="" disabled>Please select a restaurant</option>
                  {restaurants.map(restaurant => (
                    <option value={restaurant.restuarant_id} key={restaurant.restuarant_id}>{restaurant.restuarant_name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className='col-12 col-sm-12 col-md-1 col-lg-2 col-xl-2'></div>

          </div>
        </div>

      </div>
     
    </div>


  )
}

export default Wallpaper;