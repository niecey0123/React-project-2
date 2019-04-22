import React from 'react';

import SearchForm from './SearchForm';


function ResourceContainer(props) {
 

   
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
          <SearchForm listings={props}/> 
           
          </article>
  
          <article className="tile is-child box">
          <h1>Box2</h1>
          </article>
        </div>
  
        <div className="tile is-parent">
          <article className="tile is-child box">
          <h1>Box3</h1>
          </article>
        </div>
      </div>
  
      <div className="tile is-parent">
        <article className="tile is-child box">
        <h1>Box4</h1>
        </article>
      </div>
    </div>
  
    <div className="tile is-parent">
      <article className="tile is-child box">
      <h1>Box5</h1>
      </article>
    </div>
  </div>
  </div>
 
    )
}



export default ResourceContainer