
import './App.css';
import './image/grad_headshot.jpeg' 
import { Link, Switch, Route } from 'react-router-dom';
import Internship from './Components/Internship'
import Project from './Components/Project'

import {AiFillLinkedin, AiFillGithub} from "react-icons/ai" 

function App() {
  return (
    <div className="App">

      <body className="App-body">

        <h1>Andy Wu</h1>
        <h1>Links</h1>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/andywu-yale/">
                <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/andywu8">
              <AiFillGithub />
            </a>
          </li>
        </ul>

        <img class="Headshot hvr-float" src={require('./image/grad_headshot.jpeg')} alt="Headshot"></img>
        <div> 

        </div>
        <h2>About Me</h2>
        <ul>
          <li>Passionate Reader</li>
          <li>Lover of all things sports: F1, Basketball, Esports</li>
          <li>Bunny afficionado</li>
          <li>Based in San Francisco</li>
        </ul>
        <p></p>
        <h1>Experience</h1>
        <Internship class="hvr-float" title="Software Engineer Intern" company="Meta" img_src="/meta_logo.jpeg"/>
        <h1>Projects</h1>
        <Project class="hvr-float" project_name="Mutuals" description="Match Making App that allows you to match friends of friends"/>
        
      </body>
    </div>
  );
}

export default App;
