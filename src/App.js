import './App.css';
import React from "react";
import { Switch, Route } from 'react-router-dom';
import Internship from './Components/Internship'
import Project from './Components/Project'
import Navbar from './Components/Navbar'
import {Button} from '@material-ui/core'; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { classes } from 'istanbul-lib-coverage';
import { blue } from "@material-ui/core/colors";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// const theme = unstable_createMuiStrictModeTheme();
import About from './Components/About';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import Box from '@mui/material/Box';
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
          <h1>About Me</h1>
          <About />
          </section>
          <section id="projects">
            <h1>Projects</h1>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Project class="hvr-float" dates="2022" project_name="Mutuals" github_link="https://github.com/andywu8/cs419-finalproject" key_tech="Flask, SQL, Python, (HTML, CSS, JS)" description="Match Making App that allows you to match friends of friends"/>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Project class="hvr-float" dates="2022" project_name="Curbside" github_link="https://github.com/BenTheNetizen/DiStasio-Project" key_tech="ReactJS, SQL" description="Google Docs for Doctors"/>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Project class="hvr-float" dates="2021" project_name="Predict.ai" github_link="https://github.com/andywu8/hackday-predict.ai" key_tech="Django, Python" description="Full stack + ML app to predict car insurance by states"/>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Project class="hvr-float" dates="2021" project_name="Simmer" github_link="https://github.com/andywu8/simmer" key_tech="ReactJS, Firebase" description="View Cooking Recipes"/>
                </Grid>
              </Grid>
            </div>
          </section>



          <section id="experience">
            <h1>Experience</h1>
            <div className={classes.root}>
              <Grid container spacing = {3}>
                <Grid item xs={12} md={4}>
                  <Internship class="hvr-float" title="Software Engineer Intern" company="Meta" duration="May 2022 - Aug 2022" img_src="/images/meta_logo.jpeg"/>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Internship class="hvr-float" title="Venture Associate" company="Tsai CITY" duration="September 2022 - May 2023" img_src="/images/tsai_city.png"/>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Internship class="hvr-float" title="Software Engineer Intern" company="State Farm" duration="May 2021 - Aug 2021" img_src="/images/statefarm.png"/>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Internship class="hvr-float" title="Machine Learning Research Intern" company="Yale Intelligent Computing Lab" duration="May 2020 - Aug 2020" img_src="/images/intelligent_lab.png"/>
                </Grid>
              </Grid>
            </div>

          </section>
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App;
