import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Spinner from "../../Components/Spinner/Spinner";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    const navigation = useNavigation();
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="">
                {
                    navigation.state === 'loading' ? <Spinner></Spinner> : <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;