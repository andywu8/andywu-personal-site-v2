import React from 'react';
import './Internship.css'


export default function Internship(props) {
    return (
    <div class="Card">
        <h1>{props.title}</h1>
        <h1>{props.company}</h1>
        <img class="Headshot" src="/meta_logo.jpeg" alt="Headshot"></img>
        <p>Key Skills: {props.key_skills}</p>

    </div>
    );
  }