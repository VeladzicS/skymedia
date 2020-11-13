import React from "react";
import {
  aboutObjOne,
  PrivacyTitle,
  PrivacyText,
  PrivacyContainer,
  PrivacyLi,
} from "./Data";
import { SubHeading } from "../../components";
import { Container } from "../../globalStyles";

const Privacy = () => {
  return (
    <>
      <SubHeading {...aboutObjOne} />
      <Container>
        <PrivacyContainer>
          <div class="col-md-12">
            <PrivacyTitle>Privacy Policy of Sky Media</PrivacyTitle>
            <PrivacyText>
              Sky Media operates the skymediadev.com website, which provides the
              SERVICE.
            </PrivacyText>
            <PrivacyText>
              This page is used to inform website visitors regarding our
              policies with the collection, use, and disclosure of Personal
              Information if anyone decided to use our Service, the Sky Media
              Dev website.
            </PrivacyText>
            <PrivacyText>
              If you choose to use our Service, then you agree to the collection
              and use of information in relation with this policy. The Personal
              Information that we collect are used for providing and improving
              the Service. We will not use or share your information with anyone
              except as described in this Privacy Policy.
            </PrivacyText>
            <PrivacyText>
              The terms used in this Privacy Policy have the same meanings as in
              our Terms and Conditions, which is accessible at skymediadev.com,
              unless otherwise defined in this Privacy Policy.
            </PrivacyText>
            <PrivacyTitle>Information Collection and Use</PrivacyTitle>
            <PrivacyText>
              For a better experience while using our Service, we may require
              you to provide us with certain personally identifiable
              information, including but not limited to your name, phone number,
              and postal address. The information that we collect will be used
              to contact or identify you.
            </PrivacyText>
            <PrivacyTitle>Log Data</PrivacyTitle>
            <PrivacyText>
              We want to inform you that whenever you visit our Service, we
              collect information that your browser sends to us that is called
              Log Data. This Log Data may include information such as your
              computer’s Internet Protocol ("IP") address, browser version,
              pages of our Service that you visit, the time and date of your
              visit, the time spent on those pages, and other statistics.
            </PrivacyText>
            <PrivacyTitle>Cookies</PrivacyTitle>
            <PrivacyText>
              Cookies are files with small amount of data that is commonly used
              an anonymous unique identifier. These are sent to your browser
              from the website that you visit and are stored on your computer’s
              hard drive.
            </PrivacyText>
            <PrivacyText>
              Our website uses these "cookies" to collection information and to
              improve our Service. You have the option to either accept or
              refuse these cookies, and know when a cookie is being sent to your
              computer. If you choose to refuse our cookies, you may not be able
              to use some portions of our Service.
            </PrivacyText>
            <PrivacyText>
              For more general information on cookies, please read
              <a href="https://www.cookieconsent.com/what-are-cookies/">
                "What Are Cookies"
              </a>
              .
            </PrivacyText>
            <PrivacyTitle>Service Providers</PrivacyTitle>
            <PrivacyText>
              We may employ third-party companies and individuals due to the
              following reasons:
            </PrivacyText>
            <ul>
              <PrivacyLi>To facilitate our Service;</PrivacyLi>
              <PrivacyLi>To provide the Service on our behalf;</PrivacyLi>
              <PrivacyLi>To perform Service-related services; or</PrivacyLi>
              <PrivacyLi>
                To assist us in analyzing how our Service is used.
              </PrivacyLi>
            </ul>
            <PrivacyText>
              We want to inform our Service users that these third parties have
              access to your Personal Information. The reason is to perform the
              tasks assigned to them on our behalf. However, they are obligated
              not to disclose or use the information for any other purpose.
            </PrivacyText>
            <PrivacyTitle>Security</PrivacyTitle>
            <PrivacyText>
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </PrivacyText>
            <PrivacyTitle>Links to Other Sites</PrivacyTitle>
            <PrivacyText>
              Our Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Therefore, we
              strongly advise you to review the Privacy Policy of these
              websites. We have no control over, and assume no responsibility
              for the content, privacy policies, or practices of any third-party
              sites or services.
            </PrivacyText>
            <PrivacyText>Children's Privacy</PrivacyText>
            <PrivacyText>
              Our Services do not address anyone under the age of 13. We do not
              knowingly collect personal identifiable information from children
              under 13. In the case we discover that a child under 13 has
              provided us with personal information, we immediately delete this
              from our servers. If you are a parent or guardian and you are
              aware that your child has provided us with personal information,
              please contact us so that we will be able to do necessary actions.
            </PrivacyText>
            <PrivacyTitle>Changes to This Privacy Policy</PrivacyTitle>
            <PrivacyText>
              We may update our Privacy Policy from time to time. Thus, we
              advise you to review this page periodically for any changes. We
              will notify you of any changes by posting the new Privacy Policy
              on this page. These changes are effective immediately, after they
              are posted on this page.
            </PrivacyText>
            <PrivacyTitle>Contact Us</PrivacyTitle>
            <PrivacyText>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us.
            </PrivacyText>
          </div>
        </PrivacyContainer>
      </Container>
    </>
  );
};

export default Privacy;