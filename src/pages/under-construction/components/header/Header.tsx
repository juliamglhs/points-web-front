import Logo from '../common/DarkModeLogo';
import NavigationButton from './components/NavigationButton';
import { HeaderContainer, Title, Description, StyledLink, RightDiv } from './HeaderStyle';

function Header() {
  return (
    <>
      <HeaderContainer>
        <Title>
          <Logo />
        </Title>
        <RightDiv>
          <StyledLink to="/company/login">
            <Description>Registre o seu estabelecimento</Description>
          </StyledLink>
          <NavigationButton />
        </RightDiv>
      </HeaderContainer>
    </>
  )
}

export default Header;