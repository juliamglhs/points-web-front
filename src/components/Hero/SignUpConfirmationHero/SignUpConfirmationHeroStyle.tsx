import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpConfirmationContainer = styled.div`
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

export const CodeConfirmationContainer = styled.div`
  display: flex;
  width: 476px;
  padding: var(--400, 32px) var(--500, 40px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--300, 24px);
  border-radius: var(--150, 12px);
  border: 1px solid var(--border-default, #EFEFFF);
  background: var(--background-default, #FFF);

  @media (max-width: 400px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CodeConfirmationText = styled.h3`
  align-self: stretch;
  color: var(--text-default, #0B090D);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Headline 3 - Bold */
  font-family: Lexend;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
`;

export const CodeDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--150, 12px);
  box-sizing: border-box;

  @media (max-width: 400px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CodeInput = styled.input`
  width: 100%;
  height: 80px;
  padding: var(--200, 16px) var(--150, 12px);
  justify-content: center;
  align-items: center;
  gap: var(--100, 8px);
  flex: 1 0 0;
  border-radius: var(--150, 12px);
  border: 1px solid var(--border-input, #D7D7E5);
  background: var(--background-default, #FFF);
  color: var(--text-default, #0B090D);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Headline 1 - Bold */
  font-family: Lexend;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px; /* 138.462% */
  letter-spacing: 0.25px;

  @media (max-width: 400px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 40px;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: var(--0, 0px);

  @media (max-width: 400px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const GoBackButtonText = styled.span`
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Paragrath 2 - Bold */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.17px;
`;

export const CreateAccountButtonText = styled.span`
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

export const LoginRedirectDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const OrText = styled.p`
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

export const SignInText = styled.p`
  color: var(--primary-500-default, #FF0097);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 1 - Regular */
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
