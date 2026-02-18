import * as S from './styles'
import { MainContent } from "../../components/MainContent"

export const Home = () => {
    return(
        <MainContent src="#" alt="Thales_Profile_Picture" mainTitle="Thales Fernando Marques">
            <div>
                <p>E aí! Como você está? Espero que bem!</p>
                <p>Meu nome é <strong>Thales</strong> e tenho 25 anos! Estou na área da Tecnologia da 
                Informação há 10 anos atuando como front-end na maior parte do tempo.
                Atuo principalmente com Typescript utilizando React e Javascript em Node para melhor interação entre back e front, visto
                a semelhança enre as duas linguagens.
                </p>
                <br />
                <p>Gosto bastante de jogar no computador e comida japonesa. Tenho uma gata com o nome de Rhaenyra (sim, a mesma da série)
                mas gosto de chamar de Nyra. Deu pra ver que eu gosto de sagas no estilo fantasia, né? Harry Potter é a minha saga
                favorita. Gosto bastante de ler e por último mas não menos importante eu sou palmeirense.
                </p>
            </div>
            <S.SocialMediaWrapper>
                <a href="https://www.instagram.com/thalesf.galvao/" ><S.SocialInstagramIcon /></a>
                <a href="https://www.linkedin.com/in/thales-marques/"><S.SocialLinkedInIcon /></a>
                <a href="https://github.com/thalesfgalvao"><S.SocialGitHubIcon /></a>
            </S.SocialMediaWrapper>
        </MainContent>
    )
}