import React, { useContext, useState, FunctionComponent } from "react";
import { Formik, FormikHelpers } from "formik";
import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import * as yup from "yup";

import AppContext from "../../context/appContext";

interface PostProps {
  id: number;
  title: string;
  content: string;
  archived: boolean;
  featured: boolean;
  imageUrl: string | null;
}

export interface EditPostProps {
  post: PostProps;
}

const EditPostForm: FunctionComponent<EditPostProps> = ({ post }) => {
  const context = useContext(AppContext);
  const initialValues = {
    id: post.id,
    title: post.title,
    content: post.content,
    archived: post.archived,
    featured: post.featured,
    imageUrl: post.imageUrl,
  };
  const [open, setOpen] = useState(false);

  const validationSchema = yup.object({
    title: yup.string().required().min(2).max(100),
    content: yup.string().required().min(20),
  });

  const updatePostHandler = async (
    values: PostProps,
    { setSubmitting }: FormikHelpers<PostProps>
  ) => {
    try {
      setOpen(false);
      await context.updatePost(post.id, { ...values });
    } catch (e) {
      console.log("e", e);
    } finally {
      setSubmitting(false);
      setOpen(true);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={updatePostHandler}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        touched,
      }) => (
        <Box width="1">
          <form onSubmit={handleSubmit}>
            <TextField
              id="editPostTitle"
              label="Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              size="small"
              error={!!errors.title && touched.title}
              helperText={errors.title}
              margin="normal"
              fullWidth={true}
            />
            <TextField
              id="editPostContent"
              multiline={true}
              rows={4}
              label="Content"
              name="content"
              value={values.content}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              size="small"
              error={!!errors.content && touched.content}
              helperText={errors.content}
              margin="normal"
              fullWidth={true}
            />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.archived}
                    onChange={handleChange}
                    name="archived"
                  />
                }
                label="Move to archive"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.featured}
                    onChange={handleChange}
                    name="featured"
                  />
                }
                label="Featured"
              />
            </FormGroup>
            <Box display="flex" justifyContent="end">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Edit
              </Button>
            </Box>
          </form>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            autoHideDuration={3000}
            onClose={() => setOpen(false)}
          >
            <Alert
              onClose={() => setOpen(false)}
              severity="success"
              elevation={6}
              variant="filled"
            >
              Post edited!
            </Alert>
          </Snackbar>
        </Box>
      )}
    </Formik>
  );
};

export default EditPostForm;
