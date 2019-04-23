import React from 'react';
import Map from './Map/Map';


import SearchForm from './SearchForm';
import ResourceList from './ResourceList';



function ResourceContainer(props) {
 
  const { listing }= props;

   
    return(
    

        <div className="container">
        <h1 className="title">Title</h1>
     <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>, 
        like the one you're currently reading
      </h2>
      <div className="tile is-ancestor">
    <div className="tile is-vertical is-8">
      <div className="tile">
        <div className="tile is-parent is-vertical">
          <article className="tile is-child box">
          <h3>Agency Listings</h3>
          <SearchForm /> 
         
           
          </article>
          
          <article className="tile is-child box">
          <div className="list-container">
        <ResourceList listing={listing}/>

     {/* {
       listing.map((list,index )=> (
         <ul key={index} className="list-item">
           <li>Name: {list.facility_name}</li>
           <span>Address: {list.street_address}</span>
           <li>Type: {list.comments}</li>
           <li>City: {list.city}</li>
           <li>Borough: {list.borough}</li>
           <li>Contact: {list.phone_number_s}</li>
           <li>Zipcode: {list.zip_code}</li>
           <li>longitude: {list.longitude}</li>
           <li>latitude: {list.latitude}</li>
         </ul>
       ))
     } */}

    </div>
         
          </article>
        </div>
  
        {/* <div className="tile is-parent">
          <article className="tile is-child box">
          <h1>Box3</h1>
          </article>
        </div> */}
      </div>
  
      <div className="tile is-parent">
        <article className="tile is-child box">
            <div className="mapContainer">
                <Map listing={listing} component={Map} />
              </div>
          </article>
        </div>
    </div>
  
    {/* <div className="tile is-parent">
      <article className="tile is-child box">
      <h1>Box5</h1>
      </article>
    </div> */}
  </div>
  </div>
 
    )
}



export default ResourceContainer