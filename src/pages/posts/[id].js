import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import Layout from "../../components/UI/Layout";
import PageTitle from "../../components/Shared/PageTitle";
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

  return (
    <Layout>
      <PageTitle title="Post details" />
      <PostDetails post={data.post} />
    </Layout>
  );
};

export default PostDetailsPage;
