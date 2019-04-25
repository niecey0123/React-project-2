import React from 'react'
import  '../Home.css'



function Home(){
   
    return(
        
        <div className="container">
           <h1 className="find">FINDER'S KEEPER'S</h1>
           <h2>New York's Directory Of Job Centers that offer Temporary</h2> 
           <h2>Financial Assistance, Food Stamps and Medicaid to eligible individuals. </h2>
           <img src={require("../images/nyc.jpg")} alt="" />
        </div>
            
    )
}
export default Home;