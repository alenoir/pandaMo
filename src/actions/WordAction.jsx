import React from 'react'
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import WordConstants from '../constants/WordConstants.jsx';
import {Parse} from 'parse';

var WordActionTypes = WordConstants.ActionTypes;

export default {

  fetchAll() {
    let wordQuery = new Parse.Query('Word').ascending('createdAt')
    wordQuery.find().then(function(words){
      AppDispatcher.dispatch({
        type: WordActionTypes.RECEIVE_WORDS,
        words: words
      })
    })
  }

}
