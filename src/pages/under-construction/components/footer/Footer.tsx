import Elipse from './icons/Elipse';
import Logo from '../common/DarkModeLogo';
import ArrowUpButton from './components/ArrowUpButton';
import {
  FooterContainer,
  FooterDiv,
  TextDescription,
  PointsDiv,
  PointsTitle,
  PageDescription,
  TermsPoliciesDiv,
  TermsOfUse,
  PrivacyPolicies,
  MiniFooter,
  Copyright,
  ButtonDiv,
  MobileText,
} from './FooterStyle';

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterDiv>
          <TextDescription>
            <PointsDiv>
              <PointsTitle>
                <Logo />
              </PointsTitle>
            </PointsDiv>
            <PageDescription>
              Como uma startup, aspiramos a revolucionar a maneira pela qual as pessoas organizam seus rolês!
            </PageDescription>
            <TermsPoliciesDiv>
              <TermsOfUse>Termos de uso</TermsOfUse>
              <Elipse />
              <PrivacyPolicies>Política de privacidade</PrivacyPolicies>
            </TermsPoliciesDiv>
          </TextDescription>
        </FooterDiv>
        <MiniFooter>
          <Copyright>Copyright © Points 2023 - Todos os Direitos Reservados</Copyright>
          <MobileText>© Points 2023 - Todos os Direitos Reservados</MobileText>
          <ButtonDiv>
            <ArrowUpButton />
          </ButtonDiv>
        </MiniFooter>
      </FooterContainer>
    </>
  );
}

export default Footer;
