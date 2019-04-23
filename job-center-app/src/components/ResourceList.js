import React from 'react';
import '../ResourceList.css'




function ResourceList(props) {
  

  
const { listing }= props;

    console.log(props.afilter)
    return(
  
    <div>
      

      {
        listing.filter(whatever => {
          return whatever.borough.toLowerCase() === props.afilter.toLowerCase()
        })
        .map((list,index )=> (
          <ul key={index} className="train-item">
            <li>Name: {list.facility_name}</li>
            <span>Address: {list.street_address}</span>
            <li>Type: {list.comments}</li>
            <li>City: {list.city}</li>
            <li>Borough: {list.borough}</li>
            <li>Contact: {list.phone_number_s}</li>
            <li>Zipcode: {list.zip_code}</li>
       
          </ul>
        ))
      }

     </div>

    )
    
}
export default ResourceList