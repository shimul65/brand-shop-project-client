import { NavLink, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="mx-auto mt-40 card md:w-[700px] bg-base-100 shadow-xl text-center">
            <div className="card-body">
                {
                    error.status === 404 &&
                    <div>
                        <h2 className="text-6xl md:text-[250px] font-semibold text-center">404</h2>
                        <h3 className="text-3xl my-5">Page Not Found</h3>
                        <NavLink to='./'>
                            <div className="card-actions justify-center mt-5">
                                <button className="btn btn-error text-xl ">Go Back</button>
                            </div></NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;