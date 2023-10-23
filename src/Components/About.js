import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@material-ui/core/Grid';


export default function About(props) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Box
            display='flex'
            flexDirection= "column"
            justifyContent='center'
            alignItems='center'
          >
          <Typography variant="h4" align="center" color="text.primary" paragraph>
            Hi I'm Andy!
          </Typography>
          <CardMedia
              sx={{ height: 300, width: 300, boxShadow: 3,borderRadius: 2,}}
              image='/images/grad_headshot.jpeg'
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={8}>
          <Box>
              <br></br>
              <Box fullWidth variant='outlined' 
              sx={{
                  bgcolor: '#f9f9f9',
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 4,
                  minWidth: 300,
              }}>
              <Typography variant="h6" align="center" color="text.primary" paragraph>
                  I'm a new grad double majoring in CS & Econ and S&DS from Yale class of 2023 looking for new grad SWE roles. I have experience in data science, ML, and full stack.
              </Typography>
              <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              >
                <ul>
                  <li>
                    <Link href="https://cpsc.yale.edu/" underline="hover">
                        B.S. in Computer Science & Economomics
                    </Link>
                  </li>
                  <li>
                    <Link href="https://statistics.yale.edu/" underline="hover">
                        B.A. in Statistics & Data Science
                    </Link>
                  </li>
                </ul>
              </Box>
              <Typography variant="h6" align="center" color="text.primary" paragraph>
                  I love to read books, especially fantasy novels. Some of my favorite series are Harry Potter, Percy Jackson, and The Mistborn Series.
                  I love sports: F1, Basketball, and Esports. 
                  I love animals and am the proud owner of a bunny.
                  I'm currently based in San Francisco, but am open to relocation.
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                  Socials
              </Typography>
              <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              >
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/andywu-yale/">
                      <LinkedInIcon style={{ color: "#0A66C2", fontSize: '50px'}}/>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/andywu-yale/">
                      <GitHubIcon style={{ color: "black",  fontSize: '50px'}}/>
                  </a>
                </li>
              </ul>
              </Box>
            </Box>
          </Box>
        </Grid>
        
      </Grid>
    )
}

