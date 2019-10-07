import Actions from "./actions.config";

const initialState = {
    user: null,
    favorites: [],
    countries: []
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

        case Actions.ADD_COUNTRY_TO_FAVORITES: {
            const { country } = action.payload;
            const { favorites } = state;
            return { ...state, favorites: [...favorites, country] }
        }

        case Actions.GET_COUNTRIES_SUCCESS: {
            const { countries: data } = action.payload;
            const countries = data.map((country: any) => {
                const { capital, name, alpha3Code, region, borders, flag } = country;
                return {
                    capital: capital,
                    name: name,
                    code: alpha3Code,
                    region: region,
                    borders: borders,
                    flag: flag
                };
            })
            return { ...state, countries }
        }

        default: {
            return state;
        }
    }
}