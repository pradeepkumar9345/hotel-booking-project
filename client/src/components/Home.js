import {Link} from 'react-router-dom'
import React  from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Home() {
  
  return (
<div>    
<div class="row">
<div class="col-sm-2 ba ft">
  <ul>
   <li> <a href="#home">Home</a></li>
    <br/>
   <Link to="/mybooking"> <li><a href="#news">Booking request</a></li></Link>
    <br/>
    <Link to="/profile"> <li><a href="#news">profile</a></li></Link>
    <br/>
    <li><a href="logout">log out</a></li>
  </ul>
</div>
<div class="col-sm-10 ft">
<div/>
<div class="container">
<div class="row">
    <div class="col-sm-2">
        <h4>HOTEL BOOKING</h4>
    </div>
    <div class="col-sm-1">
    </div>
    <div class="col-sm-1">
      <div>
        <Link to ="/Login"><button class="btn btn-primary">Login</button></Link>
    </div>
    </div>
  <div class="col-sm-1">  
    <div>
    <Link to ="/signup"><button class="btn btn-primary">signup</button></Link>
    </div>
    </div>
    {/* <div>
    <Link to ="/Myprofile"><button class="btn btn-primary">my profile</button></Link>
    </div>

    <div class="col-lg-2 ">
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
      <Dropdown.Item Link to="/Myprofile">My profile</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
      </div> */}
</div>
</div>
<hr/>
<div class="container">
     <div class="row">
          <div class="col-sm-3">
            <div>
                <div class="input-group">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" class="btn btn-outline-primary">search</button>
                </div>
            </div>
          </div>

          <div class="col-sm-3">
            <form >
                <label for="birthday">Chec in</label>
                <input type="date" id="birthday" name="birthday"/>
              </form>
          </div>

          <div class="col-sm-3">
            <form >
                <label for="birthday">Chec out</label>
                <input type="date" id="birthday" name="birthday"/>
              </form>
          </div>

          
          <div class="col-sm-3">
            <div class="col-lg-2">
              <div class="dropdown">
                {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Types
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">adults</a>
                  <a class="dropdown-item" href="#">children</a>
                  <a class="dropdown-item" href="#">Rooms</a>
                </div> */}
              </div>
        </div>
      </div>
      </div>

<div>
<img class="bg" src={require("../images/casa.jpg")}/>
</div>
<hr/>
<br/>

<div>
    <div class="container">
    <div class="row">
    <div class="col-sm-3">
    <form>
    <div class="form-row align-items-center">
    <div class="col-auto my-1">
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
      <option selected>Rooms</option>
      <option value="1">8.5 Excellent</option>
      <option value="2">8.0 very good</option>
      <option value="3">7.5 good</option>
      <option value="4">7.0 fair</option>
      </select>
    </div>
    </div>
    </form>
    </div>


        <div class="col-sm-3">
            <form>
                <div class="form-row align-items-center">
                  <div class="col-auto my-1">
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                      <option selected>Location</option>
                      <option value="popular site">popular site</option>
                      <option value="or this address">or this address</option>
                      
                      
                    </select>
                  </div>
                </div>
            </form>
        </div>
        

        <div class="col-sm-3">
            <form>
                <div class="form-row align-items-center">
                  <div class="col-auto my-1">
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                      <option selected>More filters</option>
                      <option value="popular site">cancellation free</option>
                      <option value="or this address">pool</option>
                      <option value="or this address">car park</option>
                      <option value="or this address">spa</option>
                      <option value="or this address">break fast</option>
                      <option value="or this address">wifi</option>
                      <option value="or this address">air condition</option>
                      <option value="or this address">restaurent</option>
                      
                    </select>
                  </div>
                </div>
            </form>


        </div>
    </div>
    </div>
<hr/>
<div class="container" >
</div>
    <div class="row">
        <div class="col-sm-3">
            <div>
                <img class="grid" src={require("../images/fab.jpg")}/>
            </div>
        </div>
          
            <div class="col-sm-3 color">
                <h4>1. fab hotel</h4>
                <h5>₹10,000</h5>
                <Link to ="/payment"><button class="btn btn-primary">booknow</button></Link>
            </div>

            <div class="col-sm-6 color">
                <h5>Book FabHotel Prime Royal Castle, Gandhipuram, Coimbatore @ ₹ 1000 and get ❆ AC Room ✓ Free Wi-Fi ☕ Complimentary Breakfast. Also, check out FabHotel ...</h5>
            </div>
     </div>





     <br/><br/>
     <hr/>
      <div class="container" >
         </div>
             <div class="row">
                 <div class="col-sm-3">
                     <div>
                         <img class="grid" src={require("../images/gowtham.jpg")}/>
                     </div>
                 </div>
                   
                     <div class="col-sm-3 color">
                         <h4>2. gowtham hotel</h4>
                         <h5>₹12,000</h5>
                         <Link to ="/payment"><button class="btn btn-primary">booknow</button></Link>
                     </div>
     
                     <div class="col-sm-6 color">
                         <h5>Choose From a Wide Range of Properties Which Booking.com Offers. Search Now! Book at Hotel Gowtham, Coimbatore. No Reservation Costs. Great Rates. No booking fees. Save money. Recent guest reviews. Great choice. 24/7 Customer Service. Secret Deals.</h5>
                     </div>
              </div>

              


              <br/><br/>
              <hr/>
               <div class="container" >
                  </div>
                      <div class="row">
                          <div class="col-sm-3">
                              <div>
                                  <img class="grid" src={require("../images/tree.jpg")}/>
                              </div>
                          </div>
                            
                              <div class="col-sm-3 color">
                                  <h4>3. hotel lovely nest</h4>
                                  <h5>₹9,000</h5>
                                  <Link to ="/payment"><button class="btn btn-primary">booknow</button></Link>
                              </div>
              
                              <div class="col-sm-6 color">
                                  <h5>Located in Coimbatore, 5 miles from Codissia Trade Fair Complex, Hotel Grand Tree has accommodations with a restaurant, free private parking, ...
                                    Rating: 8.1/10 .45 reviews</h5>
                              </div>
                       </div>
                       <br/><br/>



<div class="card-group">
<div class="card">
  <img class="card-img-top" src={require("../images/swim.jpg")}/>
  <div class="card-body">
    <h5 class="card-title color">Little National Hotel Sydney</h5>
    <p class="card-text color">it is 0.3 km away from the centre of Sydney</p>
    <p class="card-text color"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <br/>
</div>
<div class="card">
  <img class="card-img-top" src={require("../images/tr.jpg")}/>
  <div class="card-body">
    <h5 class="card-title color">Mercure Sydney</h5>
    <p class="card-text color">it conveniently offers a business centre, meeting rooms, and a banquet room</p>
    <p class="card-text color"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <br/>
</div>
<div class="card">
  <img class="card-img-top" src={require("../images/vivanta.jpg")}/>
  <div class="card-body">
    <h5 class="card-title color">Sir Stamford at Circular Quay Hotel Sydney</h5>
    <p class="card-text color">dry cleaning and laundry service are offered to guests</p>
    <p class="card-text color"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
</div>
</div>

    </div>
    </div>
    </div>
    </div>

  );
}

export default Home;
