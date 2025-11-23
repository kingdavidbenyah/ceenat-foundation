import PageHeader from "./pageHeader";
import StoriesTimeline from "./storiesTimeline";
import { Story } from "../types/story";

interface StoriesSectionProps {
  stories: Story[];
}

export default function StoriesSection({ stories }: StoriesSectionProps) {
  return (
    <>
      <PageHeader
        title="Stories of Hope"
        quote="Every meal, every smile, and every act of kindness tells a story"
      />
      <div>
        <p className="text-[12px] md:text-[16px] mt-4 flex flex-col text-center gap-3 text-[#4f4f4f]">
          <span>
            Every meal, every smile, and every act of kindness tells a story — a
            story of lives restored and communities renewed. At Ceenat
            Foundation, we believe that lasting change begins with compassion in
            action. Through our diverse initiatives in education, healthcare,
            and empowerment, we continue to touch lives and create opportunities
            where hope once seemed out of reach.
          </span>
          <span>
            These Stories of Hope capture the real impact of our work — the
            transformation of individuals and communities made possible through
            shared purpose and unwavering dedication.
          </span>
        </p>
        <div className="relative">
          <StoriesTimeline stories={stories} />
        </div>
      </div>
    </>
  );
}
