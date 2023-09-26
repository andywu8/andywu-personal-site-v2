import './App.css';
import React from "react";
import Internships from './Components/Internships'
import Projects from './Components/Projects'
import Navbar from './Components/Navbar' 
import About from './Components/About';
import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';



const themeLight = createTheme({
  palette: {
    mode: 'light',
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  const [light, setLight] = React.useState(true);
  
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
    {/* <ThemeProvider theme={themeLight}> */}
      <CssBaseline />
      <CssBaseline enableColorScheme />
        <body className="App-body">

          <Navbar />
          <section id="about-me">
            <About />
            <br></br>
          </section>
          <Button variant="contained" onClick={() => setLight(prev => !prev)}>Toggle Theme</Button>

          <section id="projects">
            <Projects />
          </section>
          <section id="experience">
            <Internships />
          </section>
        </body>
    </ThemeProvider>
  );
}

export default App;
