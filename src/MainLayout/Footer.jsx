

const Footer = () => {
    return (
        <div className=" p-10 border border-red-600">
            <div className="flex justify-between">
                {/* <img src="./images/cup.png" alt=""> */}
                    <div className="flex justify-center items-center lg:mr-16 gap-10">
                        <p className="">Ready to get strated?</p>
                        <button className="btn bg-gradient-to-r from-gradient-start to-gradient-end text-white">Get
                            Started</button>
                    </div>
            </div>
            <div className="footer my-16">
                <div>
                    <span className=" text-[#1C1C1C] text-xl font-bold">Quick Links</span>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Insurance</a>
                    <a className="link link-hover">Privacy Policy</a>
                </div>
                <div>
                    <span className=" text-[#1C1C1C] text-xl font-bold">Our Service</span>
                    <a className="link link-hover">Life Insurance</a>
                    <a className="link link-hover">Car Insurance</a>
                    <a className="link link-hover">Health Insurance</a>
                    <a className="link link-hover">House Insurance</a>
                </div>
                <div>
                    <span className="text-[#1C1C1C] text-xl font-bold">Help</span>
                    <a className="link link-hover">FAQs</a>
                    <a className="link link-hover">Contact Us</a>
                </div>
                <div className="">
                    <span className=" text-[#1C1C1C] text-2xl font-bold">Subscribe to our <br /> newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com"
                                className="py-2 border-b-2 border-black bg-transparent outline-none" />
                            <button
                                className="btn absolute top-0 right-0 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end text-white"><i
                                    className="fa-solid fa-chevron-right"></i></button>
                        </div>
                        <div className=" space-x-6 pt-6 text-2xl">
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                            <a href=""><i className="fa-brands fa-twitter"></i></a>
                            <a href=""><i className="fa-brands fa-square-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;