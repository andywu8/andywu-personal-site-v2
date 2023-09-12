import React from 'react';
import './Components.css';


export default function Project(props) {
    return (
    <div class={"Card "+props.class}>
        <h1>{props.project_name}</h1>
        <p>About: {props.description}</p>
        <p>Dates worked on: {props.date}</p>
        <p>Key Tech: {props.key_tech}</p>
        <a href={props.github_link} class="btn">View Github</a>

    </div>
    );
  }