/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
// import Tables from "layouts/tables";
import UserRequests from "layouts/userRequests";
import RequestDetails from "layouts/userRequests/data/userDetails";
import Users from "layouts/users";
import Payments from "layouts/payments";
import History from "layouts/payments/data/history";
import UserDetails from "layouts/users/data/userDetails";
import Jobs from "layouts/jobs";
import AddJob from "layouts/jobs/data/addJob";
import CompletedJobs from "layouts/completedJobs";
import Noticeboard from "layouts/noticeboard";
import Contactus from "layouts/contactus";
// import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/",
    component: <Dashboard />,
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  // },
  {
    type: "collapse",
    name: "User's Requests",
    key: "user-requests",
    icon: <Icon fontSize="small">person_add_alt</Icon>,
    route: "/user-requests",
    component: <UserRequests />,
  },
  {
    type: "",
    name: "User's Requests",
    key: "request-details",
    icon: <Icon fontSize="small">person_add_alt</Icon>,
    route: "/request-details",
    component: <RequestDetails />,
  },
  {
    type: "collapse",
    name: "Active Users",
    key: "users",
    icon: <Icon fontSize="small">supervised_user_circle</Icon>,
    route: "/users",
    component: <Users />,
  },
  {
    type: "",
    name: "userdetails",
    key: "user-details",
    icon: <Icon fontSize="small">Supervised_user_circle</Icon>,
    route: "/user-details",
    component: <UserDetails />,
  },
  {
    type: "collapse",
    name: "Create Job",
    key: "addJob",
    icon: <Icon fontSize="small">add</Icon>,
    route: "/add-job",
    component: <AddJob />,
  },
  {
    type: "collapse",
    name: "Active Jobs",
    key: "jobs",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/jobs",
    component: <Jobs />,
  },

  {
    type: "collapse",
    name: "Completed Jobs",
    key: "completedJobs",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/completedJobs",
    component: <CompletedJobs />,
  },
  {
    type: "collapse",
    name: "Payments",
    key: "payments",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/payments",
    component: <Payments />,
  },
  {
    type: "",
    name: "History",
    key: "history",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/history",
    component: <History />,
  },
  {
    type: "collapse",
    name: "Noticeboard",
    key: "notice-board",
    icon: <Icon fontSize="small">content_paste</Icon>,
    route: "/notice-board",
    component: <Noticeboard />,
  },
  {
    type: "collapse",
    name: "Contact Us",
    key: "contact-us",
    icon: <Icon fontSize="small">inventory</Icon>,
    route: "/contact-us",
    component: <Contactus />,
  },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   icon: <Icon fontSize="small">person</Icon>,
  //   route: "/profile",
  //   component: <Profile />,
  // },

  {
    type: "",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <SignUp />,
  // },
];

export default routes;
