import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import {fetchCountries, fetchData} from '../fetchdata';

const Countries = () => {
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      const fetchAPI = async () => {
        setCountries(await fetchCountries());
      };
  
      fetchAPI();
    }, []);

    const handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
      }
  
    return (
      <FormControl >
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    );
  };
  
  export default Countries;