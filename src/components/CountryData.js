import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Chart from './chart';
import { StatCards } from './StatCards';
import Grid from '@material-ui/core/Grid';
import { StatDtl } from './StatDtl'
import { fetchCountryData } from '../fetchdata';
import { NativeSelect, FormControl } from '@material-ui/core';



export default function CountryStats() {
    // let [data, setData] = useState({});
    var data = {};

    const [statData, setstatData] = useState(0);

    useEffect(() => {
        const fetchApi = async () => {
            const initStat = await fetchCountryData();
            console.log(initStat)
            setstatData(initStat);
        };
        fetchApi();
    }, []);

    useEffect(() => {
        // setData(fetchData)
    })

    const handleCountryChange = async (country) => {
        // const data = await fetchData(country);
    
        // this.setState({ data, country: country });
      }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='xl'>
                <FormControl >
                    <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                        <option value="">Global</option>
                        {/* {statData.map((country, i) => <option key={i} value={country.title}>{country.title}</option>)} */}
                    </NativeSelect>
                </FormControl>
                <h1>Country Stats</h1>
                <hr />

                <StatCards />
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <StatDtl statData={statData} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Chart data={data} />
                    </Grid>
                </Grid>

            </Container>
        </React.Fragment>
    );
}

