import React, { Component } from 'react';
import '../SearchForm.css';

class SearchForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         borough:[]
      }
      this.handleUserInput = this.handleUserInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleUserInput(e){
        this.setState({
            borough: e.target.value
        })
       }

    handleSubmit(e){
        console.log('A city was submitted: ' , this.state.borough);
        e.preventDefault();
        const url = `https://data.cityofnewyork.us/resource/9d9t-bmk7.json?$q=${this.state.borough}`
        fetch(url)
        .then(response=> response.json())
        .then(data=>{
            console.log(data)
            this.setState({
                borough: data.borough
            })
            
        })
    }
    



    render() {
        return (
         <form  onSubmit={this.handleSubmit}>
             <div className="field">

            <label className="label">Find an Agency near you</label>
            <div className="control">
             <input className="input is-hovered" type="text" placeholder="Enter City"  onChange={this.handleUserInput} ></input>
             <input className="button" type="submit" value="Submit" ></input>

            </div>
             </div>
           
         </form>
        );
    }
}

export default SearchForm;