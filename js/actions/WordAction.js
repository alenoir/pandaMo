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

import AppDispatcher from '../dispatcher/AppDispatcher';
import WordConstants from '../constants/WordConstants';
import Parse from 'parse';

var ActionTypes = WordConstants.ActionTypes;

class WordAction extends React.Component {

  fetchAll(words) {
    console.log('** fetchAll');
    let wordQuery = new Parse.Query('Word').ascending('createdAt')
    wordQuery.find().then(function(words){
      console.log(words);
      AppDispatcher.dispatch({
        type: ActionTypes.RECEIVE_WORDS,
        words: words
      });
    });
  }

}

export default WordAction;
