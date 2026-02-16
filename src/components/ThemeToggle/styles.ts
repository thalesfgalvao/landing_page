import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const Button = styled(IconButton)(() => ({
  color: 'var(--text-primary)',
  fontSize: '24px',

  '&:hover': {
    backgroundColor: 'rgba(1, 197, 250, 0.1)',
  },
}));
