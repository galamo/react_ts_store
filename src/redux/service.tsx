import axios from "axios"

function getCountries() {
    return axios.get("https://restcountries.eu/rest/v2/all");
}


export default { getCountries }