import {
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_FAILURE,
    UPDATE_MESSAGES
}
    from './action';

const initialState = {
    messages: [],
    err : ''
}

function messageListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MESSAGES_SUCCESS:
            return {
                messages: action.payload
            }
        case GET_MESSAGES_FAILURE:
            return {
                messages: [],
                err : action.payload
            }
        case UPDATE_MESSAGES:
            return {
                messages: [1, 2, 3]
            }
        default:
            return state
    }
}
export const message = state => state.messageListReducer;
export default messageListReducer;