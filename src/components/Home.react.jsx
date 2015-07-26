import React from 'react'
import WordAction from '../actions/WordAction.jsx'
import WordList from './Word/List.react.jsx'
import WordStore from '../stores/WordStore.jsx'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {
      return (
        <div className="word-section">
          <WordList />
        </div>
      );
    }


}

export default Home
