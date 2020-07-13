import React from "react";
import useSWR from "swr";

import PostsList from "../PostsList";
import SectionTitle from "../Shared/SectionTitle";

const ArchivePostsList = () => {
  const { data, error, mutate } = useSWR(
    `/api/posts?archived=true&archiveTake=5`,
    {
      revalidateOnFocus: false,
    }
  );

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div>
      <SectionTitle title="Archive" />
      <PostsList posts={data.posts} mutate={mutate} />
    </div>
  );
};

export default ArchivePostsList;
