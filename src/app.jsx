import React from 'react'
import {Parse} from 'parse'
import Router from 'react-router';
import App from './components/App.react.jsx'
import Home from './components/Home.react.jsx'
import WordAdd from './components/Word/Add.react.jsx'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router'

import injectTapEventPlugin from "react-tap-event-plugin"

window.React = React;

injectTapEventPlugin();

Parse.initialize("MqUfuZFItBwGT01dFImQZjZPQMgCNty8qqrvqeMd", "Hxu5mvSHC22Ba5bvQNaIGZFHRQvSnwWQ4ICFt5BO");

window.fbAsyncInit = function() {
  Parse.FacebookUtils.init({
    appId      : '393304264206187',
    xfbml      : true,
    cookie     : true,
    version    : 'v2.3'
  });
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="word-add" path="word/add" handler={WordAdd}/>
    <DefaultRoute handler={Home} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
