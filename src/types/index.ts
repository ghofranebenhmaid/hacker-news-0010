export interface Story {
  id: number;
  by: string;
  title: string;
  score: number;
  time: number;
  url?: string;
}

export interface StoryProps {
  id: number;
}

export interface User {
  id: string;
  created: number;
  karma: number;
  about?: string;
}

export interface UserProps {
  id: string;
}

export interface CardProps {
  title: string;
  score: number;
  author: string;
  readMoreUrl?: string;
  imageUrl?: string;
  userId?: string;
  srcset?: string;
}
export interface StoryData {
  id: number;
  by: string;
  score: number;
  title: string;
  time: number;
  url: string;
}
