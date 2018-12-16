import React from 'react';

const NavigationItem = (props) => (
    <a className="navigationItem font-title" href={props.url}>
        {props.name}
    </a>
);

export default NavigationItem;