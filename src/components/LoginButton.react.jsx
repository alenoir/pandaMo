import React from 'react'
import {Parse} from 'parse'
import ProfileActions from '../actions/ProfileActions.jsx'
import ProfileStore from '../stores/ProfileStore.jsx'

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    //set the state as a property on the class
    this.state = {
      user: Parse.User.current()
    };
  }

  componentWillMount() {
    ProfileStore.addChangeListener(this.profileChange.bind(this));

  }

  componentWillUnmount() {
    ProfileStore.removeChangeListener(this.profileChange.bind(this));
  }

  profileChange() {
    this.setState({
      user: Parse.User.current()
    });
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

  logout() {
    Parse.User.logOut()
    ProfileActions.logout()
  }

  render() {

    if (this.state.user) {
      return (
        <button onClick={this.logout}>
          Logout
        </button>
      )
    } else {
      return (
        <button onClick={this.login}>
          Login via facebook
        </button>
      )
    }
  }
}

export default LoginButton
