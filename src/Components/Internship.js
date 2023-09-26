import React, {useState} from 'react';
import './Components.css'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
export default function Internship(props) {
    const classes = useStyles();
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
                image={props.img_src}
            />
            <CardContent>
                <Typography variant='h4'>
                    {props.title}
                </Typography>
                <Typography variant='h5'>
                    {props.company}
                </Typography>
                <Typography variant='subtitle2'>
                  <p>Duration: {props.duration}</p>
                  <p>Key Skills: {props.key_skills}</p>
                </Typography>
            </CardContent>
        </Box>


    );
  }