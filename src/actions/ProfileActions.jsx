import React from 'react'
import {Parse} from 'parse';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import ProfileContants from '../constants/ProfileConstants.jsx';

var ProfileActionTypes = ProfileContants.ActionTypes;

export default {

  login() {
    AppDispatcher.dispatch({
      type: ProfileActionTypes.LOGIN
    })
  },

  logout() {
    AppDispatcher.dispatch({
      type: ProfileActionTypes.LOGOUT
    })
  }

}
