import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LightGlobalStyle from '../../GlobalStyle';
import ForgottenPasswordHero from "../../components/Hero/ForgottenPasswordHero/ForgottenPasswordHero";

function ForgottenPassword() {
  return (
    <>
      <LightGlobalStyle />
      <Header />
      <ForgottenPasswordHero />
      <Footer />
    </>
  )
}

export default ForgottenPassword;