// import { useContext, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
// import toast from "react-hot-toast";
import { Link,  } from "react-router-dom";
// import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register = () => {

    //show password
    const [showPass, setShowPass] = useState(false);


    return (
        <div className="container mx-auto" >
            <div className="card-body mx-auto md:w-3/4 lg:w-1/2 border py-8 px-10 md:py-16 my-20 rounded-2xl shadow-2xl md:px-24">
                <form >
                    <h2 className="text-3xl font-semibold text-center">Register your account</h2>
                    <hr className="my-12" />
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className=" label-text font-semibold">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered" name="name" required />
                    </div>
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className=" label-text font-semibold">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter your photo url" className="input input-bordered" name="photoURL" required />
                    </div>
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className=" label-text font-semibold">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" className="input input-bordered" name="email" required />
                    </div>
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className=" label-text font-semibold">Password</span>
                        </label>
                        <div className=" relative ">
                            <input type={showPass ? "text" : "password"}
                                placeholder="Enter your password" className="input w-full input-bordered" name='password' required />
                            <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-8 text-2xl ">
                                {
                                    showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }</span>
                        </div>
                    </div>
                    <div className='mt-4 flex gap-2 items-center'>
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Accept Our Terms and Conditions</label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="ctrl-standard  fx-sliderIn btn rounded-full w-1/2 mx-auto bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">Register</button>
                    </div>
                </form>
                <p className="mt-8 text-center">Already Have An Account ? <span className="text-blue-600 font-medium underline"><Link to='/login'>Login</Link></span></p>
                <div className="divider">continue with</div>
                <div className="md:w-1/2 w-full">
                    {/* <SocialLogin></SocialLogin> */}
                </div>
            </div>
        </div>
    );
};

export default Register;