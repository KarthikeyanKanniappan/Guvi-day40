import React, { useState } from "react";
import {
  Typography,
  Tab,
  AppBar,
  Toolbar,
  Tabs,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import DrawerComp from "./DrawerComp";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const PAGES = [
  {
    data: "HomePage",
    route: "/",
  },
  {
    data: "Create Mentor",
    route: "/mentor",
  },
  {
    data: "Create Student",
    route: "/student",
  },
  {
    data: "Adding Student to Mentor",
    route: "/multipleStudent",
  },
  {
    data: "Mentor for Student",
    route: "/studentToMentor",
  },
  {
    data: "student details for  Mentor",
    route: "/information",
  },
];
const Navbar = () => {
  const [value, setValue] = useState();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: "#063970" }}>
        <Toolbar>
          <SelfImprovementIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
                ZEN
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => {
                  setValue(value);
                }}
                indicatorColor="secondary"
              >
                {PAGES.map((el, index) => {
                  return (
                    <Tab
                      key={index}
                      label={el.data}
                      value={el.route}
                      component={Link}
                      to={el.route}
                    />
                  );
                })}
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
      <div className="Table">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Navbar;

// /*{ {PAGES.map((el, index) => {
//                 return <Tab key={index} label={el} />;
//               })}*/
//             {/* <Button sx={{ marginLeft: "auto" }} variant="contained">
//           Login
//         </Button> */}
