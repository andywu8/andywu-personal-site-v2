import React from 'react';
import './Components.css';
import Collapse from '@mui/material/Collapse'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@mui/material/Divider'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import { CardContent, CardMedia, Box, Typography, Button, Chip } from '@mui/material';



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
        // border:4,
        // borderLeft:4,
        // borderRight:4,
        // borderColor:"coral",
        bgcolor: '#f9f9f9',
        // bgcolor: '#dad5d5',
        boxShadow: 3,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
        '&hover': {
          boxShadow: 20, // theme.shadows[20]
        }

      }}
      padding={2}
    >
        <CardContent>

            {props.img_src !== "" ? (
              <>
                <CardMedia
                sx={{ 
                  height: 140,
                  border: "1px solid #0096FF" 
                }}
                image={props.img_src}
                />
              </>

            ): (
              <></>
            )}
 

            <Typography variant='h4'>
                {props.project_name}
            </Typography>
            
            <Typography variant='subtitle2'>
                <p>{props.description}</p>
                {props.key_tech.map((tech) =>
                  <Chip label={tech} variant="outlined" />
                )}
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