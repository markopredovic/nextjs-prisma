import React from "react";
import useSWR from "swr";

import PostsList from "../PostsList";
import SectionTitle from "../Shared/SectionTitle";

const PopularPostsPage = () => {
  const { data, error, mutate } = useSWR(
    `/api/posts?popular=true&popularTake=5`,
    {
      revalidateOnFocus: false,
    }
  );

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div>
      <SectionTitle title="Popular" />
      <PostsList posts={data.posts} mutate={mutate} />
    </div>
  );
};

export default PopularPostsPage;
