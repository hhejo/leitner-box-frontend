import PathConstants from "./path-constants";
import Home from "./home";
import Card from "./card";
import CreateCard from "./create-card";
import TodayCard from "./today-card";

// const Home = React.lazy(() => import("../pages/Home"));
// const About = React.lazy(() => import("../pages/About"));

const routes = [
  { path: "/", element: <Home /> },
  { path: PathConstants.CARD_DETAIL, element: <Card /> },
  { path: PathConstants.CARDS_CREATE, element: <CreateCard /> },
  { path: PathConstants.CARDS_TODAY, element: <TodayCard /> },
];

export default routes;
