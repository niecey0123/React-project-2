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
        <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
          <img src="https://static1.squarespace.com/static/5adf87e3e2ccd1ca6c520593/t/5b0ff84d758d4683331756eb/1527773281860/tech-nyc-high-res-logo-1.png" width={112} height={28} alt="" />
      </a>

       <ul className="navbar-start">
         <li className="navbar-item"><Link to="/">Home</Link></li>
          <li className="navbar-item"><Link to="/resourcecontainer">Resources</Link></li>
          </ul>
      </div>
    </nav>  
       
     <Route 
        exact path="/resourcecontainer"  
        render={()=> <ResourceContainer afilter={this.state.agencyfilter} filter={this.handleFilter} listing={agencies} /> }
        />
     <Route exact path="/" 
        render={()=> <Home  /> }
        />
  
     <Footer />
      </div>
  
    );
  }
}

export default App;
