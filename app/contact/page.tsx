import ContactCard from "../../components/contactCard";
import PageHeader from "../../components/pageHeader";
import ContactForm from "../../components/contactForm";

const contactCards = [
  {
    icon: <img className="w-[24px] h-[24px]" src="/svg/location.svg" />,
    title: "Visit Us",
    btnText: "View on Google Maps",
    link: "",
  },
  {
    icon: <img className="w-[24px] h-[24px]" src="/svg/phone.svg" />,
    title: "Call Us",
    btnText: "+233 50 000 0000",
    link: "",
  },
  {
    icon: <img className="w-[24px] h-[24px]" src="/svg/mail.svg" />,
    title: "Make Enquiries",
    btnText: "info@ceenatfoundation.org",
    link: "mailto:",
  },
];

export default function page() {
  return (
    <div className="mt-[90px] min-h-screen bg-[#f7f7f7] max w-screen overflow-x-hidden ">
      <div className=" container-wide section-padding  flex flex-col ">
        <PageHeader title="Contact Us" />
        <div className="">
          <PageHeader quote="Ceenat Foundation  — Feeding dreams, touching hearts, building a better Ghana. " />
        </div>
        <div className="flex flex-col gap-4 section-padding  md:flex md:flex-row">
          <div className="flex flex-col gap-4">
            {contactCards.map((card, index) => (
              <ContactCard
                key={index}
                title={card.title}
                btnText={card.btnText}
                icon={card.icon}
                link={card.link}
              />
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
