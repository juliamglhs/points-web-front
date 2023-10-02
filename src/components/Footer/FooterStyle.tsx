import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 400px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FirstFooter = styled.div`
  display: flex;
  padding: var(--600, 48px) var(--400, 32px);
  justify-content: center;
  align-items: center;
  align-self: stretch;

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FirstFooterTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1280px;
  padding: var(--0, 0px) var(--150, 12px);
  justify-content: space-between;
  flex: 1 0 0;

  @media (max-width: 765px) {
  width: 100%;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  }

  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SmallerDiv = styled.div`
  display: flex;
  max-width: 1280px;
  padding: var(--0, 0px) var(--150, 12px);
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  border-radius: var(--0, 0px);

  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const LogoDescription = styled.p`
  align-self: stretch;
  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;
  width: 100%;
  word-wrap: break-word;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;

  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LinksDiv = styled.div`
  display: flex;
  width: 341px;
  padding: var(--0, 0px);
  align-items: flex-start;
  gap: 16px;
  border-radius: var(--0, 0px);

  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LawsDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--075, 6px);
  flex: 1 0 0;
  border-radius: var(--0, 0px);

  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LegalText = styled.p`
  align-self: stretch;
  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Paragrath 2 - Bold */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.17px;

  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CookiesText = styled.p`
  align-self: stretch;
  color: var(--text-muted, #827799);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;

  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const PrivacyText = styled.p`
  align-self: stretch;
  color: var(--text-muted, #827799);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;

  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TermsText = styled.p`
  align-self: stretch;
  color: var(--text-muted, #827799);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;

  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;


export const UsefulLinksDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--075, 6px);
  flex: 1 0 0;
  border-radius: var(--0, 0px);

  @media (max-width: 400px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const UsefulLinksText = styled.p`
  align-self: stretch;
  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Paragrath 2 - Bold */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.17px;
`;

export const LoginText = styled.p`
  align-self: stretch;
  color: var(--text-muted, #827799);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
`;

export const ReservationText = styled.p`
  align-self: stretch;
  color: var(--text-muted, #827799);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
`;

export const BlogsText = styled.p`
  align-self: stretch;
  color: var(--text-muted, #827799);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
`;

export const AboutUsText = styled.p`
  align-self: stretch;
  color: var(--text-muted, #827799);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
`;

export const FaqText = styled.p`
  align-self: stretch;
  color: var(--text-muted, #827799);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
`;

export const ContactText = styled.p`
  align-self: stretch;
  color: var(--text-muted, #827799);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
`;

export const PressText = styled.p`
  align-self: stretch;
  color: var(--text-muted, #827799);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 2 - Regular */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.17px;
`;

export const SecondFooter = styled.div`
  display: flex;
  padding: var(--150, 12px);
  justify-content: center;
  align-items: center;
  gap: var(--200, 16px);
  align-self: stretch;
  border-radius: var(--0, 0px);
  border-top: 1px solid var(--border-alpha, rgba(31, 27, 38, 0.20));

  @media (max-width: 765px) {
    gap: 30px;
    justify-content: center;
    align-items: flex-start;
    }

  @media (max-width: 400px) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const CopyDiv = styled.div`
  display: flex;
  max-width: 1280px;
  padding: var(--0, 0px) var(--150, 12px);
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  border-radius: var(--0, 0px);

  @media (max-width: 400px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const CopyText = styled.p`
  flex: 1 0 0;
  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 1 - Regular */
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.2px;
  opacity: 0.7;

`;

export const ButtonDiv = styled.button`
  display: flex;
  padding: var(--050, 4px);
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--050, 4px);
  background: var(--background-muted, #D7D7E5);
`;