import React from "react";
import UserComponent from "../../StoryNews/UserComponent";
import { CardProps } from "../../../types";

const Card: React.FC<CardProps> = ({
  title,
  score,
  author,
  readMoreUrl,
  userId,
}) => {
  const imageUrl = `https://picsum.photos/550/550?${score}`;

  const srcSet = `
   https://picsum.photos/400/400?${score} 400w,
   https://picsum.photos/550/550?${score} 550w,
   https://picsum.photos/700/600?${score} 700w
 `;

  return (
    <div className="">
      <a
        className="transition duration-700 ease-in-out"
        href={readMoreUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure className=" group">
          {imageUrl && (
            <img
              className="hover:cursor-[url('./more.svg')_50_50,auto]"
              src={imageUrl}
              loading="lazy"
              srcSet={srcSet}
              alt={title}
            />
          )}
        </figure>
      </a>

      <div className="mt-8">
        <div className="flex items-center gap-2 mb-3 text-gray-400 text-fs-sm">
          <div className="flex items-center justify-center rounded-full bg-slate-500 size-8">
            <p className="text-white ">{score}</p>
          </div>
          <p>by {author}</p>
        </div>
        <a href={readMoreUrl} target="_blank" rel="noopener noreferrer">
          <h2 className="font-serif font-bold transition duration-300 ease-in-out cursor-pointer lg:leading-8 text-fs-lg hover:text-purple-800">
            {title}
          </h2>
        </a>

        <a
          className="flex items-end mt-10 text-purple-800 transition duration-700 ease-in-out cursor-pointer justify-items-center text-fs-base hover:font-medium"
          href={readMoreUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Post
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mx-2 size-6 hover:font-medium "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
        <div className="pt-2 text-gray-400 text-fs-sm">
          {userId && <UserComponent id={userId} />}
        </div>
      </div>
    </div>
  );
};

export default Card;
