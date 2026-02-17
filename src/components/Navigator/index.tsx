import { ThemeToggle } from '../ThemeToggle'
import * as S from './styles'

export const Navigator = () => {
    return <S.Nav>
        <S.NavElements>
            <S.NavElement column='1 / 2' pos="left" size='small'>LOGO</S.NavElement>
            <S.NavElement column='2 / 3'>
                <S.MenuOption>Home</S.MenuOption>
                <S.MenuOption>Portfólio</S.MenuOption>
                <S.MenuOption>Sobre</S.MenuOption>
            </S.NavElement>
            <S.NavElement column='3 / 4' pos="center" size='small'>
                <ThemeToggle />
            </S.NavElement>
        </S.NavElements>
    </S.Nav>
}