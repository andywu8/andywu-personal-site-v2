
import './App.css';
import './image/grad_headshot.jpeg' 
import { Switch, Route } from 'react-router-dom';
import Internship from './Components/Internship'
import Project from './Components/Project'
import Navbar from './Components/Navbar'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai" 
import {Button} from '@material-ui/core'; 

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { classes } from 'istanbul-lib-coverage';


function App() {
  return (
    <div className="App">
      <body className="App-body">
        <Navbar/>
        <section id="about-me">
        <Button variant="outlined" color="primary">View Github Repo</Button>

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
          <h5>Socials</h5>
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
          <Internship class="hvr-float" title="Software Engineer Intern" company="Meta" duration="May 2022 - Aug 2022" img_src="/meta_logo.jpeg"/>
          <Internship class="hvr-float" title="Venture Associate" company="Tsai CITY" duration="September 2022 - May 2023" img_src=""/>
          <Internship class="hvr-float" title="Software Engineer Intern" company="State Farm" duration="May 2021 - Aug 2021" img_src=""/>
          <Internship class="hvr-float" title="Machine Learning Research Intern" company="Yale Intelligent Computing Lab" duration="May 2020 - Aug 2020" img_src=""/>

        </section>
        <section id="projects">
          <h1>Projects</h1>
          <div className={classes.root}>
            <Grid container spacing = {3}>
              <Grid item xs={4}>
                <Project class="hvr-float" dates="2022" project_name="Mutuals" github_link="https://github.com/andywu8/cs419-finalproject" key_tech="Flask, SQL, Python, (HTML, CSS, JS)" description="Match Making App that allows you to match friends of friends"/>
              </Grid>
              <Grid item xs={4}>
              <Project class="hvr-float" dates="2022" project_name="Curbside" github_link="https://github.com/BenTheNetizen/DiStasio-Project" key_tech="ReactJS, SQL" description="Google Docs for Doctors"/>
              </Grid>
              <Grid item xs={4}>
              <Project class="hvr-float" dates="2021" project_name="Predict.ai" github_link="https://github.com/andywu8/hackday-predict.ai" key_tech="Django, Python" description="Full stack + ML app to predict car insurance by states"/>
              </Grid>
              <Grid item xs={4}>
              <Project class="hvr-float" dates="2021" project_name="Simmer" github_link="https://github.com/andywu8/simmer" key_tech="ReactJS, Firebase" description="View Cooking Recipes"/>

              </Grid>
            </Grid>
          </div>

        </section>
      </body>
    </div>
  );
}

export default App;
