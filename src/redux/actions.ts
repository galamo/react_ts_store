import Actions from "./actions.config"

export const saveUserAction = (user: any) => {
    return {
        type: Actions.SAVE_USER,
        payload: { user }
    }
}

export const addCountryToFavoritesAction = (country: any) => {
    return {
        type: Actions.ADD_COUNTRY_TO_FAVORITES,
        payload: { country }
    }
}