// import { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProvider";
// import toast from "react-hot-toast";
import { useState } from "react";
// import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {


    //show password
    const [showPass, setShowPass] = useState(false);


    return (
        <div className="card-body mx-auto my-20 rounded-2xl shadow-2xl md:w-3/4 lg:w-1/2 border py-8 px-10 md:py-16 md:px-24">
            <form >
                <h2 className="text-3xl font-semibold text-center">Login your account</h2>
                <hr className="my-12" />
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email address " className="input input-bordered" name="email" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className=" relative ">
                        <input type={showPass ? "text" : "password"}
                            placeholder="Enter your password" className="input w-full input-bordered" name='password' required />
                        <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-8 text-2xl ">
                            {
                                showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }</span>
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="ctrl-standard  fx-sliderIn btn rounded-full w-1/2 mx-auto bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">LOG IN</button>
                </div>
            </form>
            <p className="mt-8 text-center">Don’t Have An Account ? <span className="text-red-600 underline font-medium"><Link to='/register'>Register</Link></span></p>
            <div className="divider">continue with</div>
            <div className="md:w-1/2 w-full">
                {/* <SocialLogin></SocialLogin> */}
            </div>
        </div>
    );
};

export default Login;