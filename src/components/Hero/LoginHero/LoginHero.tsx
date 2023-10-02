import GoogleIcon from '../../../assets/icons/GoogleIcon';
import LockKeySvg from '../../../assets/icons/LockKeySvg';
import useLoginLogic from "../../../common/hooks/UseLoginLogic";
import { NeutralSquareButton } from "../../../design-system/styles/NeutralSquareButton";
import { SquareButton } from "../../../design-system/styles/SquareButton";
import {
  ButtonEnterText,
  EmailDiv,
  EmailInput,
  EmailInputDiv,
  EmailText,
  EnvelopIcon,
  ForgottenPasswordText,
  GoogleEnterButtonText,
  LoginHeroContainer,
  PasswordDiv,
  PasswordInput,
  PasswordInputDiv,
  PasswordText,
  RequiredEmailDiv,
  RequiredPasswordDiv,
  RequiredPasswordText,
  RequiredText,
  SignInText,
  SignInDiv,
  SignUpDiv,
  SignUpQuestion,
  SignUpText,
  StyledLink,
} from "./LoginHeroStyle";

function LoginHero() {
  const { email, setEmail, password, setPassword, isButtonDisabled } = useLoginLogic();

  return (
    <>
      <LoginHeroContainer>
        <SignInDiv>
          <SignInText>
            Entrar na Points®
          </SignInText>
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
                <EnvelopIcon />
                <EmailInput placeholder="Digite seu e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </EmailInputDiv>
          </EmailDiv>
          <PasswordDiv>
            <RequiredPasswordDiv>
              <PasswordText>
                Senha
              </PasswordText>
              <RequiredPasswordText>
                (Obrigatório)
              </RequiredPasswordText>
            </RequiredPasswordDiv>
            <PasswordInputDiv>
              <LockKeySvg />
              <PasswordInput placeholder="Digite sua senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <StyledLink to="/user/forgotten-password">
                <ForgottenPasswordText>
                  Esqueceu a Senha
                </ForgottenPasswordText>
              </StyledLink>
            </PasswordInputDiv>
          </PasswordDiv>
          <SquareButton customSize="100%" disabled={isButtonDisabled}>
            <ButtonEnterText>
              Entrar
            </ButtonEnterText>
          </SquareButton>
          <NeutralSquareButton customSize="100%" disabled={isButtonDisabled}>
            <GoogleIcon />
            <GoogleEnterButtonText>
              Entrar com o google
            </GoogleEnterButtonText>
          </NeutralSquareButton>
          <SignUpDiv>
            <SignUpQuestion>
              Não possui uma conta?
            </SignUpQuestion>
            <StyledLink to="/user/signup">
              <SignUpText>
                Cadastre-se
              </SignUpText>
            </StyledLink>
          </SignUpDiv>
        </SignInDiv>
      </LoginHeroContainer>
    </>
  )
}

export default LoginHero;