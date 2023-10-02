import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpHeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 1000px;
  flex-shrink: 0;
  border-radius: var(--0, 0px);
  background: url('/assets/BackgroundLoginWhiteMode.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 400px) {
    background: url('/assets/login-lightmode-background-400.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const SignUpDiv = styled.div`
display: flex;
align-items: center;
width: 520px;
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

export const SignUpText = styled.h3`
  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Headline 3 - Bold */
  font-family: Lexend;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */

  @media (max-width: 400px) {
    justify-content: center;
    align-items: center;
  }
`;

export const PersonalDataDiv = styled.div`
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

export const PersonalDataText = styled.h4`
  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Headline 4 - Bold */
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 160% */
  letter-spacing: 0.15px;

`;

export const NameBirthDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  align-items: flex-start;
  gap: var(--200, 16px);
  align-self: stretch;

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const NameInputDiv = styled.div`
  display: flex;
  width: 100%;
  padding: var(--0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--100, 8px);
  flex: 1 0 0;

@media (max-width: 400px) {
  flex-direction: column;
  justify-content: flex-start;
}
`;

export const NameText = styled.p`
  height: 18px;
  flex: 1 0 0;
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

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const NameInput = styled.input`
display: flex;
padding: var(--200, 16px) var(--150, 12px);
align-items: center;
gap: var(--050, 8px);
align-self: stretch;
border-radius: var(--150, 12px);
border: 1px solid var(--border-input, #D7D7E5);
background: var(--background-default, #FFF);

    /* Regular/Paragrath 2 - Regular */
font-family: Lexend;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.17px;
zopacity: 0.5;

@media (max-width: 400px) {
  justify-content: center;
  align-items: center;
}
`;

export const BirthDateInputDiv = styled.div`
  display: flex;
    width: 100%;
  padding: var(--0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--100, 8px);
  flex: 1 0 0;

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const BirthDateText = styled.p`
  height: 18px;
  flex: 1 0 0;
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

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const BirthDateInput = styled.input`
  display: flex;
  padding: var(--200, 16px) var(--150, 12px);
  align-items: center;
  gap: var(--050, 8px);
  align-self: stretch;
  border-radius: var(--150, 12px);
  border: 1px solid var(--border-input, #D7D7E5);
  background: var(--background-default, #FFF);

      /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
  zopacity: 0.5;
  
  @media (max-width: 400px) {
    justify-content: center;
    align-items: center;
  }
`;

export const AccessDataDiv = styled.div`
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

export const AccessDataText = styled.h4`
  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Headline 4 - Bold */
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 160% */
  letter-spacing: 0.15px;
`;

export const EmailInputDiv = styled.div`
  display: flex;
  width: 100%;
  padding: var(--0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--100, 8px);

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const EmailText = styled.p`
  height: 18px;
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

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const EmailInput = styled.input`
  display: flex;
  padding: var(--200, 16px) var(--150, 12px);
  justify-content: flex-start;
  gap: var(--100, 8px);
  align-self: stretch;
  border-radius: var(--150, 12px);
  border: 1px solid var(--border-input, #D7D7E5);
  background: var(--background-default, #FFF);

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
  zopacity: 0.5;

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const PassConfirmDiv = styled.div`
  display: flex;
  width: 100%;
  padding: var(--0, 0px);
  flex-direction: row;
  align-items: flex-start;
  gap: var(--200, 16px);
  align-self: stretch;

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const PasswordInputDiv = styled.div`
  display: flex;
  width: 100%;
  padding: var(--0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--100, 8px);
  flex: 1 0 0;

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const PasswordText = styled.p`
  height: 18px;
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

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const PasswordInput = styled.input`
  display: flex;
  padding: var(--200, 16px) var(--150, 12px);
  align-items: center;
  gap: var(--100, 8px);
  align-self: stretch;
  border-radius: var(--150, 12px);
  border: 1px solid var(--border-input, #D7D7E5);
  background: var(--background-default, #FFF);

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
  zopacity: 0.5;

  @media (max-width: 400px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ConfirmPasswordInputDiv = styled.div`
  display: flex;
  width: 100%;
  padding: var(--0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--100, 8px);
  flex: 1 0 0;

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const ConfirmPasswordText = styled.p`
  height: 18px;
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

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const ConfirmPasswordInput = styled.input`
  display: flex;
  padding: var(--200, 16px) var(--150, 12px);
  align-items: center;
  gap: var(--100, 8px);
  align-self: stretch;
  border-radius: var(--150, 12px);
  border: 1px solid var(--border-input, #D7D7E5);
  background: var(--background-default, #FFF);

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
  zopacity: 0.5;

  @media (max-width: 400px) {
    justify-content: center;
    align-items: center;
  }
`;

export const SignUpButton = styled.button`
  display: flex;
  padding: var(--150, 12px) var(--200, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--100, 8px);
  align-self: stretch;
  border-radius: var(--150, 12px);
  background: var(--gradient-02, linear-gradient(135deg, #FF0097 0%, #00B5FF 100%));
`;

export const ButtonText = styled.p`
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

export const LoginDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  @media (max-width: 400px) {
    justify-content: center;
    align-items: center;
  }
`;

export const LoginQuestionText = styled.p`
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

export const LoginText = styled.p`
  color: var(--primary-500-default, #FF0097);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-decoration-line: underline;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;