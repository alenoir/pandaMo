import React from 'react'
import WordAction from '../../actions/WordAction.jsx'
import WordItem from './Item.react.jsx'
import WordStore from '../../stores/WordStore.jsx'

class WordList extends React.Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);

        //set the state as a property on the class
        this.state = {
          words: WordStore.getAll()
        };
    }

    componentWillMount() {
      WordStore.addChangeListener(this._onChange);
      WordAction.fetchAll()
    }

    componentWillUnmount() {
      WordStore.removeChangeListener(this._onChange);
    }

    _onChange() {
      this.setState({words: WordStore.getAll()});
    }

    render() {
      console.log(this.state.words);
      if (this.state.words) {

        var wordsItems = this.state.words.map(function(word) {
          return (
            <WordItem
              key={word.id}
              word={word}
            />
          );
        }, this);

        return (
          <ul className="word-list row">
            {wordsItems}
          </ul>
        );
      }
    }


}

export default WordList
