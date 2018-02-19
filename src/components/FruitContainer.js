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
			filterValue:'',
			leftOverFruits: []
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

			const unmatchedFruits = props.fruits.filter( fruit => 
				!fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
			)
			//return new state with filtered fruit list and new value of filter
			return {
				fruitsToDisplay: filteredFruitList,
				leftOverFruits: unmatchedFruits,
				filterValue

			}
		})
	}

  	render() {
    	return (
	      <div>
	        <FruitFilter value={this.state.filterValue} onChange={this.handleFilterChange}/>
	        <p>Matched:</p>
	        <FruitList fruits={this.state.fruitsToDisplay}/>
	        <p>Unmatched:</p>
	        <FruitList fruits={this.state.leftOverFruits}/>
	      </div>
    );
  }
}

export default FruitContainer;
