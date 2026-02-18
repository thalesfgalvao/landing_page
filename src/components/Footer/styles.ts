import { styled } from "@mui/material/styles";

export const footer = styled('footer')({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gridColumn: '1/4',
    gridRow: '3',
    backgroundColor: 'var(--surface-color)',
    color: 'var(--text-secondary)',
    fontWeight: '600',
    fontSize: '1.2rem',
})