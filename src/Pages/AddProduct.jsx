import Swal from 'sweetalert2'


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand_name = form.brand.value;
        const product_type = form.type.value;
        const ratting = form.ratting.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const newProduct = { name, brand_name, product_type, ratting, price, description, photo }
        console.log(newProduct);

        // data send to server side
        fetch('https://brand-shop-assignment-server-side-nine.vercel.app/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className="container mx-auto my-10 md:my-20">
            <h2 className="mb-10 text-3xl md:text-5xl font-extrabold text-center">Add Product</h2>
            <div className="mx-3">
                <form onSubmit={handleAddProduct}>
                    {/* form row */}
                    <div className="md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="font-medium ">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Product name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="font-medium">Brand Name </span>
                            </label>
                            <label>
                                <select className="input input-bordered w-full" name="brand" >
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
                                <select className="input input-bordered w-full" name="type" >
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
                                <input type="number" min="1" max="10" name="ratting" placeholder="Give ratting out of 10" className="input input-bordered w-full" />
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
                                <input type="number" min='1' name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="font-medium">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
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
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value='Add Product' className="btn btn-block my-5 shadow-lg" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
