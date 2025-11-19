import ContactUsDetails from "../../components/ContactUsPage/contactUsDetails/ContactUsDetails";
import Map from '../../components/ContactUsPage/Map/Map';
import HeroSection from "../../components/shared/HeroSection/HeroSection";
import ContactForm from "./ContactForm";

function ContactUsPage() {
  return (
    <>
      <HeroSection
        title="Contact US"
        bgImage="/about/about.webp"
        height="h-[60vh] md:h-[80vh]"
      />
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 mt-10 text-black px-6 md:px-16 items-start">
        <div className="w-full flex justify-center md:justify-end">
          <div className="w-full md:w-10/12">
            <ContactForm />
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-start">
          <div className="w-full md:w-10/12">
            <ContactUsDetails />
          </div>
        </div>
      </div>

      <Map />
    </>
  );
}

export default ContactUsPage;
