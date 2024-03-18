import React from "react";

const SearchBar = ({ posts, setSearchFilter }) => {
  const submitHandler = (e) => e.preventDefault();

  const handleSearchFilter = (e) => {
    if (!e.target.value) return setSearchFilter(posts);
    const resultArray = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );
    return setSearchFilter(resultArray);
  };

  let content = (
    <header>
      <form className="search" onSubmit={submitHandler}>
        <input
          className="search__input"
          id="search"
          type="text"
          onChange={handleSearchFilter}
        />
        <button className="search__button">+</button>
      </form>
    </header>
  );

  return content;
};

export default SearchBar;
