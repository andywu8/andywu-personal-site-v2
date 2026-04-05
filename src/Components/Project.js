import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Typography, Chip, IconButton } from '@mui/material';

export default function Project(props) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      alignItems: { sm: 'center' },
      gap: 3,
      bgcolor: '#13131a',
      border: '1px solid #1e1e2a',
      borderRadius: '16px',
      p: 3,
      width: '100%',
      transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        borderColor: '#a78bfa',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 32px rgba(167,139,250,0.08)',
      },
    }}>
      {props.img_src && (
        <Box
          component="img"
          src={props.img_src}
          alt={props.project_name}
          sx={{
            width: { xs: '100%', sm: 200 },
            height: 120,
            objectFit: 'cover',
            borderRadius: '10px',
            flexShrink: 0,
            border: '1px solid #1e1e2a',
          }}
        />
      )}
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: '#f1f5f9' }}>
            {props.project_name}
          </Typography>
          {props.github_link && (
            <IconButton
              component="a"
              href={props.github_link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#64748b',
                border: '1px solid #1e1e2a',
                borderRadius: '8px',
                p: 0.75,
                '&:hover': { color: '#a78bfa', borderColor: '#a78bfa' },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
        <Typography sx={{ fontSize: '0.78rem', color: '#475569', mb: 1.5, fontWeight: 500 }}>
          {props.date}
        </Typography>
        <Typography sx={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.65, mb: 2 }}>
          {props.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {props.key_tech.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                bgcolor: 'rgba(167,139,250,0.08)',
                color: '#a78bfa',
                border: '1px solid rgba(167,139,250,0.2)',
                fontSize: '0.72rem',
                fontWeight: 500,
                height: 24,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
