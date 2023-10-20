import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import banner4 from '../../assets/banner4.png'
import banner_bg from '../../assets/banner-vector3.svg'
import "./slick.css";
import "./slick-theme.css";
import Slider from "react-slick";


const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
    };


    return (
        <>
            <div className=' container mx-auto overflow-hidden '>
                <Slider {...settings}>
                    <div className="relative  my-10">
                        <div className='flex items-center'>
                            <div className="flex-1  space-y-10 px-5"  >
                                <div className='relative'>
                                    <h2 className="text-2xl text-center md:text-left lg:text-6xl font-bold">
                                        Skin Wellness <br />
                                        Takes Gentle Time
                                    </h2>
                                    
                                </div>
                                <p className='text-lg text-center md:text-left'>
                                    Whatever Your Summer Looks Like , Bring Your Own Heat With <br /> Up to 25% Off Lumin Brand
                                </p>
                                <button className="ctrl-standard flex items-center mx-auto md:mx-0 w-1/2 md:w-auto  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">Shop Now</button>
                            </div>
                            <div className="flex-1 hidden md:block">
                                <img src={banner1} className="" />
                            </div>
                        </div>
                        <div className='absolute bottom-0  md:right-1/2'>
                            <img src={banner_bg} alt="" />
                        </div>
                    </div>
                    <div className="relative  my-10">
                        <div className='flex items-center'>
                            <div className="flex-1  space-y-10 px-5"  >
                                <div className='relative'>
                                    <h2 className="text-2xl text-center md:text-left lg:text-6xl font-bold">
                                    Caring for Skin <br /> A Gentle Wellness Journey
                                    </h2>
                                    
                                </div>
                                <p className='text-lg text-center md:text-left'>
                                    Whatever Your Summer Looks Like , Bring Your Own Heat With <br /> Up to 25% Off Lumin Brand
                                </p>
                                <button className="ctrl-standard flex items-center mx-auto md:mx-0 w-1/2 md:w-auto  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">Shop Now</button>
                            </div>
                            <div className="flex-1 hidden md:block">
                                <img src={banner2} className="" />
                            </div>
                        </div>
                        <div className='absolute bottom-0  md:right-1/2'>
                            <img src={banner_bg} alt="" />
                        </div>
                    </div>
                    <div className="relative  my-10">
                        <div className='flex items-center'>
                            <div className="flex-1  space-y-10 px-5"  >
                                <div className='relative'>
                                    <h2 className="text-2xl text-center md:text-left lg:text-6xl font-bold">
                                   Your Skin <br /> Time for Wellness
                                    </h2>
                                    
                                </div>
                                <p className='text-lg text-center md:text-left'>
                                    Whatever Your Summer Looks Like , Bring Your Own Heat With <br /> Up to 25% Off Lumin Brand
                                </p>
                                <button className="ctrl-standard flex items-center mx-auto md:mx-0 w-1/2 md:w-auto  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">Shop Now</button>
                            </div>
                            <div className="flex-1 hidden md:block">
                                <img src={banner3} className="" />
                            </div>
                        </div>
                        <div className='absolute bottom-0  md:right-1/2'>
                            <img src={banner_bg} alt="" />
                        </div>
                    </div>
                    <div className="relative  my-10">
                        <div className='flex items-center'>
                            <div className="flex-1  space-y-10 px-5"  >
                                <div className='relative'>
                                    <h2 className="text-2xl text-center md:text-left lg:text-6xl font-bold">
                                    Wellness Gentle <br /> Skin Care Practices
                                    </h2>
                                   
                                </div>
                                <p className='text-lg text-center md:text-left'>
                                    Whatever Your Summer Looks Like , Bring Your Own Heat With <br /> Up to 25% Off Lumin Brand
                                </p>
                                <button className="ctrl-standard flex items-center mx-auto md:mx-0 w-1/2 md:w-auto  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">Shop Now</button>
                            </div>
                            <div className="flex-1 hidden md:block">
                                <img src={banner4} className="" />
                            </div>
                        </div>
                        <div className='absolute bottom-0  md:right-1/2'>
                            <img src={banner_bg} alt="" />
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )

};

export default Banner;

// style={{ backgroundImage: `url(${bannerbg})`, backgroundSize: '100% 100%', backgroundPosition: 'bottom' }}

