import React from 'react'
import {Parse} from 'parse'
import WordList from './Word/List.react.jsx'
import Header from './Header.react.jsx'
import ProfileActions from '../actions/ProfileActions.jsx'
import ProfileStore from '../stores/ProfileStore.jsx'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import mui from 'material-ui'

let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar
  , LeftNav = mui.LeftNav
  , MenuItem = mui.MenuItem;

let menuItems = [
  { route: '/', text: 'Home' },
  { route: '/word/add', text: 'Add' }
];


class App extends React.Component {
  constructor() {
    super();

    this._handleClick = this._handleClick.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _handleClick(e) {
    e.preventDefault();

    this.refs.leftNav.toggle();
  }

  // Get the selected item in LeftMenu
  _getSelectedIndex() {
    let currentItem;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) {
        return i;
      }
    }
  }

  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.context.router.transitionTo(payload.route);
  }

  render() {

    return (
      <div className="container-fluid">
        <LeftNav
          ref="leftNav"
          docked={false}
          menuItems={menuItems}
          selectedIndex={this._getSelectedIndex()}
          onChange={this._onLeftNavChange} />

        <header className="row">
          <AppBar title='PandaMo' onLeftIconButtonTouchTap={this._handleClick} />
        </header>

        <section>
          <RouteHandler />
          
        </section>

      </div>
    );
  }

}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

App.contextTypes = {
  router: React.PropTypes.func
};

export default App
