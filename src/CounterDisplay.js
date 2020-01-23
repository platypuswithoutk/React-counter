import React from 'react'; //zawsze import w dwóch miejscach i eksport 

const CounterDisplay = props => { //nazwa komponentu musi odpowiadac nazwie pliku
    return(
            <p>Stan licznika: {props.counterCurrentValue}</p>
    )};

export default CounterDisplay;
