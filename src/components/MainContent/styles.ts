import { styled } from "@mui/material/styles";

export const WrapperContent = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: '3rem',
    width: 'auto',
    height: 'auto',
})

export const MainTitle = styled('div')({
    display: 'flex',
    color: 'var(--text-primary)',
    fontWeight: '800',
    fontSize: '2.4rem',
    textAlign: 'justify',
    boxShadow: 'var(--border-color) 0px 4px;',
    paddingBottom: '1.2rem',
})

export const BodyContent = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1.5rem',
    gap: '3rem',
    '@media (max-width: 600px)': {
        flexDirection: 'column', // Muda para coluna em telas menores que 600px
    },
})

export const MainImage = styled('img')({
    width: '10%',
})

export const MainContent = styled('p')({
    display: 'flex',
    flexDirection: 'column',
    color: 'var(--text-secondary)',
    fontSize: '1.6rem',
    textAlign: 'justify',
    width: '90%',
    gap: '1rem'
})