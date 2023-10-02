import Frame from '../icons/Frame';
import { NavButtonStyled } from './NavigationButtonStyle';

interface NavButtonProps {
  userImage?: string; // O '?' indica que a prop é opcional
}

const NavButton: React.FC<NavButtonProps> = ({ userImage }) => {
  return (
    <>
    <NavButtonStyled hasImage={!!userImage}>
      <Frame />
      {userImage && <img className="user-image" alt="user" src={userImage} />}
    </NavButtonStyled>
    </>
  );
};

export default NavButton;