import { styled } from '@mui/material/styles';

interface INavElement {
  pos?: 'left' | 'center' | 'right';
  size?: 'small' | 'medium' | 'huge';
}

export const Nav = styled('nav')({
    display: 'flex',
});

export const NavElements = styled('div')({
    display: 'flex',
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-between',
    gap: '2rem',
});

export const NavElement = styled('div')<INavElement>(
  ({ pos, size }: INavElement) => ({
    display: 'flex',
    flexDirection: 'row',
    padding: '0.5rem',
    gap: '5rem',
    width: '100vw',
    backgroundColor: 'var(--surface-color)',
    boxShadow: 'var(--border-color) 0px 4px;',

    justifyContent:
      pos === 'left'
        ? 'flex-start'
        : pos === 'right'
        ? 'flex-end'
        : 'center',

    maxWidth:
    size === 'small'
        ? '5vw'
        : size === 'medium'
        ? '20vw'
        : size === 'huge'
        ? '50vw'
        : ""
  })
);

export const MenuOption = styled('span')({
    position: 'relative',
    cursor: 'pointer',
    transition: '0.5s',
    padding: '1rem',
    WebkitBorderRadius: '1rem',
    color: 'var(--text-primary)',    
    boxShadow: 'var() 0px 4px;',
    fontWeight: '600',

    '&:hover': {
        boxShadow: 'var(--primary-hover) 0px 10px 10px -10px',
        cursor: 'pointer',
        transition: '0.5s',
        fontSize: 'scale(1.1)',
        color: 'var(--text-primary)',
    }
})