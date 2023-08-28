import React from 'react';
import './Internship.css'


export default function Internship(props) {
    return (
    <div class={"Card " + props.class}>
        <h1>{props.title}</h1>
        <h1>{props.company}</h1>
        <img class="Headshot" src={props.img_src} alt="Headshot"></img>
        <p>Key Skills: {props.key_skills}</p>

    </div>
    );
  }