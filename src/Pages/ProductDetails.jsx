import { Link, NavLink, useLoaderData } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbBrandBooking } from "react-icons/tb";


const ProductDetails = () => {

    const product = useLoaderData();

    const { _id, name, brand_name, product_type, ratting, price, photo, description } = product || {};

    const navigateToPreviousPage = () => {
        window.history.back();
      };


    return (
        <div className="container mx-auto my-20">
            <div className="flex flex-col lg:flex-row mx-3 lg:mx-0 shadow-xl border">
                <div className="flex-1">
                    <figure><img className="h-[500px] w-full" src={photo} alt="product" /></figure>
                </div>

                <div className="card-body flex-1">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <div className="">
                        <p className="my-2  text-xl">Brand Name: <span className="font-semibold">{brand_name}</span></p>
                        <p className="text-lg">Product Type: <span className="font-semibold">{product_type}</span></p>
                        <p className="text-lg mt-2">Product Description: <span className="font-semibold">{description}</span></p>
                        <div className="text-xl flex items-center gap-3 my-2"><FcRating className="text-2xl"></FcRating>
                            <p className="">Ratings : <span className="font-semibold">{ratting}/10</span></p>
                        </div>
                        <div className="text-xl flex gap-3 my-2"><TbBrandBooking className="text-2xl mt-1"></TbBrandBooking>
                            <div className="flex items-center gap-2">
                                <p className=""> Price:</p>
                                <div className="flex items-center gap-1 font-semibold"><p className="text-3xl"><BsCurrencyDollar></BsCurrencyDollar></p>
                                    <span className="text-3xl">{price}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <Link to={`/productDetails/${_id}`}>
                            <button className="ctrl-standard flex items-center mx-auto md:mx-0 w-1/2 md:w-auto  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">Add to Cart</button></Link>
                    </div>
                </div>
            </div>
            <NavLink onClick={navigateToPreviousPage}>
                <div className="card-actions justify-center mt-5">
                <button
                            className="btn px-6 rounded-full bg-[#ff635c] hover:bg-[#fcb41e] hover:text-black text-xs md:text-lg font-medium md:font-medium text-[#FFF]   border-none">Go Back</button>
                </div>
            </NavLink>
        </div>
    );
};

export default ProductDetails;