import React, {useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chart from '../components/chart'
import {fetchData} from '../fetchdata';
import {StatCards} from './StatCards'

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


export default function Body() {
    // let [data, setData] = useState({});
    var data = {};

    useEffect(()=>{
        // setData(fetchData)
    })

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <h1>Global Stats</h1>
                <hr/>
                <StatCards />
                <Chart data = {data} />
            </Container>
        </React.Fragment>
    );
}