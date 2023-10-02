import Header from "../../components/Header/Header";
import SignUpHero from "../../components/Hero/SignUpHero/SignUpHero";
import Footer from "../../components/Footer/Footer";
import LightGlobalStyle from '../../GlobalStyle';

function SignUp() {
  return (
    <>
      <LightGlobalStyle />
      <Header />
      <SignUpHero />
      <Footer />
    </>
  )
}

export default SignUp;