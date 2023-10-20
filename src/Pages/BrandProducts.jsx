import { NavLink, useLoaderData, useParams } from "react-router-dom";
import SingleBrandProduct from "../Components/SingleBrandProduct/SingleBrandProduct";

import banner1 from '../assets/banner-right-bg-img1.png'
import banner2 from '../assets/banner-right-bg-img2.png'
import banner3 from '../assets/banner-right-bg-img3.png'
import "../Components/Banner/slick.css";
import "../Components/Banner/slick-theme.css";
import Slider from "react-slick";


const BrandProducts = () => {
    const { brandName } = useParams();
    const brandProducts = useLoaderData();

    console.log(brandName);
    console.log(brandProducts);

    const products = brandProducts?.filter(product => product.brand_name === brandName);
    console.log(products);

    const navigateToPreviousPage = () => {
        window.history.back();
    };

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
        <div className="container mx-auto mb-16">

            {/* slider */}
            <div className="overflow-hidden hidden md:block">
                <Slider {...settings}>
                    <div className=" my-10 ">
                        <div className='flex items-center py-20' style={{ backgroundImage: `url(${banner1})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }} >
                            <div className="flex-1  space-y-10 pl-10"  >
                                <div className=''>
                                    <h2 className="text-2xl text-center md:text-left lg:text-6xl font-bold">
                                        Unleash Your Style <br />Exclusive Fashion <br /> Finds
                                    </h2>

                                </div>
                                <p className='text-xl text-center md:text-left'>
                                    Explore our latest collections and redefine <br /> your beauty routine with top-quality products.
                                </p>
                                <button className="ctrl-standard flex items-center mx-auto md:mx-0 w-1/2 md:w-auto  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className=" my-10 ">
                        <div className='flex items-center py-20' style={{ backgroundImage: `url(${banner2})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }} >
                            <div className="flex-1  space-y-10 px-5"  >
                                <div className='relative'>
                                    <h2 className="text-2xl text-center md:text-left lg:text-6xl font-bold">
                                        Revamp Your Wardrobe <br /> with Trendsetting <br /> Fashion
                                    </h2>

                                </div>
                                <p className='text-xl text-center md:text-left'>
                                    Refresh your wardrobe with trendsetting <br /> fashion thats always ahead of the curve.
                                </p>
                                <button className="ctrl-standard flex items-center mx-auto md:mx-0 w-1/2 md:w-auto  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className=" my-10 ">
                        <div className='flex items-center py-20' style={{ backgroundImage: `url(${banner3})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }} >
                            <div className="flex-1  space-y-10 px-5"  >
                                <div className='relative'>
                                    <h2 className="text-2xl text-center md:text-left lg:text-6xl font-bold">
                                        Elevate Your Beauty <br /> Game with Our <br /> Latest Collections
                                    </h2>

                                </div>
                                <p className='text-xl text-center md:text-left'>
                                    Elevate your style with exclusive fashion finds <br /> that set you apart from the crowd.
                                </p>
                                <button className="ctrl-standard flex items-center mx-auto md:mx-0 w-1/2 md:w-auto  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* Products */}
            <h2 className=" mt-10 text-2xl md:text-4xl font-extrabold text-center">All products of the Brand</h2>
            <h2 className="my-8 text-2xl text-[#ff635c] md:text-5xl font-extrabold text-center">{brandName}</h2>
            <div>
                {
                    products.length === 0 ? <>
                        <p className="text-center font-medium text-2xl md:text-4xl">No Products of the Brand {brandName} available right now</p>
                        <p className="text-center mt-4 font-medium text-2xl md:text-4xl">Please Stay With Us</p>
                    </>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{
                            products?.map(product => <SingleBrandProduct key={product.id} product={product}></SingleBrandProduct>)
                        }
                        </div>
                }

            </div>
            <NavLink onClick={navigateToPreviousPage}>
                <div className="card-actions justify-center mt-10">
                    <button className="ctrl-standard flex items-center mx-auto md:mx-0 md:w-auto  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">Go Back</button>
                </div>
            </NavLink>
        </div>
    );
};

export default BrandProducts;

