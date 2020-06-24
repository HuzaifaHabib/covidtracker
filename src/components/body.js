import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chart from '../components/chart'


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

function BodyCards() {
    const classes = useStyles();

    return (
        //   <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
                <Paper className={classes.paper, "infected"}>
                    <h1>Total Infected</h1>
                    <h3>1033</h3>
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper className={classes.paper, "livecases"}>
                    <h1>Live Cases</h1>
                    <h3>1033</h3>

                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper className={classes.paper, "recovered"}>
                    <h1>Recovered</h1>
                    <h3>1033</h3>

                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
                <Paper className={classes.paper, "deaths"}>
                <h1>Deceased</h1>
                <h3>1033</h3>

                </Paper>
            </Grid>
        </Grid>

        //   </div>
    );
}

export default function Body() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <h1>Global Stats</h1>
                <hr/>
                <BodyCards />
                <Chart />
            </Container>
        </React.Fragment>
    );
}