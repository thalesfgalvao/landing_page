import * as S from './styles';

interface IContent {
    children: React.ReactNode;
    mainTitle?: string;
    src?: string;
    alt?: string;
}

export const PagesWrapper = ({ children }: IContent) => {
    return(
        <S.Wrapper>
            {children}
        </S.Wrapper>
    )
}