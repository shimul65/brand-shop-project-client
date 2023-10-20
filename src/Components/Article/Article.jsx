import article1 from '../../assets/latest-article-img1.png'
import article2 from '../../assets/latest-article-img2.png'
import article3 from '../../assets/latest-article-img3.png'
import article4 from '../../assets/latest-article-img4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Article = () => {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className='container mx-auto my-20'>
            <h2 className=" my-20 text-3xl md:text-5xl font-extrabold text-center"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1050">THE LATEST ARTICLE</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-0 md:mx-4 lg:mx-0'>
                <div className='flex flex-col lg:flex-row mx-3 md:mx-0 gap-6 rounded-lg border-0 md:border items-center'
                    data-aos="fade-down"
                    data-aos-duration="2000">
                    <div className='h-full'>
                        <img className='w-full object-cover' src={article1} alt="" />
                    </div>
                    <div className='px-6 space-y-6 my-3 lg:my-0 '>
                        <div className='flex justify-between'>
                            <p>20 July, 2023</p>
                            <p>Beauty
                                Makeup</p>
                        </div>
                        <h2 className='text-3xl font-semibold'>
                            The Ultimate Guide to Natural Beauty Products.
                        </h2>
                        <p>
                            Explore the world of organic, clean beauty solutions......
                        </p>
                        <button className="ctrl-standard flex items-center w-32 fx-sliderIn btn rounded-full bg-black hover:text-black text-sm font-medium md:font-extrabold text-[#FFF] hover:border-black">Read More</button>
                    </div>
                </div>
                <div className='flex-col flex rounded-lg lg:flex-row mx-3 md:mx-0 gap-6 border-0 md:border items-center'
                    data-aos="fade-down"
                    data-aos-duration="2000">
                    <div className='h-full'>
                        <img className='w-full object-cover' src={article2} alt="" />
                    </div>
                    <div className='px-6 space-y-6 my-3 lg:my-0'>
                        <div className='flex justify-between'>
                            <p>
                                5 May, 2023</p>
                            <p>Beauty
                                Makeup</p>
                        </div>
                        <h2 className='text-3xl font-semibold'>
                            10 Must-Try Makeup Trends for 2023.
                        </h2>
                        <p>
                            Stay on-trend with these hot cosmetic looks......
                        </p>
                        <button className="ctrl-standard flex items-center w-32 fx-sliderIn btn rounded-full bg-black hover:text-black text-sm font-medium md:font-extrabold text-[#FFF] hover:border-black">Read More</button>
                    </div>
                </div>
                <div className='flex-col flex rounded-lg lg:flex-row mx-3 md:mx-0 gap-6 border-0 md:border items-center'
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <div className='h-full'>
                        <img className='w-full object-cover' src={article3} alt="" />
                    </div>
                    <div className='px-6 space-y-6 my-3 lg:my-0'>
                        <div className='flex justify-between'>
                            <p>20 June, 2023</p>
                            <p>Beauty
                                Makeup</p>
                        </div>
                        <h2 className='text-3xl font-semibold'>
                            The Science of Skincare: Unraveling the Myths.
                        </h2>
                        <p>
                            Discover the truth behind skincare misconceptions......
                        </p>
                        <button className="ctrl-standard flex items-center w-32 fx-sliderIn btn rounded-full bg-black hover:text-black text-sm font-medium md:font-extrabold text-[#FFF] hover:border-black">Read More</button>
                    </div>
                </div>
                <div className='flex-col flex rounded-lg lg:flex-row mx-3 md:mx-0 gap-6 border-0 md:border items-center'
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <div className='h-full'>
                        <img className='w-full object-cover' src={article4} alt="" />
                    </div>
                    <div className='px-6 space-y-6 my-3 lg:my-0'>
                        <div className='flex justify-between'>
                            <p>22 July, 2023</p>
                            <p>Beauty
                                Makeup</p>
                        </div>
                        <h2 className='text-3xl font-semibold'>
                            Eco-Friendly Beauty: Sustainable Choices for You.
                        </h2>
                        <p>
                            Learn how to make environmentally-conscious beauty selections......
                        </p>
                        <button className="ctrl-standard flex items-center w-32 fx-sliderIn btn rounded-full bg-black hover:text-black text-sm font-medium md:font-extrabold text-[#FFF] hover:border-black">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;