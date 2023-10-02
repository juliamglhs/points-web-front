import { HeaderContainer,
RegButtonContainer,
RegisterText,
NavButtonStyled,
  } from "./HeaderStyle";
import LightModeLogo from "../../assets/icons/LightModeLogo";
import LightFrame from "../../assets/icons/LightFrame";

interface NavButtonProps {
  userImage?: string; // O '?' indica que a prop é opcional
}

function Header({ userImage }: NavButtonProps) {
  return (
    <>
      <HeaderContainer>
        <LightModeLogo />
        <RegButtonContainer>
          <RegisterText>
            Registre o seu estabelecimento
          </RegisterText>
          <NavButtonStyled hasImage={!!userImage}>
            <LightFrame />
            {userImage && <img className="user-image" alt="user" src={userImage} />}
          </NavButtonStyled>
        </RegButtonContainer>
      </HeaderContainer>
    </>
  )
}

export default Header;