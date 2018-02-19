import React, { Component } from 'react';
import FruitFilter from './FruitFilter.js';
import FruitList from './FruitList.js';
class FruitContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			 // initialize the fruit list to the full list passed in props
			fruitsToDisplay: props.fruits,
			 // intialize the filter value to an empty string
			filterValue:''
		}
		this.handleFilterChange = this.handleFilterChange.bind(this)
	}

	handleFilterChange(e){
		e.preventDefault();
		const filterValue = e.target.value;
		this.setState((prevState, props) => {
			//remove fruits that don't contain the filter value
			const filteredFruitList = props.fruits.filter( fruit => 
				fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
			)
			//return new state with filtered fruit list and new value of filter
			return {
				fruitsToDisplay: filteredFruitList,
				filterValue
			}
		})
	}

  	render() {
    	return (
	      <div>
	        <FruitFilter value={this.state.filterValue} onChange={this.handleFilterChange}/>
	        <FruitList fruits={this.state.fruitsToDisplay}/>
	      </div>
    );
  }
}

export default FruitContainer;
