import './Footer.css'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import visa from '../../assets/visa.png'
import mastercard from '../../assets/mastercard.png'
import american from '../../assets/american-express.png'
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="p-4 bg-[#f5f3f1]">
            <div className="container mx-auto">
                <div className="footer my-10">
                    <div className="">
                        <img className='w-[150px]' src={logo} alt="" />
                        <span className=" text-[#666666] text-lg font-bold mt-6">Join Our Newsletter & <br /> Get 30% Off !</span>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="relative flex items-center ">
                                <input type="text" placeholder="username@gmail.com"
                                    className="py-2 border-b-2 border-black bg-transparent outline-none" />
                                <HiOutlineArrowNarrowRight className='text-xl'></HiOutlineArrowNarrowRight>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <span className=" text-[#1C1C1C] text-lg font-bold">Support</span>
                        <a className="link link-hover">Help & Contact Us</a>
                        <a className="link link-hover">Return & Refunds</a>
                        <a className="link link-hover">Online Stores</a>
                        <a className="link link-hover">Privacy Policy</a>
                    </div>
                    <div>
                        <span className=" text-[#1C1C1C]  text-lg  font-bold">Company</span>
                        <a className="link link-hover">What we do</a>
                        <a className="link link-hover">Gift Offers</a>
                        <a className="link link-hover">Latest Posts</a>
                        <a className="link link-hover">F.A.Q</a>
                    </div>
                    <div>
                        <span className="text-[#1C1C1C]  text-lg  font-bold">Category</span>
                        <a className="link link-hover">Bath & Body</a>
                        <a className="link link-hover">Skin Care</a>
                        <a className="link link-hover">Hair Care</a>
                        <a className="link link-hover">Kids & Baby</a>
                    </div>
                    <div>
                        <span className="text-[#1C1C1C]  text-lg  font-bold">Category</span>
                        <p className="">Get your desired product by <br /> payment us through the <br /> gateway system.</p>
                        <div className='flex  justify-around gap-3 my-2'>
                            <img className='w-10' src={visa} alt="" />
                            <img className='w-10' src={mastercard} alt="" />
                            <img className='w-10' src={american} alt="" />
                        </div>
                    </div>
                </div>
                <div className="footer footer-center p-5 footer2" >
                    <aside>
                        <p className=''>Copyright © 2023 -
                            Mohammad Shimul || Assignment-10 PH
                        </p>
                    </aside>
                </div>
            </div>
        </footer>
    );
};

export default Footer;