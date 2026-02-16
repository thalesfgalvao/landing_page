import { IconButton } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      sx={{ color: 'var(--text-color)' }}
    >
      {theme === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};
