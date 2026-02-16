import { DarkMode, LightMode } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';
import * as S from './styles'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <S.Button onClick={toggleTheme}>
      {theme === 'light' ? <DarkMode /> : <LightMode />}
    </S.Button>
  );
};
