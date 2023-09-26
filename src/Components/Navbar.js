import React from 'react';
import { Link } from 'react-scroll'
import navbar_css from './Navbar.module.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { CardActionArea, Card, Typography } from '@mui/material';

const pages = [
  {
    name: "About Me",
    section_id: "about-me"
  },
  {
    name: "Projects",
    section_id: "projects"
  },
  {
    name: "Experience",
    section_id: "experience"
  }
]

export default class Nav extends React.Component {

  render() {    
    return (
        <AppBar >
            <ul>
              {pages.map(page => {
                return (  
                  <Card
                  m={1}
                  color="lb"
                  sx={{
                    ':hover': {
                      boxShadow: 20, // theme.shadows[20]
                    },
                  }}
                >
                    <li>
                      <Link class={navbar_css.active} smooth spy to={page.section_id}>

                        <Typography gutterBottom variant="h5" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                          {page.name}
                        </Typography>
                      </Link>
                    </li>   
                </Card>
                )
              })}
            </ul>
        </AppBar>
    );
  }
}