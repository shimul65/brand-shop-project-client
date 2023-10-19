import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleLogin, githubLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();


    const handleSocialLogin = (media) => {
        media()
            .then(result => {
                const user = result.user;
                console.log(user);

                // navigate after log in
                navigate(location?.state ? location.state : '/');
                toast.success('User Sign In Successfully')
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage);
            })
    }

    return (
        <div className="flex flex-col md:flex-row lg:flex-col justify-center items-center ">
            <div className="flex">
                <button onClick={() => handleSocialLogin(googleLogin)} className="ctrl-standard  fx-sliderIn btn rounded-full mx-auto bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">
                    <FcGoogle className="w-6 h-6 mr-2" /> <span className="md:hidden lg:block">Login with Google</span>
                </button>
            </div>
            <div className="flex">
                <button onClick={() => handleSocialLogin(githubLogin)} className="ctrl-standard  fx-sliderIn btn rounded-full mx-auto bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">
                    <AiOutlineGithub className="w-6 h-6 mr-2" /> <span className="md:hidden lg:block">Login with Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;