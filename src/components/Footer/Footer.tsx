import LightModeLogo from "../../assets/icons/LightModeLogo";
import ArrowUpButton from "../../common/logic/ArrowUpButton";
import { FirstFooter,
    FooterContainer,
    FirstFooterTextDiv,
    LogoDiv,
    LogoDescription, 
    LinksDiv,
    LawsDiv,
    LegalText,
    CookiesText,
    PrivacyText,
    TermsText,
    UsefulLinksDiv,
    UsefulLinksText,
    LoginText,
    ReservationText,
    BlogsText,
    AboutUsText,
    FaqText,
    ContactText,
    PressText,
    SecondFooter,
    CopyDiv,
    CopyText, 
    ButtonDiv} from "./FooterStyle";

function Footer() {
    return (
        <>
        <FooterContainer>
            <FirstFooter>
                <FirstFooterTextDiv>
                        <LogoDiv>
                            <LightModeLogo />
                            <LogoDescription>
                            Como uma startup, aspiramos a revolucionar a maneira pela qual as pessoas organizam seus rolês!
                            </LogoDescription>
                        </LogoDiv>
                        <LinksDiv>
                            <LawsDiv>
                                <LegalText>
                                Jurídico
                                </LegalText>
                                <CookiesText>
                                Política de Cookies
                                </CookiesText>
                                <PrivacyText>
                                Política de Privacidade
                                </PrivacyText>
                                <TermsText>
                                Termos de Uso
                                </TermsText>
                            </LawsDiv>
                            <UsefulLinksDiv>
                                <UsefulLinksText>
                                    Links úteis
                                </UsefulLinksText>
                                <LoginText>
                                    Login
                                </LoginText>
                                <ReservationText>
                                    Minhas reservas
                                </ReservationText>
                                <BlogsText>
                                    Blogs
                                </BlogsText>
                                <AboutUsText>
                                    Sobre nós
                                </AboutUsText>
                                <FaqText>
                                    Perguntas frequentes
                                </FaqText>
                                <ContactText>
                                    Contato
                                </ContactText>
                                <PressText>
                                    Imprensa
                                </PressText>
                            </UsefulLinksDiv>
                        </LinksDiv>
                </FirstFooterTextDiv>
            </FirstFooter>
            <SecondFooter>
                <CopyDiv>
                    <CopyText>
                    Copyright © Points 2023 - Todos os Direitos Reservados
                    </CopyText>
                    <ButtonDiv>
                        <ArrowUpButton />
                    </ButtonDiv>
                </CopyDiv>
            </SecondFooter>
        </FooterContainer>
    </>
    )
    }

    export default Footer;