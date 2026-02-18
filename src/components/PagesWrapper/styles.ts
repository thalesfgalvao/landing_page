import { styled } from "@mui/material/styles";

export const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: '3rem',
    backgroundColor: 'var(--surface-color)',
    boxShadow: 'var(--border-color) 0px 2px 8px 0px;',
    WebkitBorderRadius: '0.5rem',
    gridColumn: '2/3',
    gridRow: '2/3',
    justifyContent: 'center'
})

