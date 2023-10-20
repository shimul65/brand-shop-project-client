import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbBrandBooking } from "react-icons/tb";
import PropTypes from 'prop-types';


const SingleBrandProduct = ({ product }) => {

    const { _id, name, brand_name, product_type, ratting, price, photo } = product;

    return (
        <div className="flex flex-col mx-3 lg:mx-0 shadow-xl border">
            <div className="flex-1">
                <figure><img className="h-[400px] w-full" src={photo} alt="product" /></figure>
            </div>

            <div className="card-body flex-1">
                <h2 className="card-title text-3xl">{name}</h2>
                <div className="">
                    <p className="my-2  text-xl">Brand Name: <span className="font-semibold">{brand_name}</span></p>
                    <p className="text-lg">Product Type: <span className="font-semibold">{product_type}</span></p>
                    <div className="text-xl flex items-center gap-3 my-2"><FcRating className="text-2xl"></FcRating>
                        <p className="">Ratings : <span className="font-semibold">{ratting}/10</span></p>
                    </div>
                    <div className="text-xl flex gap-3 my-2"><TbBrandBooking className="text-2xl mt-1"></TbBrandBooking>
                        <div className="flex items-center gap-2">
                            <p className=""> Price:</p>
                            <div className="flex items-center gap-1 text-[#ff635c] font-semibold"><p className="text-3xl"><BsCurrencyDollar></BsCurrencyDollar></p>
                                <span className="text-3xl">{price}</span></div>
                        </div>
                    </div>
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/productDetails/${_id}`}>
                        <button
                            className="btn w-full px-6 rounded-full text-gray-600 bg-[#fcb41e] hover:bg-[#ff635c] hover:text-white text-xs md:text-lg font-medium md:font-medium  border-none">Details</button></Link>
                    <Link to={`/updateProduct/${_id}`}>
                        <button
                            className="btn w-full px-6 rounded-full bg-[#ff635c] hover:bg-[#fcb41e] hover:text-black text-xs md:text-lg font-medium md:font-medium text-[#FFF]   border-none">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBrandProduct;
SingleBrandProduct.propTypes = {
    product: PropTypes.object.isRequired
}

