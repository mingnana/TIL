import Homepage from "./component/pages/Homepage";
import EditPage from "./component/pages/EditPage";
import CreatePage from "./component/pages/CreatePage";
import ListPage from "./component/pages/ListPage";
import ShowPage from "./component/pages/ShowPage";

const routes = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/blogs",
    component: ListPage,
  },

  {
    path: "/blogs/create",
    component: CreatePage,
  },
  {
    path: "/blogs/:id/edit",
    component: EditPage,
  },
  {
    path: "/blogs/:id",
    component: ShowPage,
  },
];

export default routes;
