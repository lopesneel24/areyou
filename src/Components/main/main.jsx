import React from "react";

import seleclist from "../selec.js";
import txtoyp from "../type.js";

import './main.css';
import Placer from "../placefind/placer.jsx";


export default function Main() {
    return(

    <>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    
    <h1 style={{color:"red",marginTop:20}}>Select Your Country and start searching whether Shops are Open and Start Shopping !!</h1>
    <h1>
        <script isHydrating={true} type="text/javascript" src={txtoyp} />
            <h2 className="typewrite" style={{fontcolor: "red"}} c data-period="2000" data-type='["Welcome to Are You Open Service"]'>
                <span className="wrap" style={{color: "red"}}></span>
            </h2>
        </h1>
                  
            <div className="card" >
           
                <div className="container">
                    <h3>Enter Your Zip Code to Enter a Zone</h3>
            
                    <div className="custom-select">
            <script isHydrating={true} type="text/javascript"
								src={seleclist} />

                    
                          
                <select>
                    <option value="0">Select country:</option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                    <option value="5">Honda</option>
                    <option value="6">Jaguar</option>
                    <option value="7">Land Rover</option>
                    <option value="8">Mercedes</option>
                    <option value="9">Mini</option>
                    <option value="10">Nissan</option>
                    <option value="11">Toyota</option>
                    <option value="12">Volvo</option>
                    <option value="13">Select car:</option>
                    <option value="14">Audi</option>
                    <option value="15">BMW</option>
                    <option value="16">Citroen</option>
                    <option value="17">Ford</option>
                    <option value="18">Honda</option>
                    <option value="19">Jaguar</option>
                    <option value="20">Land Rover</option>
                    <option value="21">Mercedes</option>
                    <option value="22">Mini</option>
                    <option value="23">Nissan</option>
                    <option value="24">Toyota</option>
                    <option value="25">Volvo</option>
                </select>
            </div>
              <br/>
                   {/* // Search Bar for Zip Code  */}
                   <div className="topnav">
                    <p>Enter the desired zip code to search for the status of shops</p>
                    <p>A query will return the operatability - open or close</p>
                        <div className="search-container">
                            <form action="/action_page.php">
                                <input type="text" placeholder="Zipcode eg. xxx-xxx" name="search" />
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div> 
                        </div> 
                <Placer/>
          
                </div>
            </div>

  
    </>
        
    );
}