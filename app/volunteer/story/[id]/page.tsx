import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import {ChevronLeft} from "lucide-react"
import { getStories, getStoryById, getOtherStories } from "../../../../lib/getStories";
import { notFound } from "next/navigation";
import Image from "next/image";

interface StoryDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function StoryDetailPage({ params }: StoryDetailPageProps) {
  const { id } = await params;  // ← Add this line
  const stories = await getStories();
  const storyId = Number(id);  // ← Change this
  const currentStory = getStoryById(stories, storyId);

  if (!currentStory) {
    notFound();
  }

  const otherStories = getOtherStories(stories, storyId);

  return (
    <div className="mt-[90px] min-h-screen bg-[#f7f7f7]">
      <div className="container-wide section-padding">
        <Link
          href="/volunteer"
          className="inline-flex items-center gap-2 text-sm md:text-base text-gray-700 hover:text-primary-default transition-colors ease-in-out mb-6 md:mb-8"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5"/>
          Back to Stories
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          {/* Main Content */}
          <div className="flex-1">
            <div className="w-full aspect-video md:aspect-[16/9] overflow-hidden rounded-lg mb-6 md:mb-8">
              <Image
                src={currentStory.image}
                alt={currentStory.title}
                width={250}
                height={250}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="mb-3 md:mb-4">
              <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-[var(--color-tertiary-active)]">
                {currentStory.year} - {currentStory.location}
              </span>
            </div>

            <h1 className="section-max-title text-left p-0  mb-6 md:mb-8 lg:mb-10">
              {currentStory.title}
            </h1>

            <div className="space-y-4 md:space-y-5 lg:space-y-6 text-gray-700">
              {currentStory.sections.map((section, index) => (
                <p
                  key={index}
                  className="text-sm md:text-base lg:text-lg leading-relaxed md:leading-relaxed lg:leading-loose"
                >
                  {section}
                </p>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 xl:w-96">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-xl md:text-2xl font-bold text-[var(--color-primary-default)] mb-4 md:mb-6">
                Other Stories
              </h2>

              <div className="space-y-4 md:space-y-6">
                {otherStories.map((story) => (
                  <Link
                    key={story.id}
                    href={`/volunteer/story/${story.id}`}
                    className="block group"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="w-full aspect-video overflow-hidden">
                        <Image
                          src={story.image}
                          alt={story.title}
                          width={250}
                          height={250}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-4 md:p-5">
                        <div className="mb-2">
                          <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-tertiary-active)]">
                            {story.year} - {story.location}
                          </span>
                        </div>
                        <h3 className="text-gray-11 group-hover:text-primary-default text-sm md:text-base lg:text-lg font-bold mb-2 line-clamp-2  transition-colors">
                          {story.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 line-clamp-2">
                          {story.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}