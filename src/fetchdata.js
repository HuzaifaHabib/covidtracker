import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;
  
    if (country) {
      changeableUrl = `${url}/countries/${country}`;
    }
  
    try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
  
      return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
      return error;
    }
  };

export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
        
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
  };

export const fetchTotals = async () => {
    try {
      const { data } = await axios.get(url);
        
      return data
    } catch (error) {
      return error;
    }
  };

  export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };

  export const fetchTodayData = async () => {
    try {
      const data  = await axios.get('https://api.thevirustracker.com/free-api?global=stats');
      const todayData = data.data.results[0];
      return todayData;

    } catch (error) {
      return error;
    }
  };

  export const fetchCountryData = async () => {
    try {
      const data = await axios.get('https://api.thevirustracker.com/free-api?countryTotals=ALL');
      const [countryData] = data.data.countryitems[0]
      return countryData;

    } catch (error) {
      return error
    }
  }