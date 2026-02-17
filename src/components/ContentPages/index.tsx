import { NotFoundPage } from '../../Pages/NotFound';
import * as S from './styles';

interface IContent {
    children: React.ReactNode
}

export const Content = ({ children }: IContent) => {
    return(
        <S.Wrapper>
            {children ? <NotFoundPage /> : children}
        </S.Wrapper>
    )
}