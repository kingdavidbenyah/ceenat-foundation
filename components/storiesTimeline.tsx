"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Story } from "../types/story";
import { CalendarDays } from "lucide-react";

interface StoriesTimelineProps {
  stories: Story[];
}

const StoriesTimeline: React.FC<StoriesTimelineProps> = ({ stories }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [wickHeight, setWickHeight] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const storyRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Get responsive timeline position
  const getTimelineLeftPosition = () => {
    if (!isMounted) return "28px"; // Default for SSR

    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      // Mobile: closer to left - 16px
      return "0px";
    } else if (screenWidth < 1024) {
      // Tablet: 24px from left
      return "12px";
    } else {
      // Desktop: 28px or more from left
      return "28px";
    }
  };

  const getDotLeftPosition = () => {
    if (!isMounted) return "-14px"; // Default for SSR

    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      // Mobile: dot position (16px - 16px for centering)
      return "-16px";
    } else if (screenWidth < 1024) {
      // Tablet: dot position (24px - 16px for centering)
      return "-6px";
    } else {
      // Desktop: 12px
      return "8px";
    }
  };

  // Set mounted state after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let rafId: number;

    const handleScroll = (): void => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        if (!containerRef.current || !timelineRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const triggerPoint = 150;

        // Check if timeline section is in viewport
        const firstStoryRef = storyRefs.current[0];
        const firstStoryInPosition = firstStoryRef
          ? firstStoryRef.getBoundingClientRect().top <= triggerPoint 
          : false;

        const sectionInView =
          containerRect.top < window.innerHeight &&
          containerRect.bottom > triggerPoint +200  &&
          firstStoryInPosition;
        setIsInView(sectionInView);

        if (!sectionInView) {
          return;
        }

        let newActiveIndex = 0;
        let calculatedWickHeight = 0;

        // STEP 1: Determine which story is currently active
        storyRefs.current.forEach((ref, index) => {
          if (!ref) return;

          const rect = ref.getBoundingClientRect();
          if (rect.top <= triggerPoint + 50) {
            newActiveIndex = index;
          }
        });

        setActiveIndex(newActiveIndex);

        // STEP 2: Calculate wick animation
        if (newActiveIndex < stories.length - 1) {
          const nextStoryRef = storyRefs.current[newActiveIndex + 1];

          if (nextStoryRef) {
            const nextRect = nextStoryRef.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const storyDistanceFromTrigger = nextRect.top - triggerPoint;
            const maxDistance = viewportHeight - triggerPoint;

            let scrollProgress = 1 - storyDistanceFromTrigger / maxDistance;
            scrollProgress = Math.max(0, Math.min(1, scrollProgress));

            const distanceBetweenDots = nextRect.top - triggerPoint;

            if (scrollProgress <= 0.5) {
              const growthProgress = scrollProgress * 2;
              calculatedWickHeight = distanceBetweenDots * 0.5 * growthProgress;
            } else {
              const retractionProgress = (scrollProgress - 0.5) * 2;
              calculatedWickHeight =
                distanceBetweenDots * 0.5 * (1 - retractionProgress);
            }
          }
        } else {
          const lastStoryRef = storyRefs.current[newActiveIndex];
          if (lastStoryRef && timelineRef.current) {
            const timelineRect = timelineRef.current.getBoundingClientRect();
            const lastRect = lastStoryRef.getBoundingClientRect();

            const grayLineHeight = stories.length * 600;
            const grayLineBottom = timelineRect.top + grayLineHeight;

            const distanceToEnd = grayLineBottom - triggerPoint;

            const contentHeight = lastRect.height;
            const scrolledPastTrigger = Math.max(
              0,
              triggerPoint - lastRect.top
            );
            const scrollProgress = Math.min(
              scrolledPastTrigger / (contentHeight * 0.6),
              1
            );

            calculatedWickHeight = distanceToEnd * scrollProgress;
          }
        }

        setWickHeight(Math.max(0, calculatedWickHeight));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [stories.length]);

  const getFixedLeftPosition = (baseOffset: number) => {
    if (!timelineRef.current || !isMounted) return "0px";

    const screenWidth = window.innerWidth;
    const timelineLeft = timelineRef.current.getBoundingClientRect().left;

    if (screenWidth < 640) {
      // Mobile: closer to left (16px base)
      return `${timelineLeft + (baseOffset - 28)}px`;
    } else if (screenWidth < 1024) {
      // Tablet: 24px base
      return `${timelineLeft + (baseOffset - 16)}px`;
    } else {
      // Desktop: standard positioning
      return `${timelineLeft + baseOffset}px`;
    }
  };

  return (
    <div ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Timeline Container */}
        <div ref={timelineRef} className="relative">
          {/* Gray Background Line */}
          <div
            className="absolute w-1 bg-[var(--color-gray-4)]"
            style={{
              left: getTimelineLeftPosition(),
              top: "0px",
              height: `${stories.length * 600}px`,
            }}
          ></div>

          {/* Animated Gold Wick */}
          {isInView && (
            <div
              className="fixed w-1 bg-[var(--color-tertiary-default)] z-[2] transition-all duration-100 ease-out pointer-events-none"
              style={{
                left: getFixedLeftPosition(28),
                top: "150px",
                height: `${wickHeight}px`,
                willChange: "height",
              }}
            ></div>
          )}

          {/* Stories */}
          {stories.map((story: Story, index: number) => {
            const isActive = index === activeIndex && isInView;
            const isPast = index < activeIndex;

            return (
              <div
                key={story.id}
                ref={(el) => {
                  storyRefs.current[index] = el;
                }}
                className="relative flex items-start"
                style={{
                  minHeight: "600px",
                  marginBottom: "0",
                }}
              >
                {/* Timeline Dot */}
                <div
                  className={`p-2 flex-center rounded-full border-2 sm:border-4 flex-shrink-0 transition-all duration-300 z-[3] ${
                    isPast || isActive
                      ? "bg-[var(--color-tertiary-default)] border-[var(--color-tertiary-default)]"
                      : "bg-[var(--color-gray-3)] border-[var(--color-gray-4)]"
                  }`}
                  style={{
                    position: isActive ? "fixed" : "absolute",
                    top: isActive ? "150px" : "0px",
                    left: isActive
                      ? getFixedLeftPosition(12)
                      : getDotLeftPosition(),
                  }}
                ><CalendarDays className="text-gray-1 w-4 h-4" /></div>

                {/* Content */}
                <div className="ml-8 sm:ml-12 lg:ml-16 flex-1">
                  <div
                    className={`transition-opacity duration-500 max-w-3xl ${
                      isActive ? "opacity-100" : "opacity-60"
                    }`}
                    style={{
                      position: isActive ? "fixed" : "relative",
                      top: isActive ? "140px" : "auto",
                      left: isActive
                        ? `calc(${getFixedLeftPosition(12)} + 56px)`
                        : "auto",
                      width: isActive
                        ? "calc(min(56rem, 100vw - 120px))"
                        : "auto",
                      maxWidth: "56rem",
                    }}
                  >
                    <div className="mb-2 text-[var(--color-tertiary-active)]">
                      <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
                        {story.year} - {story.location}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[var(--color-primary-default)]">
                      {story.title}
                    </h2>

                    <p className="text-sm sm:text-base mb-6 text-[var(--color-gray-8)]">
                      {story.description}
                    </p>

                    <Link
                      href={`/volunteer/story/${story.id}`}
                      className="w-full sm:w-auto"
                    >
                      <button className="cursor-pointer group flex flex-col gap-2 font-medium text-primary-default">
                        <span className="text-[15px] sm:text-base flex-center gap-2 w-full">
                          Read Full Story{" "}
                          <BsArrowUpRightCircle className="w-5 h-5" />
                        </span>
                        {/* Underline Animation */}
                        <span className="h-[1.5px] xl:h-[2px] rounded-full w-full bg-primary-default origin-left scale-x-50 transition-transform duration-300 group-hover:scale-x-100" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StoriesTimeline;
