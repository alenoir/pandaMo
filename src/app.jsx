import React from 'react'
import {Parse} from 'parse'
import App from './components/App.react.jsx'


window.React = React; // export for

Parse.initialize("MqUfuZFItBwGT01dFImQZjZPQMgCNty8qqrvqeMd", "Hxu5mvSHC22Ba5bvQNaIGZFHRQvSnwWQ4ICFt5BO");

React.render(
    <App />,
    document.getElementById('react')
);
