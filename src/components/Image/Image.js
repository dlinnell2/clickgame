import React, { Component } from 'react';

const Image = (props) => (

    <div className = "col-sm-3 clickImage" id={props.id}>
        <img src={props.image} onClick={ () => props.clickImage(props.id)}/>
    </div>
);

export default Image