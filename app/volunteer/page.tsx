import PageHeader from "../../components/pageHeader";
import VolunteerSection from "../../components/volunteerSection";
import StoriesSection from "../../components/storiesSection";
import { getStories } from "../../lib/getStories";

export default async function page() {
  const stories = await getStories();

  return (
    <div className="mt-[90px] flex-1 bg-[#f7f7f7] min-h-screen  flex flex-col ">
      <div className="section-padding container-wide flex flex-col">
        <PageHeader title="Get Involved" quote="Be Part of the Change." />
        <VolunteerSection />
        <StoriesSection stories={stories} />
      </div>
    </div>
  );
}
