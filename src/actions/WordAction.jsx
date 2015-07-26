import React from 'react'
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import WordConstants from '../constants/WordConstants.jsx';
import {Parse} from 'parse';

var WordActionTypes = WordConstants.ActionTypes;
var Word = Parse.Object.extend("Word");

export default {

  fetchAll() {
    let wordQuery = new Parse.Query('Word').ascending('createdAt')
    wordQuery.find().then(function(words){
      AppDispatcher.dispatch({
        type: WordActionTypes.RECEIVE_WORDS,
        words: words
      })
    })
  },

  create(word) {
    var newWord = new Word();

    newWord.set('youtubeId', word.youtubeId);
    newWord.set('startTime', word.startTime);
    newWord.set('endTime', word.endTime);
    newWord.set('title', word.title);
    
    newWord.save().then(function(word){
      AppDispatcher.dispatch({
        type: WordActionTypes.CREATE_WORD,
        word: word
      })
    },
    function() {
      // @TODO: error handler
    });
  }

}
