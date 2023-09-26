import React from 'react';
import './Components.css';
import Collapse from '@mui/material/Collapse'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@mui/material/Divider'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import { CardContent, CardMedia, Box, Typography, Button } from '@mui/material';


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
            <Typography variant='h4'>
                {props.project_name}
            </Typography>
            
            <Typography variant='subtitle2'>
                <p>{props.description}</p>
                <p>{props.key_tech}</p>
            </Typography>
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