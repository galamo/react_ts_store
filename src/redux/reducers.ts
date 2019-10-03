import Actions from "./actions.config";

const initialState = {
    user: null
}

export default function root(state = initialState, action: any) {
    console.log(action.payload)
    switch (action.type) {
        case Actions.SAVE_USER: {

            // return equals to global set state - setting the store
            return {
                ...state,
                user: "hello " + action.payload.user + "@gmail.com"
            }

        }
        case Actions.GET_COUNTRIES: {
            // some logic
            return {
                ...state,
                countries: ["ISR", "AFG"]
            }

        }
        default: {
            return state;
        }
    }
}