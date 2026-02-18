import { styled } from "@mui/material/styles";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const SocialMediaWrapper = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '2rem',
})

export const SocialInstagramIcon = styled(InstagramIcon)({
    fontSize: '40px',
    textDecoration: 'none',
    color: 'var(--text-primary)'
})

export const SocialLinkedInIcon = styled(LinkedInIcon)({
    fontSize: '40px',
    textDecoration: 'none',
    color: 'var(--text-primary)'
})

export const SocialGitHubIcon = styled(GitHubIcon)({
    fontSize: '40px',
    textDecoration: 'none',
    color: 'var(--text-primary)'
})