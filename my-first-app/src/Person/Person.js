import React from 'react';

const person = (props) => {
    return (
<div>
    <p>Mit navn er {props.navn} og jeg er {props.alder} år gammel. {props.children}</p>
    </div>
    )
};

export default person;