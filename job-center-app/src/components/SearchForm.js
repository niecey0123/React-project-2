import React, { Component } from 'react';
import '../SearchForm.css';

class SearchForm extends Component {
    render() {
        return (
         <form>
             <h3>Find an Agency near you</h3>
             <label>search</label>
             <input type="text"placeholder="Enter Zipcode"></input>
             <input type="submit" value="submit"></input>



           
         </form>
        );
    }
}

export default SearchForm;