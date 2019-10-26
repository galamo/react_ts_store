import axios from "axios";

export const getCountriesService = async () => {
    try {
        const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
        return data;
    } catch (ex) {
        return []
    }

}