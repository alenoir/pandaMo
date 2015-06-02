import React from 'react'
import {Parse} from 'parse'
import WordList from './WordList.react.jsx'
import LoginButton from './LoginButton.react.jsx'
import ProfileActions from '../actions/ProfileActions.jsx'
import ProfileStore from '../stores/ProfileStore.jsx'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    //set the state as a property on the class
    this.state = {};
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <header className="header">
        <Link to="app">Home</Link>
        <LoginButton />
      </header>
    )
  }
}

export default Header
