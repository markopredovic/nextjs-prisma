import React, { useState } from "react";
import useSWR from "swr";

import Layout from "../UI/Layout/Layout";
import PageTitle from "../Shared/PageTitle";
import PostsList from "../PostsList";
import FilterPosts from "../FilterPosts";

export default function Homepage() {
  const [currentFilter, setCurrentFilter] = useState("featured");
  const { data, error, mutate } = useSWR(`/api/posts`, {
    revalidateOnFocus: false,
  });

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const handleFilter = (filter: string) => {
    setCurrentFilter(filter);
  };

  return (
    <Layout>
      <PageTitle title="Posts" />
      <FilterPosts filterPosts={handleFilter} currentFilter={currentFilter} />
      <PostsList posts={data.posts} filter={currentFilter} mutate={mutate} />
    </Layout>
  );
}
