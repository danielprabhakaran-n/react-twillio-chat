import { all, put, takeLatest } from 'redux-saga/effects';

import {
    GET_CHANNELS,
    GET_CHANNELS_SUCCESS,
    GET_CHANNELS_FAILURE
} from './action';

import { channelList } from '../../configs/channels';
//import { privateGet, } from '../../utilities/apiCaller';

export function* getChannels () {
    try{
        yield put ({
            type : GET_CHANNELS_SUCCESS,
            payload : channelList
        })
    }
    catch(err){
        yield put ({
            type : GET_CHANNELS_FAILURE,
            payload : err
        })
    }
}


/**
 * TradeList Sagas
 */
export default function* root() {
    yield all([
        takeLatest(GET_CHANNELS, getChannels),
    ]);
}
