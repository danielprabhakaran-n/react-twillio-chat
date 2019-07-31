import { all, put, takeLatest } from 'redux-saga/effects';

import {
    GET_MESSAGES,
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_FAILURE
} from './action';

import { messagesList } from '../../configs/messages';

//import { privateGet, } from '../../utilities/apiCaller';

export function* getMessages () {
    try{
        yield put ({
            type : GET_MESSAGES_SUCCESS,
            payload : messagesList
        })
    }
    catch(err){
        yield put ({
            type : GET_MESSAGES_FAILURE,
            payload : err
        })
    }
}


/**
 * TradeList Sagas
 */
export default function* root() {
    yield all([
        takeLatest(GET_MESSAGES, getMessages),
    ]);
}
