"use client";
import { useState } from "react";
import VolunteerCard from "./volunteerCard";
import DonateModal from "./donateModal";
import Image from "next/image";

export default function VolunteerSection() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const volunteerData = [
    {
      imgSrc: "/img/volunteer/volunteer1.png",
      iconSrc: "/svg/donate.svg",
      title: "Donate",
      description:
        "Every cedi counts. Your donation helps us feed a hungry child, educate a student, and restore hope to struggling families.",
      btnText: "Donate",
      onClick: () => setIsDonateModalOpen(true),
    },
    {
      imgSrc: "/img/volunteer/volunteer2.png",
      iconSrc: "/svg/volunteer.svg",
      title: "Volunteer",
      description:
        "Join our passionate volunteers who dedicate their time and love to serve others.",
      btnText: "Contact us",
    },
    {
      imgSrc: "/img/volunteer/volunteer3.png",
      iconSrc: "/svg/partner.svg",
      title: "Partner With Us",
      description:
        "Partner with us as an organization, school, or business to create lasting impact in communities across Ghana.",
      btnText: "Contact us",
    },
    {
      imgSrc: "/img/volunteer/volunteer4.png",
      iconSrc: "/svg/mail.svg",
      title: "Stay Connected",
      description:
        "Stay connected with us and be the first to know about our latest initiatives, success stories, and upcoming events, giving you an inside look at the impact we're making and the lives we're transforming.",
      btnText: "Facebook",
      secondbtnText: "Instagram",
      secondBtn: true,
      button: false,
      btnClassName: "flex-1",
      variant: "default" as const,
      picButtons: true,
    },
  ];

  return (
    <>
      <div className="section-padding gap-14 flex-col flex">
        {volunteerData.map((item, index) => (
          <VolunteerCard
            key={item.title}
            imgSrc={item.imgSrc}
            iconSrc={item.iconSrc}
            title={item.title}
            description={item.description}
            btnText={item.btnText}
            secondBtn={item.secondBtn}
            secondbtnText={item.secondbtnText}
            // Only add startingIcon for the last item
            startingIcon={
              index === 3 ? (
                <img src="/svg/facebook.svg" alt="Facebook" />
              ) : undefined
            }
            startingIcon2={
              index === 3 ? (
                <img src="/svg/Instagram.svg" alt="Instagram" />
              ) : undefined
            }
            variant={item.variant}
            button={item.button}
            btnClassName={item.btnClassName}
            picButtons={item.picButtons}
            onClick={item.onClick}
          />
        ))}
      </div>

      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
      />
    </>
  );
}
