import styled from "styled-components";
import { CssUnit } from "../../assets/utils/utils";

interface NeutralSquareButtonProps {
  size?: 'large' | 'small';
  fill?: 'none';
  customSize?: `${number}${CssUnit}`;
  isIconRightVisible?: boolean;
  isIconLeftVisible?: boolean;
  isDarkMode?: boolean;
}


export const NeutralSquareButton = styled.button<NeutralSquareButtonProps>`
  display: inline-flex;
  padding: 11px 15px;
  justify-content: center;
  align-items: center;
  gap: var(--100, 8px);
  border-radius: var(--150, 12px);
  border: 2px solid var(--border-default, #EFEFFF);
  background: var(--background-default, #FFF);

  color: var(--text-default, #0B090D);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Bold/Paragrath 1 - Bold */
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  letter-spacing: 0.2px;

  &:hover:not(:disabled) {
    color: var(--text-bold, #FFF);
    background: var(--gradient-02, linear-gradient(135deg, #FF0097 0%, #00B5FF 100%));
  }

  &:disabled {
    opacity: 0.3;
  }

  ${(props) => props.size === 'small' && `
  padding: var(--100, 8px) var(--150, 12px);
  `}

  ${(props) => props.size === 'large' && `
  padding: var(--200, 16px) var(--400, 32px);
  `}

  ${(props) => props.customSize && `
  width: ${props.customSize};
  `}
`;