import * as S from './styles';

interface IMainTemplate {
    children: React.ReactNode;
}

export const MainTemplate = ({ children }: IMainTemplate) => {
    return <S.Wrapper>
        {children}
    </S.Wrapper>
}