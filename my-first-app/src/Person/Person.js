import React from 'react';
import './Person.css';

const person = (props) => {
    return (
<div className="Person">
    <p onClick={props.click}>Mit navn er {props.navn} og jeg er {props.alder} år gammel. {props.children}</p>
    <input type="text" onChange={props.changed} value={props.navn}/>
    </div>
    )
};

export default person;