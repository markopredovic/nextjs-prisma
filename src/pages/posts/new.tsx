import React from "react";
import { Grid } from "@material-ui/core";

import Layout from "../../components/UI/Layout";
import PageTitle from "../../components/Shared/PageTitle";
import AddPostForm from "../../components/forms/AddPostForm";

const NewPostPage = () => {
  return (
    <Layout>
      <Grid container justify="center">
        <Grid item xs={12} sm={9} md={6}>
          <PageTitle title="Add new post" />
          <AddPostForm />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default NewPostPage;
