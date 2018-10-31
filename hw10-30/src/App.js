import React, { Component } from "react";
import Login from "./Login";
import MainContainer from "./MainContainer";
import './App.css';

class App extends Component {
state = {
  logged: false,
  username: ''
}
handleLogin = (username, isLoggedIn) => {
  console.log(username, isLoggedIn, ' in hangleLogin');
  this.setState({
    username: username,
    logged: isLoggedIn
  });
}
  render() {
    return (
      <div>
        {this.state.logged ? <MainContainer username={this.state.username}/> : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
};

export default App;
