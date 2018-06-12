import React, { Component } from 'react';

const Navbar = (props) => (
    <div className = "navbar sticky-top navbar-expand-lg navbar-dark bg-info d-flex justify-content-between">
            <span className = "score"> Current score: {props.current}</span>
            <span className = "message"> {props.message} </span>
            <span className = "score"> High score: {props.high}</span>
    </div>
)

export default Navbar