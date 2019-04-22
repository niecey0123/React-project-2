import React, { Component } from 'react';
import ResourceList from './components/ResourceList'
import { Route, Link} from 'react-router-dom'
import Home from './components/Home'

import './App.css';
import SearchForm from './components/SearchForm';

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
       agencies: data
     })
     

    })
  }
  render() {
 const {agencies} = this.state
    return (
      <div className="App">
                
        <nav>
          <ul>
            <li><Link to="/resourcelist">Resources</Link></li>
            {/* <li><Link to="/stocks">Stocks</Link></li> */}
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>

        
        <main className="main">
        <Route 
        exact path="/resourcelist"  
        render={()=> <ResourceList listing={agencies} /> }
        />
        {/*  use render if we want to pass props as parameters */}
        <Route exact path="/" component={Home}/>
   
    </main>
    <SearchForm />
      </div>
     
    );
  }
}

export default App;
