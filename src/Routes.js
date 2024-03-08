import About from "./Pages/About/About";
import Articles from "./Pages/Articles/Articles";
import Panel from "./Pages/Panel/Panel";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Course from "./Pages/Course/Course";
import article from "./data1";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/Course/:courseId", element: <Course /> },
  { path: "/About", element: <About /> },
  {
    path: "/Articles/*",
    element: <Articles />,
    children: [
      { path: "javaScript", element: article[0].desc },
      { path: "php", element: article[1].desc },
      { path: "python", element: article[2].desc },
    ],
  },
  {
    path: "/Panel",
    element: (
      <PrivateRoute>
        <Panel />
      </PrivateRoute>
    ),
  },
  { path: "/Login", element: <Login /> },
];
export default routes;
