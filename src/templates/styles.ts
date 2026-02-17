import { styled } from '@mui/material/styles';

export const Wrapper = styled('body')({
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    margin: '0',
    padding: '0',
    backgroundColor: 'var(--bg-color)',
    minHeight: '100vh',
    maxWidth: '100vw',
});
