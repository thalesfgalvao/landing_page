import { styled } from '@mui/material/styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';

interface INavElement {
  pos?: 'left' | 'center' | 'right';
  column?: string ;
  row?: string ;
}

export const Icon = styled(Logo)({
  width: '64px',
  height: '64px',
  '& path': {
    fill: 'var(--text-primary)',
  },
});

export const Nav = styled('nav')({
    display: 'flex',
    flexDirection: 'row',
    gridColumn: '1 / 4',
    gridRow: '1 / 2',
});

export const NavElements = styled('div')<INavElement> ({
    display: 'grid',
    gridTemplateColumns: '1fr 10fr 1fr',
    width: '100%',
    gap: '2rem',
    backgroundColor: 'var(--surface-color)',
    boxShadow: 'var(--border-color) 0px 4px;',
  });

export const NavElement = styled('div')<INavElement>(
  ({ pos, column, row }: INavElement) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    padding: '0.5rem',
    gap: '5rem',
    gridColumn: column,
    gridRow: row,

    justifyContent:
      pos === 'left'
        ? 'flex-start'
        : pos === 'right'
        ? 'flex-end'
        : 'center'
  })
);

export const MenuOption = styled('span')({
    position: 'relative',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    padding: '1rem',
    WebkitBorderRadius: '1rem',
    color: 'var(--text-primary)',    
    boxShadow: 'var() 0px 4px;',
    fontWeight: '600',

    '&:hover': {
        backgroundColor: 'var(--primary-hover)',
        cursor: 'pointer',
        transition: '1s',
        fontSize: 'scale(1.1)',
        boxShadow: 'none',
        color: 'var(--text-primary)',
    }
})