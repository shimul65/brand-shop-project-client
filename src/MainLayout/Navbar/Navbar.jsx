import { Link, NavLink } from "react-router-dom";
import logo from '../..//assets/logo.svg'
import './Navbar.css'


const Navbar = () => {

    const navLinks = <>
        <li className=" py-2"><NavLink to='/'>Home</NavLink></li>
        <li className=" py-2"><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li className=" py-2"><NavLink to='/myCart'>My Cart</NavLink></li>
        {/* {user && <>
            <li className=" py-2"><NavLink to='/gallery'>Gallery</NavLink></li>
            <li className=" py-2"><NavLink to='/blogs'>Blogs</NavLink></li>
        </>
        } */}
        <li className=" py-2"><NavLink to='/about'>About Us</NavLink></li>

    </>

    return (
        <div className="navbar font-semibold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className=""><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-center items-center gap-6 px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    // user ?
                    //     <div className="dropdown dropdown-end ">
                    //         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    //             <div className="w-24 rounded-full">
                    //                 <img src={user ? user.photoURL : profile} />
                    //             </div>
                    //         </label>
                    //         <ul tabIndex={0} className="menu border menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-fit">
                    //             <li>
                    //                 <div className="text-lg"> Name : <br />{user?.displayName}</div>

                    //             </li>
                    //             <li>
                    //                 <div className="text-lg">Email : <br />{user?.email}</div>

                    //             </li>
                    //             <li>
                    //                 <button onClick={handleLogOut}
                    //                     className="btn rounded-full bg-[#ff635c] hover:bg-[#fcb41e]  hover:text-primary-bg text-xs md:text-lg font-medium my-2 md:font-extrabold text-[#FFF] px-4 border-none">Log out</button>

                    //             </li>
                    //         </ul>
                    //     </div>
                    //     :
                    <Link to='/login'>
                        {/* <button
                                className="btn rounded-full bg-[#ff635c] hover:bg-[#fcb41e] hover:text-primary-bg text-xs md:text-lg font-medium md:font-extrabold text-[#FFF] px-7 border-none">LOG IN</button> */}
                        <button className="ctrl-standard  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">LOG IN</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;