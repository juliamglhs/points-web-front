import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: relative;
  flex-shrink: 0;
  border-radius: var(--0, 0px);
  background: url('/assets/Texture.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    // position: absolute;
    width: 1333px;
    height: 1333px;
    top: 30%;
    left: 10%;
    border-radius: var(--0, 1333px);
    transform: rotate(-60deg);
    background: var(--gradient-02, linear-gradient(135deg, #FF0097 0%, #00B5FF 100%));
    opacity: 0.2;
    filter: blur(250px);
    z-index: -1;
  }

  @media (min-width: 1045px) and (max-width: 1440px) {
    width: 100%;
  }
  
  @media (min-width: 721px) and (max-width: 1044px) {
    width: 100%;
  }
  
  @media (min-width: 401px) and (max-width: 720px) {
        width: 100%;
  }

  @media (max-width: 400px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  padding: var(--800, 64px) var(--300, 24px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--0, 0px);
  border-radius: var(--0, 0px);
  border-top: 1px solid var(--border-default, #312A3C);
  background: var(--opacity-neutral-100, rgba(71, 64, 83, 0.10));
  overflow: hidden;

  @media (max-width: 400px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TextDescription = styled.div`
  display: flex;
  width: 500px;
  padding: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 0px;

  @media (max-width: 400px) {
    width: 100%;
    overflow: hidden;
  }
`;

export const PointsDiv = styled.div`
  display: flex;
  width: 500px;
  padding: var(--0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--200, 16px);
`;

export const PointsTitle = styled.div`
  width: 234.536px;
  height: 64px;

  @media (max-width: 400px) {
    width: 190.56px;
    height: 52px;
  }
`;

export const PageDescription = styled.p`
  align-self: stretch;
  color: var(--text-default, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Headline 4 - Regular */
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 160% */
  letter-spacing: 0.15px;
  opacity: 0.7;

  @media (max-width: 400px) {
    font-size: 16px;
    line-height: 24px; /* 150% */
    letter-spacing: 0.2px;
  }
`;

export const TermsPoliciesDiv = styled.div`
  display: flex;
  padding: var(--0, 0px);
  align-items: center;
  gap: 8px;
  border-radius: var(--0, 0px);

`;

export const TermsOfUse = styled.p`
  color: var(--text-muted, #625873);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.15px;
  text-decoration-line: underline;
`;

export const Elipse = styled.div`
  width: 4px;
  height: 4px;
  background-color: #352E40;
`;

export const PrivacyPolicies = styled.p`
  color: var(--text-muted, #625873);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.15px;
  text-decoration-line: underline;
`;

export const MiniFooter = styled.div`
  display: flex;
  padding: var(--200, 16px) var(--300, 24px);
  justify-content: space-between;
  align-items: center;
  border-radius: var(--0, 0px);
  border-top: 1px solid var(--border-default, #312A3C);
  background: var(--opacity-neutral-200, rgba(71, 64, 83, 0.20));

  @media (min-width: 1045px) and (max-width: 1440px) {
  }
  
  @media (min-width: 721px) and (max-width: 1044px) {
  }
  
  @media (min-width: 401px) and (max-width: 720px) {
  }

  @media (max-width: 400px) {
    justify-content: space-between;
    align-items: center;
    border-radius: var(--0, 0px);
    border-top: 1px solid var(--border-default, #312A3C);
    background: var(--opacity-neutral-200, rgba(71, 64, 83, 0.20));
  }
`;

export const Copyright = styled.p`
  color: var(--text-default, #FFF);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;

  /* Regular/Paragrath 1 - Regular */
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.2px;
  opacity: 0.7;

  @media (min-width: 1045px) and (max-width: 1440px) {
  }
  
  @media (min-width: 721px) and (max-width: 1044px) {
  }
  
  @media (min-width: 401px) and (max-width: 720px) {
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  padding: var(--050, 4px);
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--050, 4px);
  background: var(--background-muted, #352E40);
`;

export const MobileText = styled.p`
  display: none;

  @media (max-width: 400px) {
    display: flex;
    color: var(--text-default, #FFF);
    text-align: start;
    font-feature-settings: 'clig' off, 'liga' off;
  
    /* Regular/Paragrath 1 - Regular */
    font-family: Lexend;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.2px;
    opacity: 0.7;
  }
`;