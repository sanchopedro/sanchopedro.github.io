import Header from "@/components/Header/Header";
import TitleSubtitle from "@/components/TitleSubtitle/TitleSubtitle";
import FormContact from "@/components/FormContact/FormContact";
import ContactInfo from "@/components/ContactInfo/ContactInfo";

function contact() {
  return (
    <div className="container max-w-5xl mx-auto px-4 text-center mt-10">
      <Header />

      <TitleSubtitle
        title="Get in touch"
        subtitle="I am always open to discussing product design work or partnerships."
      />

      <div className="lg:grid lg:grid-cols-5 lg:gap-2 space-y-8 lg:space-y-2">
        <div className="shrink col-span-2 text-start ">
          <ContactInfo />
        </div>
        <div className="col-span-3 w-full">
          <p className="text-gray-200 text-sm md:text-base text-center lg:text-justify ">
            If you have any suggestion, project or even you want to say Hello..
            Please fill out the form below and I will reply you shortly.
          </p>
          <FormContact />
        </div>
      </div>
    </div>
  );
}

export default contact;
