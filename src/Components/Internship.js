import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

export default function Internship(props) {
  return (
    <Box sx={{
      width: '100%',
      bgcolor: '#13131a',
      border: '1px solid #1e1e2a',
      borderRadius: '16px',
      p: 3,
      display: 'flex',
      flexDirection: 'column',
      transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        borderColor: '#a78bfa',
        transform: 'translateY(-3px)',
        boxShadow: '0 8px 32px rgba(167,139,250,0.1)',
      },
    }}>

      {/* Logo */}
      <Box sx={{
        height: 60,
        mb: 2.5,
        display: 'flex',
        alignItems: 'center',
      }}>
        <Box sx={{
          bgcolor: '#ffffff',
          borderRadius: '8px',
          px: 1.5,
          py: 0.75,
          display: 'inline-flex',
          alignItems: 'center',
        }}>
          <Box
            component="img"
            src={props.img_src}
            alt={props.company}
            sx={{
              maxHeight: 36,
              maxWidth: 140,
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </Box>
      </Box>

      {/* Title + company + date */}
      <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: '#f1f5f9', lineHeight: 1.3, mb: 0.5 }}>
        {props.title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
        <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', color: '#a78bfa' }}>
          {props.company}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: '0.78rem', color: '#475569', mb: 2, fontWeight: 500 }}>
        {props.duration}
      </Typography>

      {/* Bullets */}
      {props.bullets && props.bullets.length > 0 && (
        <Box component="ul" sx={{ pl: 2, mt: 0, mb: 2.5, flex: 1 }}>
          {props.bullets.map((bullet, i) => (
            <Box component="li" key={i} sx={{
              color: '#94a3b8',
              fontSize: '0.845rem',
              lineHeight: 1.65,
              mb: 0.75,
              listStyleType: 'disc',
            }}>
              {bullet}
            </Box>
          ))}
        </Box>
      )}

      {/* Skills */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto' }}>
        {props.skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
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
  );
}
