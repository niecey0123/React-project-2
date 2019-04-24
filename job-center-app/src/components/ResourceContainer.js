import React from 'react';
import Map from './Map/Map';


import SearchForm from './SearchForm';
import ResourceList from './ResourceList';
import '../ResourceContainer.css'



function ResourceContainer(props) {
 
  const { listing }= props;

   
    return(
    
      <div>
      <div className="container">
      <h1 className="title">What's In Your Hood?</h1>
   <h2 className="subtitle">
      A simple way to look up resource's in your<strong> neighborhood </strong>, 
      enter your city location below!
    </h2>
   


    <div className="tile is-ancestor">
  <div className="tile">
  <SearchForm filter={props.filter} listings={listing}/> 
  </div>
  <div className="tile ">
  <Map listing={listing} component={Map} />
   
  </div>
  {/* <div className="tile is-block">
  <ResourceList afilter={props.afilter} listing={listing}/>
  </div>  */}

</div>
</div>

<div className="columns">
  <div className="column is-full">
  <h1 className="agency">Agency Listings</h1>
  <ResourceList afilter={props.afilter} listing={listing}/>
  </div>
  </div>

</div>
    )
}



export default ResourceContainer