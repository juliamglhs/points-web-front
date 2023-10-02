import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LightGlobalStyle from '../../GlobalStyle';
import PasswordResetHero from "../../components/Hero/PasswordResetHero/PasswordResetHero";

function PasswordReset() {
  return (
    <>
      <LightGlobalStyle />
      <Header />
      <PasswordResetHero />
      <Footer />
    </>
  )
}

export default PasswordReset;