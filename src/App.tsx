import { Fragment, useState, useEffect } from "react";
import { getPosts } from "./api/axios";
import SearchBar from "./components/SearchBar";
import ListPost from "./components/ListPost";
function App() {
  const [posts, setPosts] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);

  // useEffect(() => {
  //   getPosts()
  //     .then((json) => {
  //       setPosts(json);
  //       return json;
  //     })
  //     .then((json) => setSearchFilter(json));
  // }, []);

  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
      setSearchFilter(json);
    });
  }, []);

  return (
    <Fragment>
      <SearchBar posts={posts} setSearchFilter={setSearchFilter} />
      <ListPost searchFilter={searchFilter} />
    </Fragment>
  );
}
export default App;
