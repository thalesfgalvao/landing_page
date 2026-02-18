import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr 10fr 1fr',
    gridTemplateRows: '1fr 10fr 1fr',
    gap: '2rem',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'var(--bg-color)',
    minHeight: '100vh',
    maxWidth: '100vw',
});
