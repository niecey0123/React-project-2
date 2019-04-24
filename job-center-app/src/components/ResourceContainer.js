import React from 'react';
import Map from './Map/Map';


import SearchForm from './SearchForm';
import ResourceList from './ResourceList';



function ResourceContainer(props) {
 
  const { listing }= props;

   
    return(
    
      <div>
      <div className="container">
      <h1 className="title">Title</h1>
   <h2 className="subtitle">
      A simple container to divide your page into <strong>sections</strong>, 
      like the one you're currently reading
    </h2>
   


    <div class="tile is-ancestor">
  <div class="tile">
  <SearchForm filter={props.filter} listings={listing}/> 
  </div>
  <div class="tile ">
  <Map listing={listing} component={Map} />
   
  </div>
  {/* <div className="tile is-block">
  <ResourceList afilter={props.afilter} listing={listing}/>
  </div>  */}

</div>
</div>

<div class="columns">
  <div class="column is-full">
  <ResourceList afilter={props.afilter} listing={listing}/>
  </div>
  </div>

</div>
    )
}



export default ResourceContainer