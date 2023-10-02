import styled from "styled-components";

export const ForgottenPasswordContainer = styled.div`
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

export const ForgottenPasswordForm = styled.form`
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

export const ForgottenPasswordText = styled.h3`
  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Headline 3 - Bold */
  font-family: Lexend;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
`;

export const EmailDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--100, 8px);
  align-self: stretch;
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

export const EmailInputDiv = styled.div`
  display: flex;
  padding: var(--200, 16px) var(--150, 12px);
  align-items: center;
  gap: var(--100, 8px);
  align-self: stretch;
  border-radius: var(--150, 12px);
  border: 1px solid var(--border-input, #D7D7E5);
  background: var(--background-default, #FFF);
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 35px;
  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;
  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;

  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.p`
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