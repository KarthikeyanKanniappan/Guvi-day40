import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
  Typography,
  TextField,
  Card,
  CardContent,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
} from "@material-ui/core";
import Alerter from "../components/Alerter";
import axios from "axios";
import { env } from "../config";

const Student = () => {
  const [status, setStatus] = useState("");
  const [render, setRender] = useState(true);
  const formik = useFormik({
    initialValues: {
      Name: "",
      StudentEmail: "",
      Course: "",
    },
    onSubmit: async (values) => {
      let user = await axios.post(`${env.api}/student`, values);
      console.log(user);
      if (user.status === 200) {
        setStatus(0);
        setRender(false);
        // alert("This is a success alert — check it out!");
      } else {
        setStatus(1);
        setRender(false);
        // alert("This is an error alert — check it out!!");
      }
    },
  });

  useEffect(() => {
    if (status !== 0 && status !== 1) {
      setRender(true);
    } else {
      setRender(false);
      setTimeout(() => {
        setRender(true);
      }, "3000");
    }
  }, [status]);
  return (
    <div>
      {render ? "" : <Alerter el={status} />};
      <Typography gutterBottom variant="h3" align="center">
        Create a Student
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Student Name"
                  placeholder="Enter the name of the Student"
                  variant="outlined"
                  fullWidth
                  value={formik.values.Name}
                  onChange={formik.handleChange}
                  name="Name"
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Email id"
                  placeholder="Enter the name of the Email id"
                  variant="outlined"
                  type="email"
                  fullWidth
                  value={formik.values.StudentEmail}
                  onChange={formik.handleChange}
                  name="StudentEmail"
                />
              </Grid>
              <Grid container justify="center">
                <FormControl className="form-control">
                  <InputLabel id="demo-simple-select-label">Course</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formik.values.Course}
                    label="Course"
                    onChange={formik.handleChange}
                    name="Course"
                  >
                    <MenuItem value={"React"}>React</MenuItem>
                    <MenuItem value={"Mongo"}>Mongo</MenuItem>
                    <MenuItem value={"Express"}>Express</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid className="GridForm" container justify="center">
                <Button
                  type="submit"
                  value="Submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Student;
