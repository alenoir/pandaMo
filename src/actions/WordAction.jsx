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
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import WordConstants from '../constants/WordConstants.jsx';
import {Parse} from 'parse';

var ActionTypes = WordConstants.ActionTypes;

export default {

  fetchAll: () => {
    console.log('** fetchAll');
    let wordQuery = new Parse.Query('Word').ascending('createdAt')
    wordQuery.find().then(function(words){
      console.log(words);
      AppDispatcher.dispatch({
        type: ActionTypes.RECEIVE_WORDS,
        words: words
      })
    })
  }

}