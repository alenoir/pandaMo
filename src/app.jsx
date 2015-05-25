import React from 'react'
import {Parse} from 'parse'
import App from './components/App.react.jsx'


window.React = React;

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

React.render(
  <App />,
  document.getElementById('react')
);
