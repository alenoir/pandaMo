import React from 'react'
import {Parse} from 'parse'
import ProfileActions from '../actions/ProfileActions.jsx'

class Login extends React.Component {
  constructor(props) {
    super(props);
    //set the state as a property on the class
    this.state = {};
  }

  componentWillMount() {
    console.log('ok');
      //executes when the component is about to mount onto DOM
  }

  componentWillUnmount() {
      //executes when the component is about to unmount from DOM
  }

  login() {
    console.log("kikou facebook");
    Parse.FacebookUtils.logIn(null, {
      success: function(user) {
        ProfileActions.login();
      },
      error: function(user, error) {
        alert("User cancelled the Facebook login or did not fully authorize.");
      }
    });
  }

  render() {
    return (
      <button onClick={this.login}>
        Login via facebook
      </button>
    );
  }
}

export default Login
