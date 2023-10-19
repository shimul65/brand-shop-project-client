import article1 from '../../assets/latest-article-img1.png'
import article2 from '../../assets/latest-article-img2.png'
import article3 from '../../assets/latest-article-img3.png'
import article4 from '../../assets/latest-article-img4.png'

const Article = () => {
    return (
        <div className='container mx-auto my-20'>
            <h2 className=" my-20 text-3xl md:text-5xl font-extrabold text-center">THE LATEST ARTICLE</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-0 md:mx-4 lg:mx-0'>
                <div className='flex flex-col lg:flex-row mx-3 md:mx-0 gap-6 rounded-lg border-0 md:border items-center'>
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
                            Aenean Eget Augue Idendtr Odio Efficitur.
                        </h2>
                        <p>
                            Software development is the process offer creatain onet computer software......
                        </p>
                        <button className="ctrl-standard flex items-center w-32 fx-sliderIn btn rounded-full bg-black hover:text-black text-sm font-medium md:font-extrabold text-[#FFF] hover:border-black">Read More</button>
                    </div>
                </div>
                <div className='flex-col flex rounded-lg lg:flex-row mx-3 md:mx-0 gap-6 border-0 md:border items-center'>
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
                            Aenean Eget Augue Idendtr Odio Efficitur.
                        </h2>
                        <p>
                            Software development is the process offer creatain onet computer software......
                        </p>
                        <button className="ctrl-standard flex items-center w-32 fx-sliderIn btn rounded-full bg-black hover:text-black text-sm font-medium md:font-extrabold text-[#FFF] hover:border-black">Read More</button>
                    </div>
                </div>
                <div className='flex-col flex rounded-lg lg:flex-row mx-3 md:mx-0 gap-6 border-0 md:border items-center'>
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
                            Aenean Eget Augue Idendtr Odio Efficitur.
                        </h2>
                        <p>
                            Software development is the process offer creatain onet computer software......
                        </p>
                        <button className="ctrl-standard flex items-center w-32 fx-sliderIn btn rounded-full bg-black hover:text-black text-sm font-medium md:font-extrabold text-[#FFF] hover:border-black">Read More</button>
                    </div>
                </div>
                <div className='flex-col flex rounded-lg lg:flex-row mx-3 md:mx-0 gap-6 border-0 md:border items-center'>
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
                            Aenean Eget Augue Idendtr Odio Efficitur.
                        </h2>
                        <p>
                            Software development is the process offer creatain onet computer software......
                        </p>
                        <button className="ctrl-standard flex items-center w-32 fx-sliderIn btn rounded-full bg-black hover:text-black text-sm font-medium md:font-extrabold text-[#FFF] hover:border-black">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;