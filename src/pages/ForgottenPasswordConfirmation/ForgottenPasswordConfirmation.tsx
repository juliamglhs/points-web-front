import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GlobalStyle from '../../GlobalStyle';
import ForgottenPasswordConfirmationHero from "../../components/Hero/ForgottenPasswordConfirmation/ForgottenPasswordConfirmationHero";

function ForgottenPasswordConfirmation() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ForgottenPasswordConfirmationHero />
      <Footer />
    </>
  )
}

export default ForgottenPasswordConfirmation;