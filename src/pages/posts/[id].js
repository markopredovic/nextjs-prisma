import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import Layout from "../../components/UI/Layout";
import PostDetails from "../../components/PostDetails";

const PostDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/posts/${id}`);

  if (!data) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error ...</div>;
  }

  console.log("data", data);

  return (
    <Layout>
      <PostDetails post={data.post} />
    </Layout>
  );
};

export default PostDetailsPage;
