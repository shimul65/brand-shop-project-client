import { createBrowserRouter } from "react-router-dom";
import Root from '../MainLayout/Root/Root';
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import Article from "../Components/Article/Article";
import BestSeller from "../Components/BestSeller/BestSeller";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyCart from "../Pages/MyCart";
import PrivateRoute from "./PrivateRoute";
import BrandProducts from "../Pages/BrandProducts";
import ProductDetails from "../Pages/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct";


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
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path: "/brandProducts/:brandName",
                element: <BrandProducts></BrandProducts>,
                loader: () => fetch('https://brand-shop-assignment-server-side-k7leokvhz-shimuls-projects.vercel.app/products')
            },
            {
                path: "/productDetails/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-assignment-server-side-k7leokvhz-shimuls-projects.vercel.app/products/${params?.id}`)
            },
            {
                path: "/updateProduct/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://brand-shop-assignment-server-side-k7leokvhz-shimuls-projects.vercel.app/products/${params?.id}`)
            },
            {
                path: "/myCart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://brand-shop-assignment-server-side-k7leokvhz-shimuls-projects.vercel.app/cartProducts')
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