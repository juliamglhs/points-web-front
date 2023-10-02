import { ArrowUp } from "@phosphor-icons/react";
import { ArrowUpButtonStyle } from "./ArrowUpButtonStyle";

const ArrowUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ArrowUpButtonStyle onClick={ scrollToTop }>
        <ArrowUp size={32} color="white" />
    </ArrowUpButtonStyle>
  );
};

export default ArrowUpButton;