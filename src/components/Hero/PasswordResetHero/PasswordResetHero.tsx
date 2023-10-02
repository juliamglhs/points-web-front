import { useNavigate } from 'react-router-dom';
import LockKeySvg from '../../../assets/icons/LockKeySvg';
import { SquareButton } from '../../../design-system/styles/SquareButton';
import { PasswordResetContainer, LoginRedirectDiv, OrText, SignInText, PasswordResetDiv, PasswordResetForm, PasswordResetText, RequiredPasswordDiv, PasswordText, RequiredText, PasswordInputDiv, PasswordInput, RepeatPasswordResetDiv, StyledLink, ResetPasswordInput } from "./PasswordResetHeroStyle";
import usePasswordInput from '../../../common/hooks/usePasswordInput';

function PasswordResetHero() {
  const navigate = useNavigate();
  const { password, setPassword, repeatPassword, setRepeatPassword, isButtonEnabled } = usePasswordInput();

const handleResetPasswordButton = () => {
    navigate('/user/login')
}

  return (
    <>
      <PasswordResetContainer>
        <PasswordResetForm>
          <PasswordResetText>
            Entrar na Points®
          </PasswordResetText>
          <PasswordResetDiv>
            <RequiredPasswordDiv>
              <PasswordText>
                Senha
              </PasswordText>
              <RequiredText>
                (Obrigatório)
              </RequiredText>
            </RequiredPasswordDiv>
            <PasswordInputDiv>
              <LockKeySvg />
              <PasswordInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </PasswordInputDiv>
          </PasswordResetDiv>
          <RepeatPasswordResetDiv>
            <RequiredPasswordDiv>
              <PasswordText>
                Repita a senha
              </PasswordText>
              <RequiredText>
                (Obrigatório)
              </RequiredText>
            </RequiredPasswordDiv>
            <PasswordInputDiv>
              <LockKeySvg />
              <ResetPasswordInput type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
            </PasswordInputDiv>
          </RepeatPasswordResetDiv>
          <SquareButton customSize='100%' onClick={ handleResetPasswordButton } disabled={ !isButtonEnabled }>
            Resetar senha
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
        </PasswordResetForm>
      </PasswordResetContainer>
    </>
  )
}

export default PasswordResetHero;