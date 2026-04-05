import './App.css';
import React from "react";
import Internships from './Components/Internships';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import About from './Components/About';
import CursorTrail from './Components/CursorTrail';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0a0f',
      paper: '#13131a',
    },
    primary: {
      main: '#a78bfa',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App-body">
        <CursorTrail />
        <Navbar />
        <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
          <section id="about-me">
            <About />
          </section>
          <section id="experience">
            <Internships />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
