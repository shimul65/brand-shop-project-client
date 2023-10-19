import makeup1 from '../../assets/makeup-img1.png'
import makeup2 from '../../assets/makeup-img2.png'

const BestSeller = () => {
    return (
        <div className="container mx-auto my-10">
            <h2 className=" my-16 text-3xl md:text-5xl font-extrabold text-center">Our Best Sellers</h2>
            <div className="">
                <div className='flex flex-col-reverse gap-5 md:gap-0  mx-3 md:mx-0 md:flex-row-reverse items-center'>
                    <div className="flex-1 space-y-10"  >
                        <h2 className="text-2xl text-center lg:text-5xl font-bold">
                            They’re Kinda <br />Our Best Thing!
                        </h2>
                        <p className='text-lg text-center'>
                            Whatever Your Summer Looks Like, Bring <br /> Your Own Heat  With Up To 25% Off Lumin Brand.Pellentesque Ipsum Dui, Laoreet <br /> Vitae Ex In, Pellentesque Aliquam Leo.
                        </p>
                        <button className="ctrl-standard flex items-center mx-auto  w-1/2 md:w-auto  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">* Shop All Brows *</button>
                    </div>
                    <div className="flex-1 ">
                        <img src={makeup1} className="w-full" />
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row items-center gap-5 md:gap-0  mx-3 md:mx-0 mt-6 md:mt-0'>
                    <div className="flex-1  space-y-10 "  >
                        <h2 className="text-2xl text-center  lg:text-5xl font-bold">
                            Try On Your <br /> Perfect Best Makeup!
                        </h2>
                        <p className='text-lg text-center '>
                        Whatever Your Summer Looks Like, Bring <br /> Your Own Heat  With Up To 25% Off Lumin Brand.Pellentesque Ipsum Dui, Laoreet <br /> Vitae Ex In, Pellentesque Aliquam Leo.
                        </p>
                        <button className="ctrl-standard flex items-center mx-auto  w-1/2 md:w-auto  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">* Try It Now *</button>
                    </div>
                    <div className="flex-1">
                        <img src={makeup2} className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSeller;