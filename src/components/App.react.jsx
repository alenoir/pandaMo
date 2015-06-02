import React from 'react'
import {Parse} from 'parse'
import WordList from './WordList.react.jsx'
import Header from './Header.react.jsx'
import ProfileActions from '../actions/ProfileActions.jsx'
import ProfileStore from '../stores/ProfileStore.jsx'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class App extends React.Component {
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
      <div className="nav">
        <Header />

        <RouteHandler />
      </div>
    )

  }
}

export default App
