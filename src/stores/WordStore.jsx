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

import AppDispatcher from '../dispatcher/AppDispatcher.jsx'
import WordConstants from '../constants/WordConstants.jsx'
import {EventEmitter} from 'events';
import assign from 'object-assign'

var ActionTypes = WordConstants.ActionTypes;
var CHANGE_EVENT = 'change';

let _words = [];

class WordStore extends EventEmitter {

    emitChange() {
      this.emit(CHANGE_EVENT);
    }

    addChangeListener(cb) {
      console.log('** addChangeListener');
      this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb) {
      this.removeListener(CHANGE_EVENT, cb);
    }

    get(id) {
      return _words[id];
    }

    getAll() {
      return _words;
    }
}

let _WordStore = new WordStore();

export default _WordStore;

AppDispatcher.register((action) => {
  console.log(action.words);
    switch(action.type) {
        case ActionTypes.RECEIVE_WORDS:
            _words = action.words;
            _WordStore.emitChange();
            break;
        default:
            break;
    }
});
