import styled from "styled-components";
import { Link } from "react-router-dom";

import EnvelopEmailInput from "../../../assets/icons/EnvelopEmailInput";

export const LoginHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 1000px;
  background: url('/assets/BackgroundLoginWhiteMode.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 400px) {
    height: 713px;
    background: url('/assets/hero-bg-400px-login-user-pages.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const SignInDiv = styled.div`
  display: flex;
  align-items: center;
  max-width: 520px;
  flex-direction: column;
  justify-content: center;
  padding: var(--400, 32px) var(--500, 40px);
  gap: var(--300, 24px);
  border-radius: var(--150, 12px);
  border: 1px solid var(--border-default, #EFEFFF);
  background: var(--background-default, #FFF);

  @media (max-width: 400px) {
    width: 100%;
    max-width: 300px;
    padding: var(--250, 20px);
    gap: var(--250, 20px);
  }
`;

export const SignInText = styled.p`
  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Headline 3 - Bold */
  font-family: Lexend;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
`;

export const InputEmailDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--100, 8px);
  align-self: stretch; 

  @media (max-width: 400px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: var(--050, 8px);
  }
`;

export const RequiredEmailDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: var(--0, 0px);
`;

export const EmailText = styled.label`
  height: 18px;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;
  text-overflow: ellipsis;
  whitespace: nowrap;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
`;

export const RequiredText = styled.label`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--text-default, #0B090D);
  text-align: right;
  font-feature-settings: 'clig' off, 'liga' off;
  text-overflow: ellipsis;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
`;

export const EmailDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--200, 16px);
  align-self: stretch;
border-radius: var(--0, 0px);

@media (max-width: 400px) {
  flex-direction: column;
  justify-content: flex-start;
}
`;

export const EmailInputDiv = styled.div`
  display: flex;
  padding: var(--100, 16px) var(--075, 12px);
  align-items: center;
  gap: var(--100, 8px);
  align-self: stretch;
  border-radius: var(--150, 12px);
  border: 1px solid var(--border-input, #D7D7E5);
  background: var(--background-default, #FFF);

@media (max-width: 400px) {
  flex-direction: row;
  justify-content: flex-start;
}
`;

export const EnvelopIcon = styled(EnvelopEmailInput)`=
  margin-right: 5px;
`;

export const EmailInput = styled.input`
color: var(--text-default, #0B090D);
font-feature-settings: 'clig' off, 'liga' off;

/* Regular/Paragrath 2 - Regular */
font-family: Lexend;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.17px;
zopacity: 0.5;

&:focus {
  outline: none;
}
`;

export const EmailInputText = styled.p`
  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
`;

export const PasswordDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--100, 8px);
  align-self: stretch;
`;

export const PasswordInputDiv = styled.div`
  display: flex;
  padding: var(--100, 16px) var(--075, 12px);
  align-items: center;
  gap: var(--100, 8px);
  align-self: stretch;
  border-radius: var(--150, 12px);
  border: 1px solid var(--border-input, #D7D7E5);
  background: var(--background-default, #FFF);
`;

export const RequiredPasswordDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: var(--0, 0px);
`;

export const PasswordText = styled.p`
  height: 18px;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;
  text-overflow: ellipsis;
  whitespace: nowrap;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
`;

export const RequiredPasswordText = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--text-default, #0B090D);
  text-align: right;
  font-feature-settings: 'clig' off, 'liga' off;
  text-overflow: ellipsis;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
`;

export const PasswordInput = styled.input`
  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
  zopacity: 0.5;

  &:focus {
    outline: none;
  }
`;

export const ForgottenPasswordText = styled.p`
  margin-right: 10px;
  margin-left: auto;
  cursor: pointer;
  border-bottom: 1px dashed transparent;
  color: var(--primary-500-default, #FF0097);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 3 - Regular */
  font-family: Lexend;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const LockKeyDiv = styled.div`
  display: flex;
  gap: var(--100, 8px);
`;

export const ButtonEnter = styled.button`
  display: flex;
  padding: var(--150, 12px) var(--200, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--100, 8px);
  align-self: stretch;
  border-radius: var(--150, 12px);
  background: var(--gradient-02, linear-gradient(135deg, #FF0097 0%, #00B5FF 100%));
`;

export const ButtonEnterText = styled.p`
  color: var(--text-bold, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Paragrath 2 - Bold */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.17px;
`;

export const GoogleButton = styled.button`
  display: flex;
  padding: var(--150, 12px) var(--200, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--100, 8px);
  align-self: stretch;
  border-radius: var(--150, 12px);
  border: 2px solid var(--border-default, #EFEFFF);
  background: var(--background-default, #FFF);
`;

export const GoogleEnterButtonText = styled.p`
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Paragrath 2 - Bold */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.17px;
`;

export const SignUpDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const SignUpQuestion = styled.p`
  color: var(--text-muted, #827799);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 1 - Regular */
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.2px;
`;

export const SignUpText = styled.p`
  color: var(--primary-500-default, #FF0097);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 1 - Regular */
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.2px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;



