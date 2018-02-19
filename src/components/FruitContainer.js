import React, { Component } from 'react';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			 // initialize the fruit list to the full list passed in props
			fruitsToDisplay: props.fruits,
			 // intialize the filter value to an empty string
			fulterValue:''
		}
	}
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
