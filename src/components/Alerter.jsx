import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const data = [
  {
    note: "success",
    title: "This is a success alert — check it out!",
  },
  {
    note: "error",
    title: "This is an error alert — check it out!",
  },
];
const Alerter = ({ el }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity={data[el].note}>{data[el].title}</Alert>
    </Stack>
  );
};

export default Alerter;
