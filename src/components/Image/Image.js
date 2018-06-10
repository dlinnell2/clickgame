import React, { Component } from 'react';

const Image = (props) => (

    <div className = "col-sm-3 clickImage" key={props.key}>
        <img src={props.image} />
    </div>
);

export default Image