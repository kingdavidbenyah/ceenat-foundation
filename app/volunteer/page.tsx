"use client"
import PageHeader from "../../components/pageHeader";
import VolunteerCard from "../../components/volunteerCard";
import Story from "../../components/story";
import { useState } from "react";
import DonateModal from "../../components/donateModal";



const stories =[
  {
    title: "ROYAL SEED ORPHANAGE: NO CHILD LEFT BEHIND",
    section1: "At the heart of Ofaakor, the Royal Seed Orphanage stands as a beacon of compassion and renewal. What began as a modest effort to provide refuge for abandoned and vulnerable children has evolved—through the dedication of the Ceenat Foundation and the generosity of its partners—into a thriving home where hope is restored daily.",
    section2: "For years, many of these children faced extreme hardship and uncertainty. Today, they are nurtured in an environment that promotes education, discipline, and emotional growth. With consistent support in the form of food supplies, learning materials, and mentorship, the orphanage continues to fulfill its mission of transforming young lives and shaping futures filled with promise.",
    section3: "The Royal Seed Orphanage embodies the Foundation’s belief that every child deserves love, security, and the opportunity to dream beyond their circumstances."
  },
  {
    title: "THE CLASSROOM OF DREAMS",
    section1: "In a small rural community, the lack of a proper learning facility posed a major challenge to children eager to pursue education. A single wooden structure—dilapidated and poorly furnished—served as both a school and a place of worship. Recognizing the urgent need, the Ceenat Foundation intervened through its Classroom of Dreams project.",
    section2: "The Foundation constructed a modern classroom equipped with desks, stationery, and teaching materials, providing a safe and conducive environment for learning. The transformation has reignited hope among parents, teachers, and pupils alike, fostering a culture of knowledge and aspiration within the community.",
    section3: "This initiative not only enhances access to education but also underscores the Foundation’s dedication to creating opportunities that enable future generations to thrive."
  },
  {
    title: "REAL PEOPLE. REAL IMPACT. REAL HOPE.",
    section1: "Each story represents a testament to the Ceenat Foundation’s mission of uplifting lives through compassion, innovation, and community-centered development. Together, they embody the spirit of hope that continues to drive the Foundation’s work across Ghana and beyond.",
     }
]

export default function page() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const volunteerData = [
    {
      imgSrc: "/img/volunteer/volunteer1.png",
      iconSrc: "/svg/donate.svg",
      title: "Donate",
      description:
        "Every cedi counts. Your donation helps us feed a hungry child, educate a student, and restore hope to struggling families.",
      btnText: "Donate",
      onClick: () => setIsDonateModalOpen(true)
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
        "Stay connected with us and be the first to know about our latest initiatives, success stories, and upcoming events, giving you an inside look at the impact we’re making and the lives we’re transforming.",
      btnText: "Facebook",
      secondbtnText: "Instagram",
      secondBtn: true,
      button: false,
      btnClassName: "flex-1",
      variant: "default" as "default",
      startingIcon: <img src="/svg/facebook.svg" />,
      startingIcon2: <img src="/svg/Instagram.svg" />,
      picButtons: true,
    },
  ];
  return (
    
    <div className="mt-[90px] flex-1 bg-[#f7f7f7] min-h-screen  flex flex-col ">
      <div className="section-padding container-wide  flex flex-col">
        <PageHeader title="Get Involved" quote="Be Part of the Change." />
        <div className=" section-padding gap-14 flex-col flex">
          {/* content */}
          {volunteerData.map((item) => (
            <VolunteerCard
              key={item.title}
              imgSrc={item.imgSrc}
              iconSrc={item.iconSrc}
              title={item.title}
              description={item.description}
              btnText={item.btnText}
              secondBtn={item.secondBtn}
              secondbtnText={item.secondbtnText}
              startingIcon={item.startingIcon}
              startingIcon2={item.startingIcon2}
              variant={item.variant as "outline" | "default" | undefined} // optional: different variant per card
              button={item.button}
              btnClassName={item.btnClassName}
              picButtons={item.picButtons}
              onClick={item.onClick}
              // variant="outline"
            />
          ))}
        </div>
        <PageHeader
          title="Stories of Hope"
          quote="Every meal, every smile, and every act of kindness tells a story"
        />
        <div>
          <p className="text-[12px] md:text-[16px] mt-4 flex flex-col text-center gap-3 text-[#4f4f4f]">
            <span>
              Every meal, every smile, and every act of kindness tells a story —
              a story of lives restored and communities renewed. At Ceenat
              Foundation, we believe that lasting change begins with compassion
              in action. Through our diverse initiatives in education,
              healthcare, and empowerment, we continue to touch lives and create
              opportunities where hope once seemed out of reach.
            </span>
            <span>
              These Stories of Hope capture the real impact of our work — the
              transformation of individuals and communities made possible
              through shared purpose and unwavering dedication.
            </span>
          </p>
          <div className="section-padding flex flex-col gap-12">
            {
              stories.map((storyItem) => (
                <Story
                  key={storyItem.title}
                  title={storyItem.title}
                  section1={storyItem.section1}
                  section2={storyItem.section2}
                  section3={storyItem.section3}
           />))
            }
            
          </div>
        </div>
      </div>
      
            <DonateModal
              isOpen={isDonateModalOpen}
              onClose={() => setIsDonateModalOpen(false)}
            />
    </div>
  );
}
