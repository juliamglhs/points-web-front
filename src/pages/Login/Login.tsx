import Header from "../../components/Header/Header";
import LoginHero from "../../components/Hero/LoginHero/LoginHero";
import Footer from "../../components/Footer/Footer";
import LightGlobalStyle from '../../GlobalStyle';

function Login() {
  return (
    <>
      <LightGlobalStyle />
      <Header />
      <LoginHero />
      <Footer />
    </>
  )
}

export default Login;