import Grid from '@material-ui/core/Grid';
import Project from './Project'
import Projects_Data from './json/projects.json'
import { Box, Typography } from '@mui/material';

export default function About(props) {
    return(
      <Box
      direction="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      >
          <Typography variant='h3' align="center">
              Projects
          </Typography>
          <br></br>
          <Grid container spacing={3}>
            {
              Projects_Data.map(project => {
                  return(
                    <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
                      <Project 
                        img_src={project.img_src}
                        project_name={project.name} 
                        project_date={project.date} 
                        github_link={project.github_link} 
                        key_tech={project.key_tech} 
                        description={project.description}
                        date = {project.dates}
                      />
                    </Grid>
                  )
              })
            }
          </Grid>
        </Box>
    )
}
