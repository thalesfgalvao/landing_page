import * as S from './styles'

interface IMainContent {
    children: React.ReactNode;
    mainTitle: string;
    src: string;
    alt: string;
}

export const MainContent = ({ children, mainTitle, src, alt }: IMainContent) => {
    return (
        <S.WrapperContent>
            <S.MainTitle>{mainTitle}</S.MainTitle>
            <S.BodyContent>
                <S.MainImage src={src} alt={alt} />
                <S.MainContent>{children}</S.MainContent>
            </S.BodyContent>
        </S.WrapperContent>
    )
}