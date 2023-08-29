import React from 'react';
import './Components.css'


export default function Internship(props) {
    return (
    <div class={"Card " + props.class}>
        <div class="left">
            <img class ="company_logo" src={props.img_src} alt="company_logo"></img>
        </div>
        <div class="right">
            <h1>{props.title}</h1>
            <h1>{props.company}</h1>
            <p>Key Skills: {props.key_skills}</p>
        </div>

    </div>
    );
  }