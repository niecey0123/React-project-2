import React from 'react';





function ResourceList(props) {
  

  
const { listing }= props;

    return(
  
    <div className="listing">
      

      {
        listing.filter(whatever => {
          return whatever.borough.toLowerCase() === props.afilter.toLowerCase()
        })
        .map((list,index )=> (
          <ul key={index} className="list-item">
            <span className="names">Name: {list.facility_name}</span>
            <li>Address: {list.street_address}</li>
            <li>Type: {list.comments}</li>
            <li>City: {list.city}</li>
            <li>Borough: {list.borough}</li>
            <span>Contact: {list.phone_number_s}</span>
            <li>Zipcode: {list.zip_code}</li>
       
          </ul>
        ))
      }

     </div>

    )
    
}
export default ResourceList