import styled from "styled-components";
import { CssUnit } from "../../assets/utils/utils";

interface SquareButtonProps {
  size?: 'large' | 'small';
  fill?: 'none';
  customSize?: `${number}${CssUnit}`;
  text?: string;
}

export const SquareButton = styled.button<SquareButtonProps>`
  display: inline-flex;
  padding: var(--150, 12px) var(--200, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--100, 8px);
  border-radius: var(--150, 12px);
  background: var(--gradient-02, linear-gradient(135deg, #FF0097 0%, #00B5FF 100%));
  color: var(--text-bold, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Paragrath 2 - Bold */
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.17px;

  
  &:hover:not(:disabled) {
    box-shadow: 0px 0px 15px 0px rgba(128, 90, 203, 0.50);
  }

  &:disabled {
    opacity: 0.3;
  }

  ${(props) => props.size === 'small' && `
  height: 34px;
  padding: var(--100, 8px) var(--150, 12px);
  border-radius: var(--100, 8px);
  `}

  ${(props) => props.size === 'large' && `
  padding: var(--200, 16px) var(--400, 32px);
  gap: var(--100, 8px);
  `}

  ${(props) => props.fill === 'none' && `
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  `}

  ${(props) => props.customSize && `
    width: ${props.customSize};
  `}

  ${(props) => props.fill === 'none' && props.text && `
  
  `}
`;