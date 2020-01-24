import React, { Component } from 'react';


class Step extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stepValue: 1
        };
    }

    updateStepValue = (event) => {
        if (event.target.value >= 1) {
            this.props.stepValue(event);
            this.setState({stepValue: event.target.value})
        }
    }

    render () {
        return(
            <div class="step">
                <p>Krok: </p>
                <input type="number" value={this.state.stepValue}
                    onChange={this.updateStepValue} 
                ></input>
            </div>
        )
    }
}

export default Step;
