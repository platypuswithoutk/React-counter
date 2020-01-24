import React, { Component } from 'react';

import ButtonsPanel from './ButtonsPanel';
import CounterDisplay from './CounterDisplay';
import Step from './Step';

class Counter extends Component { //klasa counter DZIEDZICZY po component

    constructor(props) {
        super(props);

        let initValue = 0;

        if(!isNaN(this.props.initValue)) {
            initValue = parseInt(this.props.initValue);
        }

        this.state = {
            counterValue: initValue
        };
    }

    addValue = () => {
        this.setState(prevState=> {
            return({counterValue: prevState.counterValue + parseInt(this.state.stepValue)}) 
        })
    }  

    reset = resetBool => {
        if(resetBool) {
            this.setState({counterValue: 0});
        } else {
            this.setState({counterValue: this.props.initValue});
        }
    }

    setStep = (event) => {
        this.setState({stepValue: event.target.value});
    }

    render () {
        return(
            <div className="counter">
                <CounterDisplay counterCurrentValue={this.state.counterValue}/>
                <ButtonsPanel changeValue={this.addValue} resetValue={this.reset}/>
                <Step stepValue={this.setStep}/>
            </div>  
        );
    }
}

export default Counter;

//funckja zawsze cos zwraca, klasa nie zwraca, w klasie zwraca metoda