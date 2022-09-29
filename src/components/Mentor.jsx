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
  Button,
} from "@material-ui/core";
import Alerter from "../components/Alerter";
import axios from "axios";
import { env } from "../config";

const Mentor = () => {
  const [status, setStatus] = useState("");
  const [render, setRender] = useState(true);
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Expert: "",
    },
    onSubmit: async (values) => {
      let user = await axios.post(`${env.api}/mentor`, values);
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
        Create a Mentor
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Mentor Name"
                  placeholder="Enter the name of the Mentor"
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
                  value={formik.values.Email}
                  onChange={formik.handleChange}
                  name="Email"
                />
              </Grid>
              <Grid container justify="center">
                <FormControl className="form-control">
                  <InputLabel id="demo-simple-select-label">
                    Expertise
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formik.values.Expert}
                    label="Expertise"
                    onChange={formik.handleChange}
                    name="Expert"
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

export default Mentor;
