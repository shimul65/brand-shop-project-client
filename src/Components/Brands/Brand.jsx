import PropTypes from 'prop-types';

const Brand = ({ singleBrand }) => {
    const { id, brand_name, image } = singleBrand;

    return (
        <div className='border-black border p-1 rounded-t-full hover:rounded-t-none duration-300 ease-in-out'>
            <div className='rounded-t-full hover:rounded-t-none duration-300 ease-in-out bg-[#d6d5d5]'>
                <img className='w-60 px-4 pt-10 pb-5 duration-500 cursor-pointer hover:scale-110' title={`Brand ID : ${id}`} src={image} alt="" />
                <button className="ctrl-standard flex items-center mx-auto md:mx-0 w-full  fx-sliderIn btn  bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">{brand_name}</button>
            </div>
        </div>
    );
};

export default Brand;
Brand.propTypes = {
    singleBrand: PropTypes.object.isRequired
}