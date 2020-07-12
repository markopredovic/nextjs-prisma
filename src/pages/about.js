import React from "react";
import { Box, Typography } from "@material-ui/core";

import Layout from "../components/UI/Layout";
import PageTitle from "../components/Shared/PageTitle";

export default function AboutPage() {
  return (
    <Layout>
      <PageTitle title="About" />
      <Box>
        <Typography variant="h4" gutterBottom>
          Fullstack javascript app
        </Typography>
        <Typography paragraph variant="body2" gutterBottom>
          Example CRUD application using{" "}
          <a href="https://jamstack.org/">Jamstack</a>
        </Typography>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Typography paragraph variant="body2" gutterBottom>
          <ul>
            <li>
              <a href="https://nextjs.org/">Next js</a>
            </li>
            <li>
              <a href="https://swr.vercel.app/">Swr</a> fetching data
            </li>
            <li>CRUD operations</li>
            <li>
              <a href="https://www.prisma.io/">Prisma</a> ORM
            </li>
            <li>
              <a href="https://material-ui.com/">Material UI</a> design
            </li>
            <li>
              <a href="https://formik.org/">Formik</a> react forms library
            </li>
            <li>
              <a href="https://github.com/jquense/yup">Yup</a> form validation
            </li>
          </ul>
        </Typography>
        <Typography variant="h4" gutterBottom>
          Demo and github repos
        </Typography>
        <Typography variant="body2">
          <ul>
            <li>
              <a href="https://markoni-nextjs-prisma.vercel.app/">demo</a>
            </li>
            <li>
              <a href="https://github.com/markopredovic/nextjs-prisma">
                github repos
              </a>
            </li>
          </ul>
        </Typography>
      </Box>
    </Layout>
  );
}
