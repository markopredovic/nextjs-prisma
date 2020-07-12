import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
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

const EditPostForm = ({ post }) => {
  const context = useContext(AppContext);
  const initialValues = {
    title: post.title,
    content: post.content,
    archived: post.archived,
    featured: post.featured,
  };
  const [open, setOpen] = useState(false);

  const validationSchema = yup.object({
    title: yup.string().required().min(2).max(100),
    content: yup.string().required().min(20),
  });

  const addPostHandler = async (values, { setSubmitting }) => {
    try {
      setOpen(false);
      await context.updatePost(post.id, { ...post, ...values });
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
      onSubmit={addPostHandler}
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

EditPostForm.propTypes = {
  post: PropTypes.object,
};
