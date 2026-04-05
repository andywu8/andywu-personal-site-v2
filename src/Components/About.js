import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Typography, Link, IconButton } from '@mui/material';

const GRADIENT = 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)';

export default function About() {
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      pt: { xs: 4, md: 0 },
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'center',
        gap: { xs: 5, md: 8 },
        width: '100%',
      }}>

        {/* Text */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{
            color: '#a78bfa',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            mb: 1.5,
          }}>
            Software Engineer · AI Infrastructure
          </Typography>

          <Typography variant="h1" sx={{
            fontWeight: 800,
            fontSize: { xs: '3.2rem', md: '5rem' },
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            background: GRADIENT,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            mb: 3,
          }}>
            Andy Wu
          </Typography>

          <Typography sx={{
            color: '#94a3b8',
            fontSize: '1rem',
            lineHeight: 1.75,
            maxWidth: 520,
            mb: 4,
          }}>
            Full-stack engineer with 3 years building AI infrastructure and production ML systems.
            Currently at <Box component="span" sx={{ color: '#f1f5f9', fontWeight: 500 }}>Scale AI</Box> ensuring
            quality of generative AI training data pipelines. Prior experience building multi-task
            ML relevance models at <Box component="span" sx={{ color: '#f1f5f9', fontWeight: 500 }}>Meta</Box> serving
            billions of daily impressions.
          </Typography>

          {/* Education */}
          <Box sx={{
            mb: 4,
            pl: 2,
            borderLeft: '2px solid #2a2a38',
          }}>
            <Typography sx={{
              color: '#64748b',
              fontSize: '0.7rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              mb: 0.75,
            }}>
              Yale University '23
            </Typography>
            <Typography sx={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.8 }}>
              <Link href="https://cpsc.yale.edu/" underline="hover" sx={{ color: '#a78bfa', '&:hover': { color: '#c4b5fd' } }}>
                B.S. Computer Science & Economics
              </Link>
            </Typography>
            <Typography sx={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.8 }}>
              <Link href="https://statistics.yale.edu/" underline="hover" sx={{ color: '#a78bfa', '&:hover': { color: '#c4b5fd' } }}>
                B.A. Statistics & Data Science
              </Link>
            </Typography>
          </Box>

          {/* Social links */}
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/andywu-yale/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#64748b',
                border: '1px solid #1e1e2a',
                borderRadius: '10px',
                p: 1.25,
                transition: 'all 0.2s',
                '&:hover': {
                  color: '#a78bfa',
                  borderColor: '#a78bfa',
                  bgcolor: 'rgba(167,139,250,0.08)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/andywu8"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#64748b',
                border: '1px solid #1e1e2a',
                borderRadius: '10px',
                p: 1.25,
                transition: 'all 0.2s',
                '&:hover': {
                  color: '#a78bfa',
                  borderColor: '#a78bfa',
                  bgcolor: 'rgba(167,139,250,0.08)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Photo */}
        <Box sx={{ flexShrink: 0 }}>
          <Box sx={{
            width: { xs: 180, md: 260 },
            height: { xs: 180, md: 260 },
            borderRadius: '50%',
            background: GRADIENT,
            p: '3px',
            flexShrink: 0,
          }}>
            <Box
              component="img"
              src="/images/grad_headshot.jpeg"
              alt="Andy Wu"
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
                bgcolor: '#0a0a0f',
              }}
            />
          </Box>
        </Box>

      </Box>
    </Box>
  );
}
