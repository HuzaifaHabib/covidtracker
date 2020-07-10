import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {fetchTodayData} from '../fetchdata'



export const StatDtl = function ({statData}) {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            // color: theme.palette.text.secondary,
            color: theme.palette.text.primary,
        },
    }));

    const classes = useStyles();

    // console.log(statData)
    return (
        <center>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={12} sm={6} >
                    <Paper className={classes.paper}>
                        <h3>Total New Cases Today</h3>
                        <h4>{statData ? statData.total_new_cases_today : "Please Wait"}</h4>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <h3>Total New Deaths Today</h3>
                        <h4>{statData ? statData.total_new_deaths_today : "Please Wait"}</h4>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <h3>Total Active Cases</h3>
                        <h4>{statData ? statData.total_active_cases : "Please Wait"}</h4>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <h3>Total Effected Countries</h3>
                        <h4>{statData ? statData.total_affected_countries : "Please Wait"}</h4>
                    </Paper>
                </Grid>
            </Grid>

        </center>

    );
}
