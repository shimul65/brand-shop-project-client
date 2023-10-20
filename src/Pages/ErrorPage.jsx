import { NavLink, useRouteError } from "react-router-dom";
import notFound from '../assets/404-img.png'


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="mx-auto py-20 md:py-40 card md:w-[700px] shadow-lg text-center bg-[#fcf7ee]">
            <div className="card-body">
                {
                    error.status === 404 &&
                    <div>
                        <img src={notFound} alt="" />
                        <h3 className="text-3xl my-5">Page Not Found</h3>
                        <NavLink to='./'>
                            <div className="card-actions justify-center mt-5">
                                <button className="ctrl-standard flex items-center mx-auto md:mx-0 fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">Go Back</button>
                            </div></NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;