import './App.css';
import React from "react";
import Internships from './Components/Internships'
import Projects from './Components/Projects'
import Navbar from './Components/Navbar'
import {Button} from '@material-ui/core'; 
import About from './Components/About';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

const themeDark = createTheme({
  palette: {
    text: {
      primary: "#ffffff"
    },
    background: {
      paper: '#f9f9f9',
    },
  }
});
function App() {
  const [light, setLight] = React.useState(true);
  return (

    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Button onClick={() => setLight(prev => !prev)}>Toggle Theme</Button>
      <CssBaseline enableColorScheme />
        <div className="App">
        <body className="App-body">
          <Navbar/>
          <section id="about-me">
          <About />
          </section>
          <section id="projects">
            <h1>Projects</h1>
            <Projects />
          </section>
          <section id="experience">
            <h1>Experience</h1>
            <Internships />
          </section>
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App;
