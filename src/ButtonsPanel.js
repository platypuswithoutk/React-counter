import React from 'react'; //zawsze import w dwóch miejscach i eksport 

const ButtonsPanel = props => { //nazwa komponentu musi odpowiadac nazwie pliku

    return (
        <div className="buttons-panel"> 
            To jest panel przycisków
            <button onClick={props.changeValue}>Add 1</button>
            <button onClick={()=>props.resetValue(true)}>Set 0</button>
            <button onClick={()=>props.resetValue(false)}>Reset</button>
        </div>
    );
} 

export default ButtonsPanel;
