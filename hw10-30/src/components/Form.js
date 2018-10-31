import React, { Component } from "react";

// this is longer way to do it
// class Form extends Component {
//   render(){
//     return(
//       <form onSubmit={this.props.getWeather}>
//         <input type="text" name="city" placeholder="City"/>
//         <input type="text" name="country" placeholder="Country"/>
//         <button>Get Weather</button>
//       </form>
//     )
//   }
// }

// better to do it this way
const Form = (props) => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;
