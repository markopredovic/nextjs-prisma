import React, { useState } from "react";
import useSWR from "swr";

import Layout from "../UI/Layout/Layout";
import PostsList from "../PostsList";
import FilterPosts from "../FilterPosts";

export default function Homepage() {
  const [currentFilter, setCurrentFilter] = useState("featured");
  const { data, error, mutate } = useSWR(`/api/posts`, {
    revalidateOnFocus: false,
  });

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const handleFilter = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <Layout>
      <FilterPosts filterPosts={handleFilter} currentFilter={currentFilter} />
      <PostsList posts={data.posts} filter={currentFilter} mutate={mutate} />
    </Layout>
  );
}
