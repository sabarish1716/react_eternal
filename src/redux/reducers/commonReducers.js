import {
    REGISTER_USER,
    SET_CURRENT_USER,
    USERS_LOADING, DISPLAY_ERRORS
} from "../actions/types.js";

const initialState = {
    isAuthenticated: false,
    user: {},
    errors: {},
    loading: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    //if (action.type) console.log(action.type)
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                isRegistered: action.payload.Status,
                errors: {}
            };
        case DISPLAY_ERRORS:
            return {
                ...state,
                errors: action.payload
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !action.payload,
                user: action.payload,
                errors: {}
            };
        case USERS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}