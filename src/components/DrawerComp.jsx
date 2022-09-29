import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const PAGES = [
  {
    data: "HomePage",
    route: "/data",
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
const DrawerComp = () => {
  const [Open, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={Open} onClose={() => setOpenDrawer(false)}>
        <List>
          {PAGES.map((el, index) => {
            return (
              <Link to={el.route}>
                <ListItemButton key={index}>
                  <ListItemIcon>
                    <ListItemText>{el.data}</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            );
          })}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!Open)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;

// {PAGES.map((el, index) => {
//   return (
//     <ListItemButton key={index}>
//       <ListItemIcon>
//         <ListItemText>{el}</ListItemText>
//       </ListItemIcon>
//     </ListItemButton>
//   );

// const PAGES = [
//   "HomePage",
//   "Create Mentor",
//   "Create Student",
//   "Adding Student to Mentor",
//   "Mentor for Student",
//   "student details for  Mentor",
// ];
