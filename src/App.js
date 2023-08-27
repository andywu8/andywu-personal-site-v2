
import './App.css';
import './image/grad_headshot.jpeg' 
import { Link, Switch, Route } from 'react-router-dom';
import Internship from './Components/Internship'




function App() {
  return (
    <div className="App">

      <body className="App-body">

        <h1>Andy Wu</h1>
        <h1>Links</h1>
        <a href="https://www.linkedin.com/in/andywu-yale/">Linkedin</a>
        <a href="Github">Github</a>
        <img class="Headshot" src={require('./image/grad_headshot.jpeg')} alt="Headshot"></img>
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
        <Internship title="Software Engineer Intern" company="Meta" />
        <h1>Projects</h1>

      </body>
    </div>
  );
}

export default App;
