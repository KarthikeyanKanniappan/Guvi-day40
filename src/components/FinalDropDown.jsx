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

const FinalDropDown = () => {
  let context = useContext(UserContext);
  const [output, setOutput] = useState([]);
  const [marg, setMarg] = useState(false);
  const [statement, setStatement] = useState(true);

  const formik = useFormik({
    initialValues: {
      MentorName: "",
    },
    onSubmit: async (values) => {
      let user = await axios.get(`${env.api}/students`, values);
      let mentorData = user.data;
      let data = mentorData.filter((el) => {
        if (values.MentorName === el.Mentor) {
          return el.Name;
        }
      });
      console.log(data);
      setOutput(data);
      data[0] !== undefined ? setMarg(true) : setMarg(false);
      data[0] === undefined ? setStatement(false) : setStatement(true);
    },
  });

  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        Showing all students for a particular mentor
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid container justify="center">
              <FormControl className="form-control">
                <InputLabel id="demo-simple-select-label">Mentors</InputLabel>
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
          </form>
          {statement === false ? (
            <Typography align="center">
              No students is Assigned to this mentor
            </Typography>
          ) : (
            ""
          )}
          {marg === true ? (
            <Grid>
              <Typography variant="h4" align="center">
                Students Name
              </Typography>
              {output.map((el, i) => {
                return (
                  <Typography align="center">{`${i + 1}.${
                    el.Name
                  }`}</Typography>
                );
              })}
            </Grid>
          ) : (
            " "
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FinalDropDown;

// <Grid>
// <Typography>This mentor has no students</Typography>
// </Grid>
