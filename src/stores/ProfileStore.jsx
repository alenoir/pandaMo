import {EventEmitter} from 'events';
import assign from 'object-assign'
import AppDispatcher from '../dispatcher/AppDispatcher.jsx'
import ProfieAction from '../actions/ProfileActions.jsx'
import ProfileConstants from '../constants/ProfileConstants.jsx'

var ProfileActionTypes = ProfileConstants.ActionTypes;
var CHANGE_EVENT = 'change_profile';

class ProfileStore extends EventEmitter {

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
}

let _ProfileStore = new ProfileStore();

export default _ProfileStore;

AppDispatcher.register((action) => {
  switch(action.type) {
    case ProfileActionTypes.LOGIN:
    console.log('store register login');
      _ProfileStore.emitChange();
      break;
    case ProfileActionTypes.LOGOUT:
      console.log('store register logout');
      _ProfileStore.emitChange();
      break;
    default:
      break;
    }
});
