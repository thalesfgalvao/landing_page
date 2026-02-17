import { styled } from "@mui/material/styles";

export const footer = styled('footer')({
    textAlign: 'center',
    justifyContent: 'center',
    gridColumn: '1/4',
    gridRow: '3',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--surface-color)',
    alignItems: 'center',
    color: 'var(--text-secondary)',
    fontWeight: '600',
    fontSize: '1.2rem',
})