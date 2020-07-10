import React, {useEffect, useState} from 'react';
import GlobalStats from './GlobalStats';
import CountryStats from './CountryData'



export default function InfoPanel ({currentScreen}) {
    if (currentScreen === 0)
        return <GlobalStats />
    else if (currentScreen === 1)
        return <CountryStats />

    else
        return <h1>ERROR</h1> 
}





