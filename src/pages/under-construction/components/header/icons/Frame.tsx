import styled from "styled-components";

const SvgWrapper = styled.div`
  width: 16px;
  height: 16px;
`;

function Frame() {
  return (
    <SvgWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
        <path d="M1.28516 8H15.2852H1.28516ZM1.28516 12H15.2852H1.28516ZM1.28516 4H15.2852H1.28516Z" fill="white"/>
        <path d="M1.28516 8H15.2852M1.28516 12H15.2852M1.28516 4H15.2852" stroke="white" strokeWidth="1.5"/>
      </svg>
    </SvgWrapper>
 )
}

export default Frame;