import React from 'react';
import './Components.css';
import Collapse from '@mui/material/Collapse'
import {Button} from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import Box from '@mui/material/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Project(props) {
    const classes = useStyles();
    const [collapse, setCollapse] = useState(false)

    const handleClick = () => {
      setCollapse(!collapse)
    }

    return (
    <Box fullWidth variant='outlined' className={classes.root}
    sx={{
        bgcolor: '#f9f9f9',
        boxShadow: 3,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
      }}
    >
        <CardMedia
        sx={{ height: 140 }}
        image={props.image}
        />
        <CardContent>
            <h1>{props.project_name}</h1>
            <p> {props.description}</p>
            <p>Built Using: {props.key_tech}</p>
            <Button href={props.github_link} color="primary" variant="contained">View Github Repo</Button>
            <Button onClick={handleClick}></Button>
            <IconButton size='small' onClick={handleClick}>
            {collapse ? <ChevronUp sx={{ fontSize: '1.875rem' }} /> : <ChevronDown sx={{ fontSize: '1.875rem' }} />}
          </IconButton>
        </CardContent>
        <Collapse in={collapse}>
            <Divider sx={{ margin: 0 }} />
            <CardContent>
            <Typography variant='body2'>
                <p>Dates worked on: {props.date}</p>
                <p>{props.about_app}</p>
            </Typography>
            </CardContent>
        </Collapse>
    </Box>
    );
  }