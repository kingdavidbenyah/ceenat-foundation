import { Story } from "../types/story";
import StoriesData from "../public/data/StoriesData.json";

export async function getStories(): Promise<Story[]> {
  return StoriesData as Story[];
}

export function getStoryById(stories: Story[], id: number): Story | undefined {
  return stories.find((story) => story.id === id);
}

export function getOtherStories(stories: Story[], currentId: number): Story[] {
  return stories.filter((story) => story.id !== currentId);
}