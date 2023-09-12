import { AboutBanner } from "../../assets";
import {
  AboutDescriptionSection,
  AboutQualitiesSection,
  ContactForm,
  Footer,
  MiniBanner,
} from "../../containers";

export const About = () => {
  return (
    <>
      <MiniBanner background={AboutBanner} path="About us" />
      <AboutDescriptionSection />
      <AboutQualitiesSection />
      <ContactForm />
      <Footer />
    </>
  );
};
