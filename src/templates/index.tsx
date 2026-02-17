import { Content } from '../components/ContentPages';
import { Footer } from '../components/Footer';
import { Navigator } from '../components/Navigator';
import * as S from './styles';

interface IMainTemplate {
    children: React.ReactNode;
}

export const MainTemplate = ({ children }: IMainTemplate) => {
    return <S.Wrapper>
        <Navigator />
        <Content>
            {children}
        </Content>
        <Footer />
    </S.Wrapper>
}