import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";


const MyCart = () => {
    const cartProducts = useLoaderData();

    const { user } = useContext(AuthContext);
    const email = user.email;

    const products = cartProducts.filter(product => product.email === email);
    console.log(products);

    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto py-10 mt-10 mb-32  rounded-lg shadow-xl">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th  className="text-xl">Product Name</th>
                            <th className="text-xl hidden md:block">Brand & Type</th>
                            <th className="text-xl">Price</th>
                            <th className="text-xl">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length === 0 ? <>
                                <p className="text-center font-medium text-2xl md:text-4xl">You have not added any product to the cart</p>
                            </>
                                :
                                products?.map(product => <tr className="hover text-center" key={product._id}>
                                    <td className="flex justify-center">
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product?.photo} alt="product photo" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-base md:text-xl">{product?.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="hidden md:block">
                                        <span className="text-lg font-medium">{product?.brand_name}</span>
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{product?.product_type}</span>
                                    </td>
                                    <td className="md:text-xl text-base font-semibold">$ {product?.price}</td>
                                    <th>
                                        <button className="btn text-xl text-red-600"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                    </th>

                                </tr>)

                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;