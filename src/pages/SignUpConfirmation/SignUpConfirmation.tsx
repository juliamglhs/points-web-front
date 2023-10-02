import Header from "../../components/Header/Header";
import SignUpConfirmationHero from "../../components/Hero/SignUpConfirmationHero/SignUpConfirmationHero";
import Footer from "../../components/Footer/Footer";
import LightGlobalStyle from '../../GlobalStyle';

function SignUpConfirmation() {
  return (
    <>
      <LightGlobalStyle />
      <Header />
      <SignUpConfirmationHero />
      <Footer />
    </>
  )
}

export default SignUpConfirmation;