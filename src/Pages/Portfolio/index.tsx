import * as S from './styles'
import { MiniCard } from '../../components/MiniCards'
import img from '../../assets/chronos-pomodoro.png'

export const Portfolio = () => {
    return(
        <S.Wrapper>
            <MiniCard alt='Chronos_Pomodor' src={img} title='Chronos Pomodoro' href='https://github.com/thalesfgalvao/chronos-pomodoro' buttonContent='Acessar repositório'>
                Chronos Pomodoro é um sistema de Pomodoro para Web focado em produtividade e simplicidade.
                Ele aplica os princípios clássicos da técnica Pomodoro, permitindo configurar tempos, ciclos e pausas
                de forma flexível.
                O projeto é desenvolvido em React, com gerenciamento de estado local, sem uso de API, conta com modo light/dark
                e mantém um histórico dos ciclos realizados, ajudando o usuário a acompanhar sua evolução ao longo do tempo. 
            </MiniCard>
            <MiniCard alt='Pokedex_Api' src='#' title='Consulta Pokedex' href='https://github.com/thalesfgalvao/Pokedex' buttonContent='Acessar repositório'>
                Projeto desenvolvido em React com foco em aprendizado e prática de fundamentos da biblioteca.
                A aplicação realiza o consumo da API pública PokéAPI, permitindo buscar Pokémon pelo nome ou
                número do registro, retornando informações como tipo, imagem, e outros dados básicos do Pokémon pesquisado.
                O projeto foi utilizado como primeiro contato com requisições HTTP, estado, componentização e renderização dinâmica de dados no React.
                
            </MiniCard>
        </S.Wrapper>
    )
}