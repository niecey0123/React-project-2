import React, { Component } from 'react';
import ResourceList from './components/ResourceList'
import { Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Map from './components/Map/Map';


import './App.css';
import ResourceContainer from './components/ResourceContainer';


class App extends Component {
  constructor(){
    super()
    this.state={
        agencies:[]
    }
  }
  componentDidMount(){
    const url='https://data.cityofnewyork.us/resource/9d9t-bmk7.json'
    fetch(url)
    .then(response => response.json())
    .then(data =>{
     this.setState({
       agencies:data
     })
     
  

    })
  }
  render() {
 const agencies = this.state.agencies

    return (
      <div className="container">
                
        <nav className="navbar">
          <ul className="navbar-start">
            <li className="navbar-item"><Link to="/resourcecontainer">Resources</Link></li>
            <li className="navbar-item"><Link to="/">Home</Link></li>
          </ul>
        </nav>

        
       
        <Route 
        exact path="/resourcecontainer"  
        render={()=> <ResourceContainer listing={agencies} /> }
        />
        <Route exact path="/" 
        render={()=> <Home  /> }
        />
   
      <div className="mapContainer">
      <Map listing={agencies} component={Map} />
    </div>
   
      </div>
     
    );
  }
}

export default App;
