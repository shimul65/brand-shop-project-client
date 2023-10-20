
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ singleBrand }) => {

    const { id, brand_name, image } = singleBrand;

    return (
        <Link to={`/brandProducts/${brand_name}`}>
            <div className='border-black border p-1 rounded-t-full hover:rounded-t-none duration-500 ease-in-out'>
                <div className='rounded-t-full hover:rounded-t-none duration-500 ease-in-out bg-[#d6d5d5]'>
                    <img className='w-60 px-4 pt-10 pb-5 duration-500 cursor-pointer hover:scale-110' title={`Brand ID : ${id}`} src={image} alt="" />
                    <button className="custom-btn w-full text-xs md:text-base font-medium md:font-extrabold  hover:border-black">{brand_name}<span></span><span></span><span></span><span></span></button>
                </div>
            </div></Link>
    );
};

export default Brand;
Brand.propTypes = {
    singleBrand: PropTypes.object.isRequired
}