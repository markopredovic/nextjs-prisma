import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import Layout from "../../../components/UI/Layout";
import PageTitle from "../../../components/Shared/PageTitle";
import EditPostForm from "../../../components/forms/EditPostForm";

const PostEditPage = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data, error } = useSWR(() => (id ? `/api/posts/${id}` : null));

  if (!data) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error ...</div>;
  }

  return (
    <Layout>
      <PageTitle title="Post edit page" />
      <EditPostForm post={data.post} />
    </Layout>
  );
};

export default PostEditPage;
