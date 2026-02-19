import { styled } from "@mui/material/styles";

export const WrapperContent = styled('div')({
    display: 'grid',
    width: '100%',
    gridTemplateRows: '1fr ',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: 'var(--surface-color)',
    boxShadow: 'var(--border-color) 0px 2px 8px 0px;',
    transition: '0.2s',
    '&: hover': {
        transform: 'scale(1.01)',
        transition: '0.2s',
        cursor: 'pointer',
    }
});


export const CardImage = styled('img')({
    gridRow: '1/2',
    width: '100%',
    display: 'block',
    objectFit: 'contain', // ou contain
})

export const CardContainer = styled('div')({
    display: 'flex',
    gridRow: '2',
    flexDirection: 'column',
    gap: '1rem',
})

export const CardTitle = styled('p')({
    color: 'var(--text-primary)',
    fontSize: '1.6rem',
})

export const CardContent = styled('p')({
    color: 'var(--text-secondary)',
    fontSize: '1.2rem',
    textAlign: 'justify',
})

export const MiniCardButtonWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: '1rem',
})

export const MiniCardButton = styled('button')({
    backgroundColor: 'var(--surface-reverseColor)',
    color: 'var(--text-reversePrimary)',
    padding: '1rem',
    border: 'none',
    WebkitBorderRadius: '1.2rem',
    transition: '0.2s',

    '&:hover': {
        boxShadow: 'var(--border-color) 0px 2px 8px 0px;',
        filter: 'brightness(0.8)',
        transition: '0.2s',
    }
})

export const Link = styled('a')({
    textDecoration: 'none',
    color: 'var(--text-reversePrimary)',
})