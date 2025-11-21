import React from "react";
import PageHeader from "../../components/pageHeader";
import Image from "next/image";
import CVCards from "../../components/ui/coreValueCard";
import FooterPics from "../../components/footerPics";
import Carousel from "../../components/carousel";
import { ArrowRight } from "lucide-react";
import { Instagram } from "lucide-react";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { BsArrowUpRightCircle } from "react-icons/bs";
import EmployeeCard from "../../components/employeeCard";

const coreValues = [
  { img: "/svg/compassion.svg", text: "Compassion" },
  { img: "/svg/community2.svg", text: "Community" },
  { img: "/svg/integrity.svg", text: "Integrity" },
  { img: "/svg/empowerment.svg", text: "Empowerment" },
  { img: "/svg/hope.svg", text: "Hope" },
];
const employeesInfo = [
  {
    img: "img/carousel/director.JPG",
    name: "Cecilia Otoo",
    position: "director",
    details:
      "Providing direction and leadership to advance the foundation’s humanitarian goals.",
    socials: [
      { Icon: FaFacebookF, link: "#" },
      { Icon: FaXTwitter, link: "#" },
      { Icon: Instagram, link: "#" },
    ],
  },
  {
    img: "img/carousel/ceo.jpg",
    name: "Nathaniel Whitaker",
    position: "ceo",
    details:
      "Committed to advancing the foundation’s mission with purpose and integrity.",
    socials: [
      { Icon: FaFacebookF, link: "#" },
      { Icon: FaXTwitter, link: "#" },
      { Icon: Instagram, link: "#" },
    ],
  },
  {
    img: "img/carousel/pm.jpg",
    name: "Patrick Doodo",
    position: "Project Manager",
    details:
      "Coordinating initiatives that bring hope, growth, and transformation to communities.",
    socials: [
      { Icon: FaFacebookF, link: "#" },
      { Icon: FaXTwitter, link: "#" },
      { Icon: Instagram, link: "#" },
    ],
  },
  {
    img: "img/carousel/admin.jpg",
    name: "Selina Gueli",
    position: "admin",
    details:
      "The backbone of the foundation’s activities, keeping every process organized and efficient.",
    socials: [
      { Icon: FaFacebookF, link: "#" },
      { Icon: FaXTwitter, link: "#" },
      { Icon: Instagram, link: "#" },
    ],
  },
  {
    img: "img/carousel/manager.jpg",
    name: "Esther Dosoo",
    position: "Manager",
    details:
      "Ensuring effective management of the foundation’s people, programs, and priorities.",
    socials: [
      { Icon: FaFacebookF, link: "#" },
      { Icon: FaXTwitter, link: "#" },
      { Icon: Instagram, link: "#" },
    ],
  },
  {
    img: "img/carousel/accountsofficer.jpg",
    name: "Emmanuel Mensah",
    position: "accounts officer",
    details:
      "Ensuring transparency and accountability in the foundation’s financial operations.",
    socials: [
      { Icon: FaFacebookF, link: "#" },
      { Icon: FaXTwitter, link: "#" },
      { Icon: Instagram, link: "#" },
    ],
  },
  {
    img: "img/carousel/pr.JPG",
    name: "Teddy Cobbold",
    position: "Public Relations",
    details:
      "Working closely with communities to turn the foundation’s vision into action.",
    socials: [
      { Icon: FaFacebookF, link: "#" },
      { Icon: FaXTwitter, link: "#" },
      { Icon: Instagram, link: "#" },
    ],
  },
];

export default function About() {
  return (
    <div className="mt-[90px] min-h-screen bg-[#f7f7f7] overflow-x-hidden ">
      
    <section className="section-padding flex flex-col gap-4 md:gap-6 lg:gap-10">
        <PageHeader
          title="About Us"
          quote="Born from Compassion. Built on Hope."
        />
        {/* text with image */}
        <div className=" container-wide  ">
          <div className="lg:h-[640px] flex flex-col gap-8 lg:flex-row">
            <p className="text-[0A0A0A] gap-2 lg:gap-4  lg:place-content-center lg:flex-1 text-[12px] md:text-[16px] lg:text-[18px] flex flex-col ">
              <span>
                Ceenat Foundation is a Ghana-based non-profit organization
                dedicated to fighting poverty and improving child welfare.
              </span>
              <span>
                Our story began with a simple act of kindness — providing meals
                to children who had nothing to eat. That moment became a
                movement, inspiring us to extend our hands to families in need
                and entire communities struggling to survive.
              </span>
              <span>
                Today, Ceenat Foundation reaches hundreds of people through
                feeding drives, school support, and community empowerment
                programs.
              </span>
              <span>
                Together, we can turn the tide and create a world where hope is
                a reality for everyone.
              </span>
            </p>
            <div className="w-full md:flex-1  rounded-3xl overflow-hidden">
              <Image
                src="/img/about/aboutImage.png"
                width={1920}
                height={1080}
                alt="about image"
                className=" object-cover  w-full h-60 lg:max-w-[640px] lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* core values and mission */}
      <section className=" container-wide w-full flex flex-col lg:flex-row lg:justify-between gap-6 md:gap-10 ">
        {/* CV */}
        <div className="flex flex-col flex-1 gap-4 md:gap-5">
          <h3 className="text-primary-default self-center section-title  w-fit md:pl-2 font-bold ">
            Core Values
          </h3>
          <div className="grid grid-cols-2  md:gap-6 gap-3 ">
            {coreValues.map((coreValue) => (
              <CVCards
                key={coreValue.img}
                alt={coreValue.text}
                img={coreValue.img}
                text={coreValue.text}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-1 md:flex-row lg:flex-col lg:border-l border-gray-4 lg:px-6 gap-4 md:gap-6">
          {/* our mission */}
          <div className="flex-col flex md:w-full text-center lg:text-left gap-1 md:gap-3 lg:max-w-[400px]">
            <h3 className="text-gray-10 section-title lg:text-left font-bold">
              Our Mission
            </h3>
            <p className="text-[12px] md:text-[14px] text-[#4f4f4f]  ">
              To alleviate poverty and promote child welfare by providing food,
              education, healthcare, and empowerment to vulnerable families
              across Ghana.
            </p>
          </div>
          {/*  */}
          <div className=" w-px bg-gray-4"></div>
          {/* our vision */}
          <div className="flex-col md:w-full flex text-center lg:text-left gap-1 md:gap-3 lg:max-w-[400px]">
            <h3 className="text-gray-10 section-title lg:text-left font-bold">
              Our Vision
            </h3>
            <p className="text-[12px] md:text-[14px] text-[#4f4f4f] ">
              A Ghana where every child is fed, nurtured, and empowered to reach
              their full potential.
            </p>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="flex flex-col gap-10 container-wide section-padding">
        <ul className="space-y-1.5">
          <li className="section-title uppercase">Our Team</li>
          <li className="section-subtext">
            Dedicated minds driving our cause forward
          </li>
        </ul>

        <Carousel>
          {employeesInfo.map((info, index) => (
            <EmployeeCard
              key={index}
              img={info.img}
              name={info.name}
              position={info.position}
              details={info.details}
              socials={info.socials}
            />
          ))}
        </Carousel>
        <div className="w-full h-px bg-gray-3"/>
      </section>
    </div>
  );
}
