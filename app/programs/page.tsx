import PageHeader from "../../components/pageHeader";
import Image from "next/image";
import ProgramText from "../../components/programText";

const programsInfo = [
  {
    title: "Feeding the Future",
    description:
      "Our Feeding Program brings warm, nutritious meals to children and families in need across Ghana through school and community feeding programs, holiday food drives, and emergency meal outreaches.",
  },
  {
    title: "Community Outreach",
    description:
      "We visit communities to share love, hope, and relief supplies including clothing, food, and healthcare support.",
  },
  {
    title: "Child Welfare & Education",
    description:
      "We support underprivileged children by donating school supplies, sponsoring school fees, and providing mentorship and counseling.",
  },
  {
    title: "Empowerment Initiatives",
    description:
      "We empower women and youth with practical skills and financial opportunities to lift their families out of poverty.",
  },
];
const imageUrls = [
  { src: "/img/footerPics/5.png", alt: "program image 1" },
  { src: "/img/footerPics/4.png", alt: "program image 2" },
  { src: "/img/programs/1.png", alt: "program image 3" },
  { src: "/img/programs/2.png", alt: "program image 4" },
  { src: "/img/programs/3.png", alt: "program image 5" },
  { src: "/img/programs/4.png", alt: "program image 5" },
];

export default function page() {
  return (
    <div className="mt-[90px] flex flex-col">
      <div className="section-padding min-h-screen">
        <PageHeader title="Our Programs" />
        {/* text with image */}
        <section className=" container-wide w-full section-padding">
          <div className=" flex flex-col gap-8 md:flex-row">
            <div className="flex flex-col gap-5 md:gap-10 md:flex-1">
              {programsInfo.map((program, index) => (
                <ProgramText
                  key={index}
                  title={program.title}
                  description={program.description}
                />
              ))}
            </div>
            <div className="w-full md:flex-1  rounded-3xl overflow-hidden">
              <Image
                src="/img/programs/ourPrograms.png"
                width={1920}
                height={1080}
                alt="about image"
                className=" object-cover  w-full h-[320px] lg:max-w-[640px] md:h-full"
              />
            </div>
          </div>
        </section>
        <section className=" flex-col flex gap-2 px-2 w-full pt-10 md:pt-12 lg:pt-16 pb-2 md:pb-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 flex-1">
            {imageUrls.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                width={1920}
                height={1080}
                alt={image.alt}
                className=" object-cover flex-1  h-[240px] md:h-[365px]  "
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
