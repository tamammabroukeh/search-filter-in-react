import React from "react";
import Post from "./Post";

const ListPost = ({ searchFilter }) => {
  const result = searchFilter.map((post) => <Post key={post.id} post={post} />);
  const content = result?.length ? (
    result
  ) : (
    <article>
      <p>No posts to show</p>
    </article>
  );
  return content;
};

export default ListPost;
