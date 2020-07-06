import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Chart from '../components/chart'
import {StatCards} from './StatCards'


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