import styled from "styled-components";

interface NavButtonProps {
  hasImage: boolean;
  userImage?: string;
}

export const HeaderContainer = styled.header`
  display: flex;
  // width: 100%;
  // max-width: 1920px;
  // height: 60px;
  padding: var(--150, 12px) var(--300, 24px);
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-alpha, rgba(31, 27, 38, 0.20));
  background: var(--background-neutral, #EFEFFF);
`;

export const RegButtonContainer = styled.div`
  display: flex;
  padding: var(--0, 0px);
  align-items: center;
  gap: 16px;
  border-radius: var(--0, 0px);
`;

export const RegisterText = styled.p`
  color: var(--text-default, #0B090D);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Paragrath 4 - Bold */
  font-family: Lexend;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px; /* 140% */
  letter-spacing: 0.17px;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const NavButtonStyled = styled.button<NavButtonProps>`
  display: flex;
  padding: ${props => props.hasImage ? 'var(--075, 6px) var(--075, 6px) var(--075, 6px) var(--150, 12px);' : '10px'};
  justify-content: ${props => props.hasImage ? 'space-between' : 'center'};
  align-items: center;
  gap: var(--150, 12px);
  border-radius: var(--1000, 80px);
  border: 1px solid var(--border-alpha, rgba(239, 239, 255, 0.20));
  background: var(--background-neutral, #EFEFFF);
`;
