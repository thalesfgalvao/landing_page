import { Footer } from '../components/Footer';
import { Navigator } from '../components/Navigator';
import * as S from './styles';

interface IMainTemplate {
    children: React.ReactNode;
}

export const MainTemplate = ({ children }: IMainTemplate) => {
    return <S.Wrapper>
        <Navigator />
        {children}
        <Footer />
    </S.Wrapper>
}