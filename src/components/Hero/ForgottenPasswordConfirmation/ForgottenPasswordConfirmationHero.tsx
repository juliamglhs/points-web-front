import { ButtonsDiv, CodeConfirmationContainer, CodeConfirmationText, CodeDiv, CodeInput, CreateAccountButtonText, GoBackButtonText, LoginRedirectDiv, OrText, SignInText, SignUpConfirmationContainer, StyledLink } from "./ForgottenPasswordConfirmationHeroStyle";
import { SquareButton } from "../../../design-system/styles/SquareButton";
import { NeutralSquareButton } from "../../../design-system/styles/NeutralSquareButton";
import { useNavigate } from "react-router-dom";
import useDisableButton from "../../../common/hooks/UseDisableButton";

function ForgottenPasswordConfirmationHero() {
    const navigate = useNavigate();
    const { inputs, handleInputChange, isButtonDisabled } = useDisableButton();

    const handleGoBackButton = () => {
        navigate(-1);
    }

    const handleCreateAccountButton = () => {
        navigate('/user/password-reset')
    }

    const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, nextInputName: string) => {
        const inputElement = e.target as HTMLInputElement;
    
        if (inputElement.value.length === inputElement.maxLength) {
            const nextInput = document.getElementsByName(nextInputName)[0];
            if (nextInput) {
                nextInput.focus();
            }
        }
    }

    return (
        <>
            <SignUpConfirmationContainer>
                <CodeConfirmationContainer>
                    <CodeConfirmationText>
                        Informe o código enviado ao seu e-mail
                    </CodeConfirmationText>
                    <CodeDiv>
                        <CodeInput name="input1" type="text" value={inputs.input1} onChange={handleInputChange} maxLength={1} onKeyUp={(e) => handleInputKeyPress(e, "input2")} />
                        <CodeInput name="input2" type="text" value={inputs.input2} onChange={handleInputChange} maxLength={1} onKeyUp={(e) => handleInputKeyPress(e, "input3")} />
                        <CodeInput name="input3" type="text" value={inputs.input3} onChange={handleInputChange} maxLength={1} onKeyUp={(e) => handleInputKeyPress(e, "input4")} />
                        <CodeInput name="input4" type="text" value={inputs.input4} onChange={handleInputChange} maxLength={1} onKeyUp={(e) => handleInputKeyPress(e, "input5")} />
                        <CodeInput name="input5" type="text" value={inputs.input5} onChange={handleInputChange} maxLength={1} />
                    </CodeDiv>
                    <ButtonsDiv>
                        <NeutralSquareButton customSize="100%" onClick={handleGoBackButton} disabled={!isButtonDisabled}>
                            <GoBackButtonText>
                                Voltar
                            </GoBackButtonText>
                        </NeutralSquareButton>
                        <SquareButton customSize="100%" onClick={handleCreateAccountButton} disabled={isButtonDisabled}>
                            <CreateAccountButtonText>
                                Resetar senha
                            </CreateAccountButtonText>
                        </SquareButton>
                    </ButtonsDiv>
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
                </CodeConfirmationContainer>
            </SignUpConfirmationContainer>
        </>
    )
}

export default ForgottenPasswordConfirmationHero;