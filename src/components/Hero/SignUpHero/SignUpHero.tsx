import { AccessDataDiv, AccessDataText, BirthDateInput, BirthDateInputDiv, BirthDateText, ButtonText, ConfirmPasswordInput, ConfirmPasswordInputDiv, ConfirmPasswordText, EmailInput, EmailInputDiv, EmailText, LoginDiv, LoginQuestionText, LoginText, NameBirthDiv, NameInput, NameInputDiv, NameText, PasswordInput, PasswordInputDiv, PasswordText, PersonalDataDiv, PersonalDataText, SignUpDiv, SignUpHeroContainer, StyledLink } from './SignUpHeroStyle';
import { SquareButton } from '../../../design-system/styles/SquareButton';
import useInputsHooks from '../../../common/hooks/UseInputsHooks';

function SignUpHero() {
    const { inputs, isButtonDisabled, handleButton, handleInputChange } = useInputsHooks();

    return (
        <>
            <SignUpHeroContainer>
                <SignUpDiv>
                    <PersonalDataDiv>
                        <PersonalDataText>
                            Dados Pessoais
                        </PersonalDataText>
                        <NameBirthDiv>
                            <NameInputDiv>
                                <NameText>
                                    Nome Completo
                                </NameText>
                                <NameInput placeholder='Digite seu nome' name="input1" type="text" value={inputs.input1} onChange={handleInputChange} />
                            </NameInputDiv>
                            <BirthDateInputDiv>
                                <BirthDateText>
                                    Data de Nascimento
                                </BirthDateText>
                                <BirthDateInput placeholder='Digite sua data de nascimento' name="input2" type="date" value={inputs.input2} onChange={handleInputChange} />
                            </BirthDateInputDiv>
                        </NameBirthDiv>
                    </PersonalDataDiv>
                    <AccessDataDiv>
                        <AccessDataText>
                            Dados de acesso
                        </AccessDataText>
                        <EmailInputDiv>
                            <EmailText>
                                E-mail
                            </EmailText>
                            <EmailInput placeholder='Digite seu e-mail' name="input3" type="text" value={inputs.input3} onChange={handleInputChange} />
                        </EmailInputDiv>
                            <PasswordInputDiv>
                                <PasswordText>
                                    Senha
                                </PasswordText>
                                <PasswordInput placeholder='Digite sua senha' name="input4" type="text" value={inputs.input4} onChange={handleInputChange} />
                            </PasswordInputDiv>
                            <ConfirmPasswordInputDiv>
                                <ConfirmPasswordText>
                                    Confirme sua Senha
                                </ConfirmPasswordText>
                                <ConfirmPasswordInput placeholder='Digite a mesma senha novamente' name="input5" type="text" value={inputs.input5} onChange={handleInputChange} />
                            </ConfirmPasswordInputDiv>
                    </AccessDataDiv>
                    <SquareButton customSize='100%' onClick={handleButton} disabled={isButtonDisabled}>
                        <ButtonText>
                            Cadastrar
                        </ButtonText>
                    </SquareButton>
                    <LoginDiv>
                        <LoginQuestionText>
                            Já possui uma conta? Faça
                        </LoginQuestionText>
                        <StyledLink to="/user/login">
                            <LoginText>
                                Login
                            </LoginText>
                        </StyledLink>
                    </LoginDiv>
                </SignUpDiv>
            </SignUpHeroContainer>
        </>
    )
}

export default SignUpHero;