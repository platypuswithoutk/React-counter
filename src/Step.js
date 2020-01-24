import React, { Component } from 'react';


class Step extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return(
            <div class="step">
                <p>Krok: </p>
                <input type="number" 
                    onChange={(event)=>this.props.stepValue(event)} 
                ></input>
            </div>
        )
    }
}

export default Step;
