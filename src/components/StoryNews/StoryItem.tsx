import React from "react";

import useFetch from "../../utils/useFetch";
import { Story, StoryProps } from "../../types";
import Card from "../UI/Card";

const StoryItem: React.FC<StoryProps> = ({ id }) => {
  const { data, error, status } = useFetch<Story>(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );


  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No story found!</p>;

 
  return (
    <Card
      title={data.title}
      score={data.score}
      author={data.by}
      readMoreUrl={data.url}
      userId={data.by}
    />
  );
};

export default StoryItem;
