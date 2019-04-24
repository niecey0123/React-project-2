import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'


import './App.css';
import ResourceContainer from './components/ResourceContainer';


class App extends Component {
  constructor(){
    super()
    this.state={
        agencies:[],
        agencyfilter:'',
       
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

  handleFilter = (e) =>{
    this.setState({
      agencyfilter: e,
    })
   }

  render() {
 const agencies = this.state.agencies

    return (
      <div>
                
        <nav className="navbar is-warning">
          <ul className="navbar-start">
            <li className="navbar-item"><Link to="/resourcecontainer">Resources</Link></li>
            <li className="navbar-item"><Link to="/">Home</Link></li>
          </ul>
        </nav>

        
       
        <Route 
        exact path="/resourcecontainer"  
        render={()=> <ResourceContainer afilter={this.state.agencyfilter} filter={this.handleFilter} listing={agencies} /> }
        />
        <Route exact path="/" 
        render={()=> <Home  /> }
        />
   
      {/* <div className="mapContainer">
      <Map listing={agencies} component={Map} />
    </div> */}
   
   <Footer />
      </div>
  
    );
  }
}

export default App;
