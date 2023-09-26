import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai" 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// or

export default function About(props) {
    return (
        <Box
        display="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        >
            <Typography variant="h2" align="center" color="text.primary" paragraph>
                Hi I'm Andy Wu!
            </Typography>
            <img class="Headshot hvr-float" src='/images/grad_headshot.jpeg' alt="Headshot"></img>
            <Typography variant="h6" align="center" color="text.primary" paragraph>
                I'm a new grad double majoring in CS & Econ and S&DS from Yale class of 2023 looking for new grad SWE roles. I have experience in data science, ML, and full stack.
            </Typography>
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
            <Typography variant="h6" align="center" color="text.primary" paragraph>
                I love to read books, especially fantasy novels. Some of my favorite series are Harry Potter, Percy Jackson, and The Mistborn Series.
              I love sports: F1, Basketball, and Esports. 
              I love animals and am the proud owner of a bunny.
              I'm currently based in San Francisco, but am open to relocation.
            </Typography>
            <p>
            </p>
            <h5>Socials</h5>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/andywu-yale/">
                    <LinkedInIcon size={40}/>
                </a>
              </li>
              <li>
                <a href="https://github.com/andywu8">
                  <AiFillGithub size={40}/>
                </a>
              </li>
            </ul>
        </Box>
    )
}
