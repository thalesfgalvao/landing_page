import { styled } from "@mui/material/styles";

export const footer = styled('footer')({
    width: '100%',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--surface-color)',
    alignItems: 'center',
    color: 'var(--text-primary)',
    fontWeight: '600',
    fontSize: '1.2rem',
    position: 'fixed',
    bottom: 0,
    left: 0,
})