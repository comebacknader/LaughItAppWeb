import { SIGNUP_USER, LOGIN_USER, FORGOT_PASSWORD, RESET_PASSWORD } from "../actions/types";

const initialState = {
    username : "",
    email : ""
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SIGNUP_USER: {
            return { ...state, username: action.content };
        }
        case LOGIN_USER: {
            return { ...state, username: action.content };
        }
        case FORGOT_PASSWORD: {
            return { ...state, email: action.content };
        }
        case RESET_PASSWORD: {
            return { ...state, username: action.content };
        }
        default:
            return state;
    }
};