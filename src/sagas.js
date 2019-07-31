import { all, fork } from 'redux-saga/effects';

import messageList from './components/MessageList/saga';
import channelList from './components/ChannelList/saga';

/**
 * Register rootSagas
 */
export default function* root() {
    yield all([
        fork(messageList),
        fork(channelList)
    ]);
}
