import Actions from "./actions.config";

const initialState = {
    user: null,
    favorites: []
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

        case Actions.ADD_COUNTRY_TO_FAVORITES: {
            const { country } = action.payload;
            const { favorites } = state;
            return { ...state, favorites: [...favorites, country] }
        }

        default: {
            return state;
        }
    }
}