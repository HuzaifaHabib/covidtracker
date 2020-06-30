import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { fetchTotals } from '../fetchdata'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

export const StatCards = function () {
    const [statData, setstatData] = useState(0);

    useEffect(() => {
        const fetchApi = async () => {
            const initStat = await fetchTotals();
            setstatData(initStat);
        };
        fetchApi();
    }, []);
    const classes = useStyles();

    console.log(statData);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
                <Paper className={classes.paper, "infected"}>
                    <h1>Total Confirmed</h1>
                    <h3>{statData ? statData.confirmed.value : "Please Wait"}</h3>

                </Paper>
            </Grid>
            {/* <Grid item xs={12} md={3}>
                <Paper className={classes.paper, "livecases"}>
                    <h1>Live Cases</h1>
                    <h3>1033</h3>

                </Paper>
            </Grid> */}
            <Grid item xs={12} md={3}>
                <Paper className={classes.paper, "recovered"}>
                    <h1>Recovered</h1>
                    <h3>{statData ? statData.recovered.value : "Please Wait"}</h3>

                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper className={classes.paper, "deaths"}>
                    <h1>Deceased</h1>
                    <h3>{statData ? statData.deaths.value : "Please Wait"}</h3>

                </Paper>
            </Grid>
        </Grid>

    );
}