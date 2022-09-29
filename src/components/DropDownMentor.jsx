import React, { useState, useContext } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import UserContext from "./UserContext";
import { env } from "../config";
import { useFormik } from "formik";
import axios from "axios";

const DropDownMentor = () => {
  let context = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      MentorName: "",
      studentName: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      let user = await axios.put(`${env.api}/EditingMentor`, values);
      if (user.status === 200) {
        alert("This is a success alert — check it out!");
      } else {
        alert("This is an error alert — check it out!!");
      }
    },
  });

  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        Assigning Mentor to particular Student
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid xs={12} container justify="center">
              <FormControl className="form-control">
                <InputLabel id="demo-simple-select-label">Student</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.studentName}
                  label="Student"
                  name="studentName"
                  onChange={formik.handleChange}
                >
                  {context.StudentName.map((el, i) => {
                    return (
                      <MenuItem key={i} value={el.Name}>
                        {el.Name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <FormControl className="form-control leftForm">
                <InputLabel id="demo-simple-select-label">Mentor</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.MentorName}
                  label="Mentor"
                  name="MentorName"
                  onChange={formik.handleChange}
                >
                  {context.mentorName.map((el, i) => {
                    return (
                      <MenuItem key={i} value={el.Name}>
                        {el.Name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <Grid className="GridForm" container justify="center">
                <Button
                  type="submit"
                  variant="contained"
                  value="Submit"
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

export default DropDownMentor;
