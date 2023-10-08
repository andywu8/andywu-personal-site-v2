import React, {useState} from 'react';
import './Components.css'
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, CardMedia, Box, Typography, Chip } from '@mui/material';

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
                  <p>{props.description}</p>
                  {props.skills.map((skill) =>
                    <Chip label={skill} variant="outlined" />
                  )}
                </Typography>
            </CardContent>
        </Box>


    );
  }