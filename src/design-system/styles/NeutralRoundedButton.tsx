import styled from "styled-components";
import { CssUnit } from "../../assets/utils/utils";

interface NeutralRoundedButtonProps {
  size?: 'large' | 'small';
  fill?: 'none';
  customSize?: `${number}${CssUnit}`;
}


export const NeutralRoundedButton = styled.button<NeutralRoundedButtonProps>`
  display: inline-flex;
  padding: var(--150, 12px) var(--200, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--100, 8px);
  border-radius: var(--1000, 80px);
  border: 2px solid var(--border-default, #EFEFFF);
  background: var(--background-default, #FFF);

  &:hover:not(:disabled) {
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