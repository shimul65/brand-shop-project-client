import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const product = useLoaderData();

    const { _id, name, brand_name, product_type, ratting, price, photo, description } = product || {};

    const navigateToPreviousPage = () => {
        window.history.back();
    };

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand_name = form.brand.value;
        const product_type = form.type.value;
        const ratting = form.ratting.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const updatedProduct = { name, brand_name, product_type, ratting, price, description, photo }
        console.log(updatedProduct);

        // send updated data to backend
        fetch(`https://brand-shop-assignment-server-side-nine.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div className="container mx-auto my-10 md:my-20">
            <h2 className="mb-10 text-3xl md:text-5xl font-extrabold text-center">Update Product</h2>
            <div className="mx-3">
                <form onSubmit={handleUpdateProduct}>
                    {/* form row */}
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="font-medium ">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Product name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="font-medium">Brand Name </span>
                            </label>
                            <label>
                                <select className="input input-bordered w-full" name="brand" defaultValue={brand_name} >
                                    <option disabled selected>Select Brand Name</option>
                                    <option>Alisa</option>
                                    <option>Mock Up</option>
                                    <option>Smile</option>
                                    <option>Antagony</option>
                                    <option>Iconic</option>
                                    <option>Natural</option>
                                    <option>New Wave</option>
                                    <option>Refresh</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="font-medium">Product Type</span>
                            </label>
                            <label className="input-group">
                                <select className="input input-bordered w-full" name="type" defaultValue={product_type} >
                                    <option disabled selected>Select Product Type</option>
                                    <option>Lipstick Shades</option>
                                    <option>Skin Moisturizers</option>
                                    <option>Fragrance Collection</option>
                                    <option>Nail Polish Colors</option>
                                    <option>Eyeshadow Palettes</option>
                                    <option>Makeup Brushes</option>
                                    <option>Shampoo & Conditioner Sets</option>
                                    <option>Face Cleansers</option>
                                    <option>Eyeliner Styles</option>
                                    <option>Body Lotions</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="font-medium">Ratting</span>
                            </label>
                            <label className="input-group">
                                <input type="number" min="1" max="10" name="ratting" defaultValue={ratting} placeholder="Give ratting out of 10" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="font-medium">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" defaultValue={price} min='1' name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="font-medium">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={description} name="description" placeholder="Short description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="font-medium">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={photo} name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value='Update Product' className="btn btn-block my-5 shadow-lg" />
                </form>
            </div>
            <NavLink onClick={navigateToPreviousPage}>
                <div className="card-actions justify-center mt-5">
                    <button className="ctrl-standard flex items-center mx-auto md:mx-0 md:w-auto  fx-sliderIn btn rounded-full bg-black hover:text-black text-xs md:text-base font-medium md:font-extrabold text-[#FFF] px-7 hover:border-black">Go Back</button>
                </div>
            </NavLink>
        </div>
    );
};

export default UpdateProduct;