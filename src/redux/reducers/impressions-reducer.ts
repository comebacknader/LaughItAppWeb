import { GET_IMPRESSIONS } from "../actions/types";

const initialState = {
    impressions: [""],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_IMPRESSIONS: {
            return { ...state, impressions: action.content }
        }
        default: {
            return state
        }
    }
};