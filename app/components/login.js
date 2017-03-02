import React, {Component} from 'react';

class LoginComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <label id="userName">User name:</label>
          <input type="text" aria-label="userName"></input>
        </div>
        <div>
          <label id="password">Password:</label>
          <input type="password" aria-label="password"></input>
        </div>
      </div>
    )
  }
};

export default LoginComponent;
