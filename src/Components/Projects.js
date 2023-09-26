
import { classes } from 'istanbul-lib-coverage';
import Grid from '@material-ui/core/Grid';
import Project from './Project'
import Projects_Data from './json/projects.json'
export default function About(props) {
    return(
        <div className={classes.root}>
          <Grid container spacing={3}>
            {
              Projects_Data.map(project => {
                  return(
                    <Grid item xs={12} md={4}>
                      <Project 
                        project_name={project.name} 
                        project_date={project.date} 
                        github_link={project.github_link} 
                        key_tech={project.key_tech} 
                        description={project.description}
                      />
                    </Grid>
                  )
              })
            }
          </Grid>
        </div>
    )
}
