import axios from "axios";
import { useState } from "react";
import Brand from "./Brand";

const Brands = () => {

    const [brands, setBrands] = useState([]);

    axios.get('brandData.json')
        .then(data => setBrands(data.data))


    return (
        <div className="container mx-auto my-20">
            <h2 className=" my-16 text-3xl md:text-5xl font-extrabold text-center">Popular Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-10 mx-3 md:mx-0">
                {
                    brands.map(brand => <Brand key={brand.id} singleBrand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;


