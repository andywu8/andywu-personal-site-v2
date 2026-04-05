import Project from './Project';
import Projects_Data from './json/projects.json';
import { Box, Typography } from '@mui/material';

export default function Projects() {
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
          Work
        </Typography>
        <Typography variant="h2" sx={{
          fontWeight: 800,
          fontSize: { xs: '2.2rem', md: '3rem' },
          letterSpacing: '-0.03em',
          color: '#f1f5f9',
          lineHeight: 1.1,
        }}>
          Projects
        </Typography>
        <Box sx={{
          mt: 2,
          height: '2px',
          width: '48px',
          background: 'linear-gradient(90deg, #a78bfa, #60a5fa)',
          borderRadius: '2px',
        }} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {Projects_Data.map((project) => (
          <Project
            key={project.name}
            img_src={project.img_src}
            project_name={project.name}
            github_link={project.github_link}
            key_tech={project.key_tech}
            description={project.description}
            date={project.dates}
          />
        ))}
      </Box>
    </Box>
  );
}
