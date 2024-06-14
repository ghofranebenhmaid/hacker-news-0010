import React from "react";

import useFetch from "../../utils/useFetch";
import { User, UserProps } from "../../types";
import { getHumanReadableDate } from "../../utils/storyUtils";

const UserComponent: React.FC<UserProps> = ({ id }) => {
  const { data, error, status } = useFetch<User>(
    `https://hacker-news.firebaseio.com/v0/user/${id}.json`
  );

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No user found!</p>;

  return (
    <div>
      <p> {getHumanReadableDate(data.created)}</p>
    </div>
  );
};

export default UserComponent;
