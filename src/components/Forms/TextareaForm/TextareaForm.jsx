import React from "react";
import {useFormik} from "formik";
import {Button, TextField} from "@material-ui/core";
import styles from "./TextareaForm.module.css";

const TextareaForm = (props) => {
  const sendText = (message) => {
    props.sendText(message);
  }
  const formik = useFormik({
    initialValues: {
      messageText: '',
    },
    onSubmit: (values, {resetForm}) => {
      sendText(values.messageText);
      resetForm({values: ''});
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField label="Outlined" variant="outlined"
                 name="messageText"
                 onChange={formik.handleChange}
                 value={formik.values.messageText}
      />
      <div className={styles.buttonWrap}>
        <Button variant="contained" type="submit">Submit</Button>
      </div>
    </form>
  )
}

export default TextareaForm;
