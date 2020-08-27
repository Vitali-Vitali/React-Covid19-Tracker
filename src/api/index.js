import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeURL = url;
    if(country) {
        changeURL = `${url}/countries/${country}`
    }
    try {
        const { data } = await axios.get(changeURL);
        
        const result = {
            confirmed: data.confirmed,
            deaths: data.deaths,
            recovered: data.recovered,
            lastUpdate: data.lastUpdate
        } 

        return result;
    } catch (error){
        console.log(error);
    }
}

export const fetchCountries = async() => {
    try {
        const {data : {countries}} = await axios.get(`${url}/countries`); 
        return countries.map((country)=>country.name);
    } catch (error) {
        console.log(error);
    }
}