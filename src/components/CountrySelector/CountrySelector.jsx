import React, {useState, useEffect} from 'react';

import styles from './CountrySelector.module.css';
import {fetchCountries} from '../../api';

const CountrySelector = ({handleCountryChange}) => {
    const [fetchedCountries , setFetchedCountries] = useState([]);
    useEffect(()=>{
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries])
    return(
        <div className={styles.select}>
        <select defaultValue="Global" onChange={(e)=>handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {fetchedCountries.map((country, i)=><option key={i} value={country}>{country}</option>)}
        </select>
        </div>
    )
}

export default CountrySelector;