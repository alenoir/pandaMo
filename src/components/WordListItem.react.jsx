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

var ReactPropTypes = React.PropTypes;

class WordListItem extends React.Component {
    constructor(props) {
        super(props);
        //set the state as a property on the class
        this.state = {
          word: props.word
        };
    }

    componentWillMount() {
        //executes when the component is about to mount onto DOM
    }

    componentWillUnmount() {
        //executes when the component is about to unmount from DOM
    }

    render() {
      var word = this.state.word;
      return (
        <li>
          <h5 className="word-name">{word.get('name')}</h5>
        </li>
      );
    }
}

export default WordListItem
