import React, { Component } from 'react';
import '../SearchForm.css';

class SearchForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cityFilter:[]
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            cityFilter: e.target.value
        })
    
    }
    handleSubmit(e){
        console.log('A city was submitted: ' , this.props);
        e.preventDefault();
    }
    



    render() {
        return (
         <form  onSubmit={this.handleSubmit}>
             <div className="field">

            <label className="label">Find an Agency near you</label>
            <div className="control">
             <input className="input is-hovered" type="text" placeholder="Enter City" value={this.state.value} onChange={this.handleChange} ></input>
             <input className="button" type="submit" value="Submit" ></input>

            </div>
             </div>
           
         </form>
        );
    }
}

export default SearchForm;