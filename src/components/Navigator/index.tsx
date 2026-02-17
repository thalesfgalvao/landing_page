import { ThemeToggle } from '../ThemeToggle'
import * as S from './styles'

export const Navigator = () => {
    return <S.Nav>
        <S.NavElements>
            <S.NavElement pos="left" size='small'>LOGO</S.NavElement>
            <S.NavElement>
                <S.MenuOption>Home</S.MenuOption>
                <S.MenuOption>Portfólio</S.MenuOption>
                <S.MenuOption>Sobre</S.MenuOption>
            </S.NavElement>
            <S.NavElement pos="center" size='small'>
                <ThemeToggle />
            </S.NavElement>
        </S.NavElements>
    </S.Nav>
}