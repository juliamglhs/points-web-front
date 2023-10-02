import styled from "styled-components";

interface NavButtonProps {
  hasImage: boolean;
  userImage?: string;
}

export const NavButtonStyled = styled.button<NavButtonProps>`
  display: flex;
  padding: ${props => props.hasImage ? 'var(--075, 6px) var(--075, 6px) var(--075, 6px) var(--150, 12px);' : '10px'};
  justify-content: ${props => props.hasImage ? 'space-between' : 'center'};
  align-items: center;
  gap: var(--150, 12px);
  border-radius: var(--1000, 80px);
  border: 1px solid var(--border-alpha, rgba(239, 239, 255, 0.20));
`;