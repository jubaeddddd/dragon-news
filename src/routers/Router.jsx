
import {
  createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import SignIn from "../Components/AuthLayout/SignIn";
import Register from "../Components/AuthLayout/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";

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
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/signIn',
        element:<SignIn></SignIn>
      },
      {
        path:'/auth/register',
        element:<Register></Register>
      }
    ]
  },
  {
    path: "/news-details/:newsId",
    element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    loader:()=>fetch('/public/news.json')
  },
  {
    path: "/*",
    element: <h1>Error 404</h1>,
  }
  


])


export default router;