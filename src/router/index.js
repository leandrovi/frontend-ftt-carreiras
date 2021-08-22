import Home from "../views/Home";
import Details from "../views/Details";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Details/:id",
    name: "Details",
    component: Details,
    props: true,
  },
];
