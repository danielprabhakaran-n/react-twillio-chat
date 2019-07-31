/**
 * Root Reducer
 */

import { combineReducers } from 'redux';

import channelListReducer from './components/ChannelList/reducer';
import messageListReducer from './components/MessageList/reducer';

const appReducer = combineReducers({
  channelListReducer,
  messageListReducer
});

const rootReducer = (state, action) => {
//   if (action.type === 'LOG_OUT') {
//     state = {};
//     storage.removeItem('persist:appReducer');
//     // storage.removeItem('persist:onboarding');
//   }

  return appReducer(state, action)
};

export default rootReducer;
