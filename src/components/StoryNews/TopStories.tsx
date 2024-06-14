import React, { useState, useEffect } from "react";
import useFetch from "../../utils/useFetch";
import StoryItem from "./StoryItem";
import { getRandomStoryIds } from "../../utils/storyUtils";
import { StoryData } from "../../types";

const TopStories: React.FC = () => {
  const {
    data: topStoryIds,
    status: topStoryStatus,
    error: topStoryError,
  } = useFetch<number[]>(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const [stories, setStories] = useState<StoryData[]>([]);
  const [loadingStories, setLoadingStories] = useState(false);

  useEffect(() => {
    const fetchStories = async (ids: number[]) => {
      setLoadingStories(true);
      const randomIds = getRandomStoryIds(ids, 10); // Fetch 10 random stories
      const storyPromises = randomIds.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (res) => res.json()
        )
      );
      const fetchedStories = await Promise.all(storyPromises);
      fetchedStories.sort((a, b) => b.score - a.score);
      setStories(fetchedStories);
      setLoadingStories(false);
    };

    if (topStoryIds && topStoryStatus === "success") {
      fetchStories(topStoryIds);
    }
  }, [topStoryIds, topStoryStatus]);

  if (topStoryStatus === "loading" || loadingStories) return <p>Loading...</p>;
  if (topStoryError) return <p>Error: {topStoryError.message}</p>;
  if (!stories.length) return <p>No stories found.</p>;

  return (
    <div className="grid grid-cols-1 max-w-[1480px]   m-auto px-6 border-t-2 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 border-t-black">
      {stories.map((story) => (
        <div className="my-12" key={story.id}>
          <StoryItem {...story} />
        </div>
      ))}
    </div>
  );
};

export default TopStories;
