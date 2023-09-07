
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
          <p>I'm a new grad from Yale class of 2023. I graduated with a BS double majoring in Computer Science & Economics and Statistics & Data Science. I'm interested in software engineering, product management, and data science.</p>
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
          <Internship class="hvr-float" title="Venture Associate" company="Tsai CITY" img_src="/meta_logo.jpeg"/>
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
