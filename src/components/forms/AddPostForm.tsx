import React, { useContext, useState, useRef } from "react";
import { Formik, FormikHelpers } from "formik";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/styles";
import * as yup from "yup";

import AppContext from "../../context/appContext";
import { IAddPost } from "../../models";

const useStyles = makeStyles({
  root: {
    "& input[type='file']": {
      zIndex: "3",
    },
  },
});

const CLOUDINARY_ClOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_ClOUD_NAME;

const AddPostForm = () => {
  const classes = useStyles();
  const context = useContext(AppContext);
  const initialValues: IAddPost = {
    title: "",
    content: "",
    featured: false,
    archived: false,
    imageUrl: null,
  };
  const [open, setOpen] = useState(false);
  let imageRef = useRef<HTMLInputElement>(null);

  const validationSchema = yup.object({
    title: yup.string().required().min(2).max(100),
    content: yup.string().required().min(20),
  });

  const uploadImageToCloudinary = () => {
    const { files } = imageRef.current as HTMLInputElement;
    const formData = new FormData();

    if (files) formData.append("file", files[0]);
    // replace this with your upload preset name
    formData.append("upload_preset", "xuizbgdu");
    const options = {
      method: "POST",
      body: formData,
    };

    return fetch(
      `https://api.Cloudinary.com/v1_1/${CLOUDINARY_ClOUD_NAME}/image/upload`,
      options
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  const addPostHandler = async (
    values: IAddPost,
    { setSubmitting, resetForm }: FormikHelpers<IAddPost>
  ) => {
    // post to api
    try {
      setOpen(false);
      // upload to cloudinary
      let imageObj = null;
      if (imageRef.current) {
        imageObj = await uploadImageToCloudinary();
      }
      // get cloudinary url
      const postValues = {
        ...values,
        imageUrl: imageObj ? imageObj.url : null,
      };
      // update values
      console.log("values", postValues);
      // add post
      await context.addPost(postValues);
    } catch (e) {
      console.log("e", e);
    } finally {
      setSubmitting(false);
      resetForm();
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
        <Box width="1" className={classes.root}>
          <form onSubmit={handleSubmit}>
            <TextField
              id="addPostTitle"
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
              id="addPostContent"
              label="Content"
              multiline={true}
              rows={4}
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
                    checked={values.featured}
                    onChange={handleChange}
                    name="featured"
                  />
                }
                label="Featured"
              />
            </FormGroup>
            <TextField
              id="addPostImageUpload"
              label="Upload Image"
              name="imageUrl"
              type="file"
              inputRef={imageRef}
              variant="outlined"
              size="small"
              margin="normal"
              fullWidth={true}
            />
            <Typography align="right">
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                type="submit"
              >
                Add
              </Button>
            </Typography>
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
              Post added!
            </Alert>
          </Snackbar>
        </Box>
      )}
    </Formik>
  );
};

export default AddPostForm;
