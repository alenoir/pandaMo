/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from 'react'
import WordAction from '../actions/WordAction.jsx'
import WordListItem from '../components/WordListItem.react.jsx'
import WordStore from '../stores/WordStore.jsx'

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
      console.log('componentWillMount');
      WordStore.addChangeListener(this._onChange);
      WordAction.fetchAll()
    }

    componentWillUnmount() {
      WordStore.removeChangeListener(this._onChange);
    }

    _onChange() {
      console.log("** _onChange"+this);
      this.setState({words: WordStore.getAll()});
    }

    render() {
      console.log(this.state.words);
      if (this.state.words) {

        var wordsItems = this.state.words.map(function(word) {
          return (
            <WordListItem
              key={word.id}
              word={word}
            />
          );
        }, this);

        return (
          <div className="word-section">
            <ul className="word-list">
              {wordsItems}
              </ul>
          </div>
        );
      }
    }


}

export default WordList
