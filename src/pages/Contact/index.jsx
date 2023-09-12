import { ContactBanner } from "../../assets";
import {
  ContactDetailsSection,
  ContactForm,
  Footer,
  Map,
  MiniBanner,
} from "../../containers";

export const Contact = () => {
  return (
    <>
      <MiniBanner background={ContactBanner} path="Contact Us" />
      <ContactDetailsSection />
      <ContactForm />
      <Map />
      <Footer />
    </>
  );
};
