import React, { Component } from 'react';

import ButtonsPanel from './ButtonsPanel';
import CounterDisplay from './CounterDisplay';

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

    addOne = () => {
        this.setState(prevState=> {
            return({counterValue: prevState.counterValue + 1})
        })
    }  

    reset = resetBool => {
        if(resetBool) {
            this.setState({counterValue: 0});
        } else {
            this.setState({counterValue: this.props.initValue});
        }
    }


    render () {
        return(
            <div className="counter">
                <CounterDisplay counterCurrentValue={this.state.counterValue}/>
                <ButtonsPanel changeValue={this.addOne} resetValue={this.reset}/>
            </div>  
        );
    }
}

export default Counter;

//funckja zawsze cos zwraca, klasa nie zwraca, w klasie zwraca metoda