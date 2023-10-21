import { Link, NavLink, useLoaderData } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbBrandBooking } from "react-icons/tb";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const ProductDetails = () => {

    const product = useLoaderData();

    const { user } = useContext(AuthContext);
    const email = user.email;

    const { _id, name, brand_name, product_type, ratting, price, photo, description } = product || {};

    const navigateToPreviousPage = () => {
        window.history.back();
    };

    const handleAddToCart = () => {

        const cartProduct = { email, name, brand_name, product_type, price, photo }
        console.log(cartProduct);

        // send cart product to the backend
        fetch('https://brand-shop-assignment-server-side-nine.vercel.app/cartProducts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cartProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added to the cart successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }




    return (
        <div className="container mx-auto my-20">
            <div className="flex flex-col lg:flex-row mx-3 lg:mx-0 shadow-xl border">
                <div className="flex-1">
                    <figure><img className="h-[500px] w-full" src={photo} alt="product" title={_id} /></figure>
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
                        <Link onClick={handleAddToCart}>
                            <button className="ctrl-standard flex items-center mx-auto md:mx-0 md:w-auto  fx-sliderIn btn rounded-full bg-[#ff635c] hover:text-gray-700 hover:bg-[#ff635c] text-xs md:text-base font-bold text-white px-7 hover:border-[#fcb41e]">Add to Cart</button></Link>
                    </div>
                </div>
            </div>
            <NavLink onClick={navigateToPreviousPage}>
                <div className="card-actions justify-center mt-5">
                    <button className="ctrl-standard flex items-center mx-auto md:mx-0 md:w-auto  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">Go Back</button>
                </div>
            </NavLink>
        </div>
    );
};

export default ProductDetails;