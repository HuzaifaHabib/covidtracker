import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Chart from './chart';
import { StatCards } from './StatCards';
import Countries from './CountryPicker';
import Grid from '@material-ui/core/Grid';
import {StatDtl} from './StatDtl'
import {fetchTodayData} from '../fetchdata'


export default function GlobalStats() {
    // let [data, setData] = useState({});
    var data = {};

    const [statData, setstatData] = useState(0);

    useEffect(() => {
        const fetchApi = async () => {
            const initStat = await fetchTodayData();
            setstatData(initStat);
        };
        fetchApi();
    }, []);

    useEffect(() => {
        // setData(fetchData)
    })

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='xl'>
                <h1>Global Stats</h1>
                <hr />

                <StatCards />
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <StatDtl statData = {statData}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Chart data={data} />
                    </Grid>
                </Grid>

            </Container>
        </React.Fragment>
    );
}

