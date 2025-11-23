"use client"
import Button from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Carousel from "../components/carousel";
import EmployeeCard from "./../components/employeeCard";
import { Instagram } from "lucide-react";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import DonateModal from "../components/donateModal";

export default function Home() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const focusCards = [
    {
      title: "Feeding Programs",
      description:
        "Providing nutritious meals to hungry children and families.",
      icon: "/svg/foodBasket.svg",
    },
    {
      title: "Child Welfare",
      description: "Ensuring access to education, care, and emotional support.",
      icon: "/svg/children.svg",
    },
    {
      title: "Community Outreach",
      description: "Supporting struggling families with essentials and hope.",
      icon: "/svg/community.svg",
    },
    {
      title: "Empowerment",
      description: "Helping women and youth build skills for self-reliance.",
      icon: "/svg/fist.svg",
    },
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
  return (
    <main className="bg-[#f7f7f7]">
      {/* Hero */}
      <section className="bg-img-opacity-60 min-h-screen pt-20 w-full mx-auto px-5 sm:px-10 lg:px-12 flex flex-col justify-around herorow:justify-center items-center herorow:gap-24 xl:gap-10 herorow:pt-0 bg-cover">
        <p className="font-medium herorow:font-semibold xl:font-bold text-xl sm:text-[22px] md:text-[28px] lg:text-[32px] xl:text-[40px]  text-gray-11 text-center">
          Restoring Hope. Changing Lives.
        </p>
        <div className="flex flex-col herorow:flex-row herorow:items-center justify-around gap-10 herorow:gap-0 w-full">
          <div
            className="herorow:order-1 mx-auto herorow:mx-0 
    multiple-strips-mask 
    bg-cover bg-center 
     special:w-[320px]
    sm:w-[380px] herorow:w-[450px] xl:w-[500px]
      h-[355px] herorow:h-[400px] xl:h-[480px]
  "
            style={{ backgroundImage: "url('/img/home/hero.png')" }}
          ></div>
          <ul className="flex flex-col gap-8">
            <ul className="flex flex-col gap-1 herorow:max-w-[420px] lg:max-w-[450px]">
              <li className="text-xl sm:text-[22px] md:text-[28px]  lg:text-[36px] text-gray-11 font-bold">
                Lifting Lives with Love and Action
              </li>
              <li className="text-sm md:text-base lg:text-lg text-gray-8 font-medium max-w-[550px] md:max-w-[550px]">
                Empowering communities through compassion and hands-on support
                to create lasting change and uplift lives with love and action.
              </li>
            </ul>

            <Button
              text="Get Started"
              className="w-fit"
              icon={<ArrowRight className="w-5 h-5" />}
            />
          </ul>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-1">
        <div className="flex flex-col gap-8 lg:gap-12 container-wide section-padding">
          {/* Intro */}
          <ul className="text-center flex flex-col gap-5">
            <ul className="space-y-1">
              <li className="section-title uppercase">What we do</li>
              <li className="section-max-title">
                Making a Difference, <br /> One Life at a Time.
              </li>
            </ul>
            <li className="section-subtext">
              At Ceenat Foundation, we are driven by love and compassion to
              bring hope where it’s needed most. Through our feeding programs,
              community outreach, and child welfare initiatives, we’re
              transforming lives — one meal, one smile, one family at a time.
            </li>
          </ul>
          {/* Our Focus and Image */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-[60px] lg:gap-0">
            <div className="relative w-full max-w-[580px] max-h-[580px] lg:w-1/2 xl:max-w-[600px] xl:max-h-[600px] aspect-[4/5] rounded-[24px] overflow-hidden lg:order-1">
              <div className="absolute inset-0 bg-gray-10/50 z-10"></div>
              <Image
                src="/img/home/whatwedo.png"
                alt="hands on child face"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="space-y-6 w-full lg:w-fit">
              <p className="section-title capitalize ">our focus</p>
              <div className="flex flex-col gap-4 w-full">
                {focusCards.map((card, index) => (
                  <div
                    key={index}
                    className="w-full lg:max-w-[470px] flex items-center gap-4 lg:px-0 lg:py-4 px-5 530px:px-6 md:px-8 py-4 530px:py-5 md:py-8 lg:border-none lg:shadow-none border border-gray-2 shadow-sm rounded-[12px]"
                  >
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={45}
                      height={45}
                      className="w-10 md:w-12 h-10 md:h-12"
                    />
                    <ul className="space-y-1.5">
                      <li className="text-base md:text-[18px] font-semibold text-gray-11">
                        {card.title}
                      </li>
                      <li className="text-sm md:text-base font-medium text-gray-8">
                        {card.description}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Extra Info */}
          <p className="section-subtext">
            In many communities across Ghana, countless children go to bed
            hungry. Families struggle to find food, education, and support.{" "}
            <br /> We believe poverty should not steal a child’s future. Every
            act of kindness brings light into someone’s darkness — and together,
            we can build a Ghana where no one is left behind. <br /> Because
            every child deserves care, food, and a future.
          </p>
        </div>
      </section>

      {/* OurTeam */}
      <section className="flex flex-col gap-10 md:gap-16 xl:min-h-screen xl:justify-around container-wide section-padding">
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
      </section>

      {/* Stats */}
      <section className="container-wide section-padding">
        <div className="max-w-6xl mx-auto shadow-md border-t-5 border-primary-default bg-gray-1 px-5 herorow:p-8 py-6  rounded-[24px] flex flex-col herorow:flex-row gap-10">
          {/* stats and info */}
          <div className="herorow:w-1/2 flex flex-col gap-[30px] lg:gap-10">
            <ul className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-x-4 gap-y-3 sm:gap-y-4">
              {[
                { title: "1200+", desc: "Children Fed" },
                { title: "25+", desc: "Schools Supported" },
                { title: "5000+", desc: "People Reached" },
                { title: "10", desc: "Years of Service" },
              ].map((stat, index) => (
                <li
                  key={index}
                  className="bg-primary-default py-5 w-full text-green-1 rounded-[16px] text-center"
                >
                  <p className="text-[32px] font-bold">{stat.title}</p>
                  <p className="text-sm font-medium">{stat.desc}</p>
                </li>
              ))}
            </ul>
            <div>
              <p className="text-[20px] font-bold text-gray-11">
                Our Impact in Action
              </p>
              <p className="text-sm text-gray-8 mt-[18px]">
                Through compassion and community support, we're transforming
                lives across Ghana. Every donation brings hope to those who need
                it most.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
                <Button text="Donate Now" className="w-full sm:w-auto" onClick={() => setIsDonateModalOpen(true)} />
                <Link href="/programs" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto cursor-pointer group flex flex-col gap-2 font-medium text-primary-default">
                    <span className="flex-center gap-2 w-full">
                      Our Programs <BsArrowUpRightCircle className="w-5 h-5" />
                    </span>
                    {/* Underline Animation */}
                    <span className="h-[1.5px] xl:h-[2px] rounded-full w-full bg-primary-default origin-left scale-x-50 transition-transform duration-300 group-hover:scale-x-100" />
                  </button>
                </Link>
              </div>
            </div>
            <ul className="flex flex-wrap gap-3 530px:gap-5">
              {[
                {
                  icon: "/svg/tax.svg",
                  text: "Tax-deductible donations",
                },
                {
                  icon: "/svg/transparency.svg",
                  text: "100% transparency",
                },
                {
                  icon: "/svg/securePayment.svg",
                  text: "Secure payment processing",
                },
              ].map((item, index) => (
                <ul key={index} className="flex items-center gap-2">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <li className="text-gray-8 text-sm">{item.text}</li>
                </ul>
              ))}
            </ul>
          </div>
          {/* Image */}
          <div className="herorow:mt-16 herorow:w-1/2 mx-auto max-w-[500px] h-fit relative">
            <Image
              src="/img/footerPics/4.png"
              alt="children donation"
              width={400}
              height={400}
              className="w-full min-h-[268px] sm:min-h-[300px] md:min-h-[320px] herorow:min-h-[350px]  object-cover object-center rounded-[20px]"
            />
            <div className="absolute top-0 md:top-10 md:-right-7 right-0 flex items-center gap-3 bg-green-1 px-4 py-[15px] rounded-[20px] w-[185px]">
              <Image
                src="/svg/communityServed.svg"
                alt="people"
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
              />
              <ul>
                <li className="text-gray-11 font-semibold text-2xl">50+</li>
                <li className="text-gray-8 font-medium text-xs mt-0.5 capitalize">
                  Community Served
                </li>
              </ul>
            </div>
            <div className="absolute bottom-1 left-1 md:bottom-10 md:-left-7 flex items-center gap-3 bg-green-1 px-4 py-[15px] rounded-[20px] w-[185px]">
              <Image
                src="/svg/impactRate.svg"
                alt="people"
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
              />
              <ul>
                <li className="text-gray-11 font-semibold text-2xl">92%</li>
                <li className="text-gray-8 font-medium text-xs mt-0.5 capitalize">
                  Impact Rate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Make a Difference Today */}
      <section className="mb-10 container-wide section-padding">
        <div className="max-w-5xl mx-auto relative w-full rounded-[32px] overflow-hidden min-h-[420px]">
          <div className="absolute z-10 inset-0 bg-gray-10 opacity-75 z-20"></div>
          <Image
            src="/img/home/makeADifference.png"
            alt="plant in hands"
            fill
            className="object-cover object-center"
          />
          <ul className="absolute inset-0 z-20 flex flex-col justify-center items-center space-y-4 text-gray-1 text-center px-5">
            <li className="text-2xl md:text-[28px] xl:text-[32px] font-semibold">
              Make a Difference Today
            </li>
            <li className="text-[13px] md:text-sm xl:text-base sm:max-w-[450px] md:max-w-xl lg:max-w-3xl">
              In many communities across Ghana, countless children go to bed
              hungry. Families struggle to find food, education, and support.
            </li>
            <Button text="Contribute" onClick={() => setIsDonateModalOpen(true)} />
          </ul>
        </div>
      </section>
      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
      />
    </main>
  );
}
