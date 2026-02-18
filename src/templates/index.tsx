import { PagesWrapper } from '../components/PagesWrapper';
import { Footer } from '../components/Footer';
import { Navigator } from '../components/Navigator';
import { NotFoundPage } from '../Pages/NotFound';
import * as S from './styles';

interface IMainTemplate {
    children: React.ReactNode;
}

export const MainTemplate = ({ children }: IMainTemplate) => {
    return <S.Wrapper>
        <Navigator />
        <PagesWrapper>
            {children ? children : <NotFoundPage />}
        </PagesWrapper>
        <Footer />
    </S.Wrapper>
}