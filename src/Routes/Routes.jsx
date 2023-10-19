import { createBrowserRouter } from "react-router-dom";
import Root from '../MainLayout/Root/Root';
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import Article from "../Components/Article/Article";
import BestSeller from "../Components/BestSeller/BestSeller";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>,
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>,
            },
            {
                path: "/article",
                element: <Article></Article>,
            },
            {
                path: "/seller",
                element: <BestSeller></BestSeller>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
]);

export default Routes;