import React from 'react'; //zawsze import w dwóch miejscach i eksport 

const ButtonsPanel = props => { //nazwa komponentu musi odpowiadac nazwie pliku

    return (
        <div className="buttons-panel"> 
            To jest panel przycisków
            <button onClick={props.changeValue}>Zwiększ o:</button>
            <button onClick={()=>props.resetValue(true)}>Wyzeruj</button>
            <button onClick={()=>props.resetValue(false)}>Reset</button>
        </div>
    );
} 

export default ButtonsPanel;
