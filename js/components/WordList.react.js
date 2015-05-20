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

var React = require('react');
var WordAction = require('../actions/WordAction');
var WordListItem = require('../components/WordListItem.react');
var WordStore = require('../stores/WordStore');

function getStateFromStores() {
  return {
    words: WordStore.getAll()
  };
}

var WordList = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    console.log("** componentDidMount");
    WordStore.addChangeListener(this._onChange);
    WordAction.fetchAll()
  },

  componentWillUnmount: function() {
    WordStore.removeChangeListener(this._onChange);
  },

  render: function() {
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
  },

  /**
   * Event handler for 'change' events coming from the stores
   */
  _onChange: function() {
    console.log("** _onChange");
    this.setState(getStateFromStores());
  }

});

module.exports = WordList;
