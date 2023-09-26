
import { classes } from 'istanbul-lib-coverage';
import Grid from '@material-ui/core/Grid';
import Internship from './Internship'
import Internships_Data from './json/internships.json'
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
                Experience
            </Typography>
            <br></br>
          <Grid container spacing={3}>
            {
              Internships_Data.map(internship => {
                  return(
                    
                    <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                      <Internship 
                        title={internship.title} 
                        company={internship.company}
                        duration={internship.duration}
                        img_src={internship.img_src}
                      />
                    </Grid>
                  )
              })
            }
          </Grid>
        </Box>
    )
}