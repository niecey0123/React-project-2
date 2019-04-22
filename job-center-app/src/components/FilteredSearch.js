import React, { Component } from 'react';

class FilteredSearch extends Component {
    constructor(props) {
        super(props);
        this.state ={
            filteredOutResource:[],
            fiterValue:''
        }
    }
    handleFilterChange(e){
        e.preventDefault()
        // const fiterValue = e.target.value
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default FilteredSearch;