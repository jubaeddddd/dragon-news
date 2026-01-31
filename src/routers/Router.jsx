
import {
  createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:'',
        element:<Home></Home>
      },
      {
        path:'/category/:id',
        element:<CategoryNews></CategoryNews>,
        loader:()=>fetch('/public/news.json')
      }
    ]
  },
  {
    path: "/auth",
    element: <h1>Authentication Layout</h1>,
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/*",
    element: <h1>Error 404</h1>,
  }
  


])


export default router;