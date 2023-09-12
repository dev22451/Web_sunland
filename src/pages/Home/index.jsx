import {
  AboutDescriptionSection,
  ContactForm,
  Footer,
  HomeBanner,
  MaintenanceServiceSection,
  RentingServicesSection,
} from "../../containers";

export const Home = () => {
  return (
    <>
      <HomeBanner />
      <AboutDescriptionSection />
      <RentingServicesSection />
      <MaintenanceServiceSection />
      <ContactForm />
      <Footer />
    </>
  );
};
