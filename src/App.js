
import './App.css';
import './image/grad_headshot.jpeg' 
import { Switch, Route } from 'react-router-dom';
import Internship from './Components/Internship'
import Project from './Components/Project'
import Navbar from './Components/Navbar'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai" 

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <Navbar/>
        <section id="about-me">
        <h1>About Me</h1>
          <h2>Hi I'm Andy Wu!</h2>
          <img class="Headshot hvr-float" src={require('./image/grad_headshot.jpeg')} alt="Headshot"></img>
          <ul>
            <li>Passionate Reader</li>
            <li>Lover of all things sports: F1, Basketball, Esports</li>
            <li>Bunny afficionado</li>
            <li>Based in San Francisco</li>
          </ul>
          <ul>

            <li>
              <a href="https://www.linkedin.com/in/andywu-yale/">
                  <AiFillLinkedin size={40}/>
              </a>
            </li>
            <li>
              <a href="https://github.com/andywu8">
                <AiFillGithub size={40}/>
              </a>
            </li>
          </ul>
        </section>
        <section id="experience">
          <h1>Experience</h1>
          <Internship class="hvr-float" title="Software Engineer Intern" company="Meta" img_src="/meta_logo.jpeg"/>
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <Project class="hvr-float" project_name="Mutuals" description="Match Making App that allows you to match friends of friends"/>
        </section>

      </body>
    </div>
  );
}

export default App;
