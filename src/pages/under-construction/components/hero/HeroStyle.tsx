import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 800px;
  background: url('/assets/background-1920.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  @media (min-width: 1045px) and (max-width: 1440px) {
    width: 100%;
    background: url('/assets/background-1440.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  @media (min-width: 721px) and (max-width: 1044px) {
    width: 100%;
    background: url('/assets/background-1044.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  @media (min-width: 401px) and (max-width: 720px) {
    width: 100%;
    background: url('/assets/background-720.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: 400px) {
    width: 100%;
    background: url('/assets/background-400.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;


export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
  justify-content: center;
  max-width: 1220px;
  gap: var(--400, 32px);
  border-radius: var(--0, 0px);

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    align-items: flex-start;
    gap: var(--300, 24px);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--400, 32px);

  @media (min-width: 1045px) and (max-width: 1440px) {
    display: flex;
    padding: var(--0, 0px);
    flex-direction: column;
    align-items: center;
    gap: 16px;
    align-self: stretch;
  }
  
  @media (min-width: 721px) and (max-width: 1044px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: var(--0, 0px);
    flex-direction: column;
    align-items: center;
    gap: 16px;
    align-self: stretch;
  }
  
  @media (min-width: 401px) and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: var(--0, 0px);
    flex-direction: column;
    align-items: center;
    gap: var(--400, 32px);
    border-radius: var(--0, 0px);
  }

  @media (max-width: 400px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: var(--0, 0px);
    flex-direction: column;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    border-radius: var(--0, 0px);
  }
`;

export const PageDescriptionText = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-self: stretch;
  color: var(--text-default, #FFF);
  text-align: center;
  font-family: Lexend;
  font-size: 68px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%; /* 88.4px */

  @media (min-width: 1045px) and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: var(--text-default, #FFF);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Lexend;
    font-size: 52px;
    font-style: normal;
    font-weight: 800;
    line-height: 72px; /* 138.462% */
    letter-spacing: 0.25px;
  }
  
  @media (min-width: 721px) and (max-width: 1044px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: var(--text-default, #FFF);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Lexend;
    font-size: 52px;
    font-style: normal;
    font-weight: 800;
    line-height: 72px; /* 138.462% */
    letter-spacing: 0.25px;
  }
  
  @media (min-width: 401px) and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: var(--text-default, #FFF);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Lexend;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 44px; /* 137.5% */
    letter-spacing: 0.25px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: var(--text-default, #FFF);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Lexend;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 44px; /* 137.5% */
    letter-spacing: 0.25px;
    overflow: hidden;
  }
`;

export const InputDescriptionText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-default, #FFF);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  
  /* Regular/Headline 4 - Regular */
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 160% */
  letter-spacing: 0.15px;
  opacity: 0.7;

  @media (min-width: 1045px) and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-default, #FFF);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    
    /* Regular/Headline 4 - Regular */
    font-family: Lexend;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 160% */
    letter-spacing: 0.15px;
  }
  
  @media (min-width: 721px) and (max-width: 1044px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-default, #FFF);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    /* Regular/Headline 4 - Regular */
    font-family: Lexend;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 160% */
    letter-spacing: 0.15px;
  }
  
  @media (min-width: 401px) and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    color: var(--text-default, #FFF);
    font-feature-settings: 'clig' off, 'liga' off;
    overflow: hidden;

    /* Regular/Paragrath 1 - Regular */
    font-family: Lexend;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.2px;
  }
`;

export const NewsletterContainer = styled.form`
  display: flex;
  max-width: 428px;
  padding: 12px 12px 12px 20px; // Simplificado
  justify-content: space-between;
  align-items: center;
  border-radius: 40px; // Simplificado
  border: 1px solid var(--border-default, #312A3C);
  background: var(--background-default, #0B090D);
  box-sizing: border-box;

  @media (min-width: 1045px) and (max-width: 1440px) {
    display: flex;
    width: 428px;
    padding: var(--150, 12px) var(--150, 12px) var(--150, 12px) var(--250, 20px);
    justify-content: space-between;
    align-items: center;
    border-radius: var(--500, 40px);
    border: 1px solid var(--border-default, #312A3C);
    background: var(--background-default, #0B090D);
  }
  
  @media (min-width: 721px) and (max-width: 1044px) {
    display: flex;
    width: 428px;
    padding: var(--150, 12px) var(--150, 12px) var(--150, 12px) var(--250, 20px);
    justify-content: space-between;
    align-items: center;
    border-radius: var(--500, 40px);
    border: 1px solid var(--border-default, #312A3C);
    background: var(--background-default, #0B090D);
  }
  
  @media (min-width: 401px) and (max-width: 720px) {
    display: flex;
    width: 346px;
    padding: var(--150, 12px) var(--150, 12px) var(--150, 12px) var(--250, 20px);
    justify-content: space-between;
    align-items: center;
    border-radius: var(--500, 40px);
    border: 1px solid var(--border-default, #312A3C);
    background: var(--background-default, #0B090D);
  }

  @media (max-width: 400px) {
    display: flex;
    width: 346px;
    padding: var(--100, 8px) var(--100, 8px) var(--100, 8px) var(--200, 16px);
    justify-content: space-between;
    align-items: center;
    border-radius: var(--500, 40px);
    border: 1px solid var(--border-default, #312A3C);
    background: var(--background-default, #0B090D);
  }
`;

export const EmailInput = styled.input`
  flex-grow: 1; // Ocupa todo o espaço disponível
  color: var(--text-default, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;
  padding: 10px; // Adicionado padding
  box-sizing: border-box; // Garante que o padding não afete a largura total

  /* Regular/Paragrath 1 - Regular */
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.2px;
  opacity: 0.5;

  &:focus {
    outline: none;
    border: none;
  }
  
  @media (min-width: 721px) and (max-width: 1044px) {
    font-family: Lexend;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.2px;
    opacity: 0.5;
  }
  
  @media (min-width: 401px) and (max-width: 720px) {
    font-family: Lexend;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.17px;
    opacity: 0.5;
  }

  @media (max-width: 400px) {
    /* Regular/Paragrath 2 - Regular */
    font-family: Lexend;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.17px;
  }
`;