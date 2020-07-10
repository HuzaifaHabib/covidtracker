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

    // console.log(statData);

    return (
        <center>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={12} md={3}>
                    <Paper className="infected" {...classes.paper}>
                        <h1>Total Confirmed</h1>
                        <h3>{statData ? statData.confirmed.value : "Please Wait"}</h3>

                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper className="recovered" {...classes.paper}>
                        <h1>Recovered</h1>
                        <h3>{statData ? statData.recovered.value : "Please Wait"}</h3>

                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper className="deaths"{...classes.paper}>
                        <h1>Deceased</h1>
                        <h3>{statData ? statData.deaths.value : "Please Wait"}</h3>

                    </Paper>
                </Grid>
            </Grid>

        </center>

    );
}
