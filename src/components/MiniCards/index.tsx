import * as S from './styles'

interface IMiniCard {
    title: string;
    src: string;
    alt: string;
    children?: React.ReactNode;
    href?: string;
    buttonContent?: string;
}

export const MiniCard = ({ title, children, src, alt, buttonContent, href }: IMiniCard) => {
  return (
    <S.WrapperContent>
        <S.CardImage src={src} alt={alt} />

        <S.CardContainer>
            <S.CardTitle>
            <strong>Título:</strong> {title}
            <hr />
            </S.CardTitle>
            <S.CardContent>
            <strong>Descrição:</strong> {children}
            </S.CardContent>

        {buttonContent &&
            <S.MiniCardButtonWrapper>
                <S.MiniCardButton><S.Link href={href} target='_blank'>{buttonContent}</S.Link></S.MiniCardButton>
            </S.MiniCardButtonWrapper>
        }
        </S.CardContainer>
        
    </S.WrapperContent>
  );
};
