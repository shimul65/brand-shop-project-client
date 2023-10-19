

const AddProduct = () => {
    return (
        <div className="container mx-auto my-10 md:my-20">
            <h2 className="mb-10 text-3xl md:text-5xl font-extrabold text-center">Add Product</h2>
            <div className="mx-3">
                <form >
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
                            <label className="input-group">
                                <input type="text" name="brand_name" placeholder="Brand name" className="input input-bordered w-full" />
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
                                <input type="text" name="product_type" placeholder="Product type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="font-medium">Ratting</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="ratting" placeholder="Ratting" className="input input-bordered w-full" />
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
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
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


// Image
// Name
// Brand Name
// Type (If you choose the Technology and Electronics category ,then the types of products will be phone, computer, headphone, etc)
// Price
// Short description
// Rating
// Add button