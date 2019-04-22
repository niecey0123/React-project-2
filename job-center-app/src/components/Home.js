import React from 'react';
import SearchForm from './SearchForm';
import  '../Home.css'


function Home(props){
   
    return(
        <div className="homePage">
            {/* <img src={require("../images/home.jpg")} alt="" /> */}
            <h1>FINDER'S KEEPER'S</h1>
            <h2>New York's Directory Of Job Centers that offer temporary</h2> 
               <h2>financial assistance,food stamps and Medicaid to eligible individuals. </h2>
               <SearchForm /> 
                   </div>
            
    )
}
export default Home;