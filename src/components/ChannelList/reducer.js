import {
    GET_CHANNELS_SUCCESS,
    GET_CHANNELS_FAILURE
} from './action';

const initialState = {
    channels: [],
    err: ''
}

function channelListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CHANNELS_SUCCESS:
            return {
                channels: action.payload
            }
        case GET_CHANNELS_FAILURE:
            return {
                channels: [],
                err : action.err
            }
        default:
            return state
    }
}
export const channel = state => state.channelListReducer;

export default channelListReducer;