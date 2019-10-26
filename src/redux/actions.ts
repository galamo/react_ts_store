import Actions from "./actions.config";
import Service from "./service";

export const saveUserAction = (user: any) => {
  return {
    type: Actions.SAVE_USER,
    payload: { user }
  };
};

export const addComment = (comment: any) => {
  return {
    type: Actions.ADD_COMMENT,
    payload: { comment }
  };
};

export const addCountryToFavoritesAction = (country: any) => {
  return {
    type: Actions.ADD_COUNTRY_TO_FAVORITES,
    payload: { country }
  };
};

export const getCountriesSuccessAction = (countries: any) => {
  return {
    type: Actions.GET_COUNTRIES_SUCCESS,
    payload: { countries }
  };
};

export const getCountriesPending = () => {
  return {
    type: Actions.GET_COUNTRIES_PENDING
  };
};
export const getCountriesAction = () => {
  return async (dispatch: any) => {
    dispatch(getCountriesPending());
    const result = await Service.getCountries();
    dispatch(getCountriesSuccessAction(result.data));
  };
};
