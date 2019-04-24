import React from 'react'
import  '../Home.css'



function Home(){
   
    return(
        
        <div className="container">
            {/* <img src={require("../images/nyc.jpg")} alt="" /> */}
            <h1 className="find">FINDER'S KEEPER'S</h1>
            <h2>New York's Directory Of Job Centers that offer temporary</h2> 
               <h2>financial assistance,food stamps and Medicaid to eligible individuals. </h2>
               <img src={require("../images/nyc.jpg")} alt="" />
                   </div>
            
    )
}
export default Home;