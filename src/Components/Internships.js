import Grid from '@mui/material/Grid';
import Internship from './Internship';
import Internships_Data from './json/internships.json';
import { Box, Typography } from '@mui/material';

export default function Internships() {
  return (
    <Box>
      <Box sx={{ mb: 6 }}>
        <Typography sx={{
          color: '#a78bfa',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          mb: 1,
        }}>
          Career
        </Typography>
        <Typography variant="h2" sx={{
          fontWeight: 800,
          fontSize: { xs: '2.2rem', md: '3rem' },
          letterSpacing: '-0.03em',
          color: '#f1f5f9',
          lineHeight: 1.1,
        }}>
          Experience
        </Typography>
        <Box sx={{
          mt: 2,
          height: '2px',
          width: '48px',
          background: 'linear-gradient(90deg, #a78bfa, #60a5fa)',
          borderRadius: '2px',
        }} />
      </Box>

      <Grid container spacing={3}>
        {Internships_Data.map((internship) => (
          <Grid item xs={12} md={6} key={internship.company} sx={{ display: 'flex' }}>
            <Internship
              title={internship.title}
              company={internship.company}
              duration={internship.duration}
              img_src={internship.img_src}
              skills={internship.skills}
              bullets={internship.bullets}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
