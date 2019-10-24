import Actions from "./actions.config";

import { getCountriesService } from "./service"

export const saveUserAction = (user: any) => {
    return {
        type: Actions.SAVE_USER,
        payload: { user }
    }
}

// interface Country {
//     name: string,
//     flag: string,
//     population: number
// }
// sync action to reducer
export const getCountriesSuccess = (countries: Array<any>) => {
    return {
        type: Actions.GET_COUNTRIES_SUCCESS,
        payload: { countries }
    }
}

// async action
export const getCountries = () => {
    return async (dispachFn: any) => {

        // call server api 
        const countries = await getCountriesService();
        // save the countries in store AKA dispatch countrie_success
        dispachFn(getCountriesSuccess(countries))
    }
}