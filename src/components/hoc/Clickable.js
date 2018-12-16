import React from 'react';

const Clickable = (props) => (
    <div className={props.className + " clickable"} tabIndex="0" href={props.url}>
        {props.children}
    </div>
);

export default Clickable;