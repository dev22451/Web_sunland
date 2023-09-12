import { RentingBanner } from "../../assets";
import {
  ContactForm,
  Footer,
  MiniBanner,
  RentingServicePageGrid,
} from "../../containers";

export const RentingService = () => {
  return (
    <>
      <MiniBanner background={RentingBanner} path="Renting Services" />
      <RentingServicePageGrid />
      <ContactForm />
      <Footer />
    </>
  );
};
