import styled from "styled-components";

const SvgWrapper = styled.div`
  width: 16px;
  height: 16px;
`;

function LightFrame() {
    return (
    <SvgWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M1 8H15H1ZM1 12H15H1ZM1 4H15H1Z" fill="#0B090D"/>
        <path d="M1 8H15M1 12H15M1 4H15" stroke="#0B090D" stroke-width="1.5"/>
      </svg>
    </SvgWrapper>
    )
}

export default LightFrame;