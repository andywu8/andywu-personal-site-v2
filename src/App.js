
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
          <p>I'm a new grad double majoring in CS & Econ and S&DS from Yale class of 2023 looking for new grad SWE roles. I have experience in data science, ML, and full stack.</p>
          <ul>
            <li>
              <a href="https://cpsc.yale.edu/">
                B.S. in Computer Science & Economomics
              </a>
            </li>
            <li>
              <a href="https://statistics.yale.edu/">
                B.A. in Statistics & Data Science
              </a>
            </li>
          </ul>
          <p>
            I love to read books, especially fantasy novels. Some of my favorite series are Harry Potter, Percy Jackson, and The Mistborn Series.
            I love sports: F1, Basketball, and Esports. 
            I love animals and am the proud owner of a bunny.
            I'm currently based in San Francisco, but am open to relocation.

            
          </p>
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
          <Internship class="hvr-float" title="Venture Associate" company="Tsai CITY" img_src="/tsai_city.png"/>
          <Internship class="hvr-float" title="Software Engineer Intern" company="State Farm" img_src="/meta_logo.jpeg"/>
          <Internship class="hvr-float" title="Machine Learning Research Intern" company="Yale Intelligent Computing Lab" img_src="/meta_logo.jpeg"/>

        </section>
        <section id="projects">
          <h1>Projects</h1>
          <Project class="hvr-float" dates="2022" project_name="Mutuals" description="Match Making App that allows you to match friends of friends"/>
          <Project class="hvr-float" dates="2022" project_name="Curbside" description="Match Making App that allows you to match friends of friends"/>
          <Project class="hvr-float" dates="2022" project_name="Mutuals" description="Match Making App that allows you to match friends of friends"/>
          <Project class="hvr-float" dates="2022" project_name="Simmer" description="Match Making App that allows you to match friends of friends"/>

        </section>

      </body>
    </div>
  );
}

export default App;
