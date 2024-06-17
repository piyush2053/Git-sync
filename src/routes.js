import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdCode,
  MdCommit,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";

const routes = [
  {
    name: "Source",
    layout: "/home",
    path: "/default",
    icon: <Icon as={MdCode} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Commits",
    layout: "/home",
    path: "/commits",
    icon: (
      <Icon
        as={MdCommit}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Profile",
    layout: "/home",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
];

export default routes;
