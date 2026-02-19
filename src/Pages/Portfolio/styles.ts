import { styled } from "@mui/material/styles";

export const Wrapper = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gridColumn: '1/3',
    gridRow: '1/3',
    gap: '3rem',
    width: '100%',
});