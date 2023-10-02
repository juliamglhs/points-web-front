import { useNavigate } from "react-router-dom";
import EnvelopEmailInput from "../../../assets/icons/EnvelopEmailInput";
import { SquareButton } from "../../../design-system/styles/SquareButton";
import { EmailDiv, EmailInputDiv, EmailInput, EmailText, ForgottenPasswordContainer, ForgottenPasswordForm, ForgottenPasswordText, RequiredEmailDiv, RequiredText, SendButton, LoginRedirectDiv, OrText, SignInText } from "./ForgottenPasswordHeroStyle";
import { StyledLink } from "../LoginHero/LoginHeroStyle";
import useEmailForm from "../../../common/hooks/UseEmailForm";

function ForgottenPasswordHero() {
    const navigate = useNavigate();
    const { email, isValid, handleChange } = useEmailForm();

    const handleConfirmButton = () => {
    navigate('/user/forgotten-password/confirmation');
    }

    return (
    <>
        <ForgottenPasswordContainer>
        <ForgottenPasswordForm>
            <ForgottenPasswordText>
            Esqueceu a Senha?
            </ForgottenPasswordText>
            <EmailDiv>
            <RequiredEmailDiv>
                <EmailText>
                E-mail
                </EmailText>
                <RequiredText>
                (Obrigatório)
                </RequiredText>
            </RequiredEmailDiv>
            <EmailInputDiv>
                <EnvelopEmailInput />
                <EmailInput placeholder="Digite seu e-mail" type="email" value={ email } onChange={handleChange} />
            </EmailInputDiv>
            </EmailDiv>
            <SquareButton customSize="100%" onClick={handleConfirmButton} disabled={ !isValid }>
            <SendButton>
                Enviar código de confirmação
            </SendButton>
            </SquareButton>
            <LoginRedirectDiv>
            <OrText>
                ou
            </OrText>
            <StyledLink to="/user/login">
                <SignInText>
                Faça o Login
                </SignInText>
            </StyledLink>
            </LoginRedirectDiv>
        </ForgottenPasswordForm>
        </ForgottenPasswordContainer>
    </>
    )
}

export default ForgottenPasswordHero;
