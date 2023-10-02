import { RoundedButton } from '../../../../design-system/styles/RoundedButton';
import {
HeroContainer,
TextInputContainer,
TextContainer,
PageDescriptionText,
InputDescriptionText,
NewsletterContainer,
EmailInput } from './HeroStyle';
import useNewsletterForm from '../common/hooks/useNewsletterForm';

function Hero() {
    const { handleChange, isEnabled } = useNewsletterForm();

    return (
        <HeroContainer>
            <TextInputContainer>
                <TextContainer />
                    <PageDescriptionText>
                    Estamos construindo uma experiência Points® inesquecível
                    </PageDescriptionText>
                    <InputDescriptionText>
                    Cadastre seu e-mail abaixo e receba em tempo real todas as novidades Points®
                    </InputDescriptionText>
                <NewsletterContainer>
                    <EmailInput placeholder='Escreva seu email' onChange={ handleChange }/>
                    <RoundedButton disabled={ !isEnabled }>
                        Inscrever-se
                    </RoundedButton>
                </NewsletterContainer>
            </TextInputContainer>
        </HeroContainer>
    )
}

export default Hero;
