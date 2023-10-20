import { useLoaderData, useParams } from "react-router-dom";
import SingleBrandProduct from "../Components/SingleBrandProduct/SingleBrandProduct";


const BrandProducts = () => {
    const { brandName } = useParams();
    const brandProducts = useLoaderData();

    console.log(brandName);
    console.log(brandProducts);

    const products = brandProducts.filter(product => product.brand_name === brandName);
    console.log(products);

    return (
        <div className="container mx-auto mb-16">
            <h2 className=" mt-20 text-2xl md:text-4xl font-extrabold text-center">All products of the Brand</h2>
            <h2 className="my-8 text-2xl text-[#ff635c] md:text-5xl font-extrabold text-center">{brandName}</h2>
            <div>
                {
                    products.length === 0 ? <>
                        <p className="text-center font-medium text-2xl md:text-4xl">No Products of the Brand {brandName} available right now</p>
                        <p className="text-center mt-4 font-medium text-2xl md:text-4xl">Please Stay With Us</p>
                    </>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{
                            products?.map(product => <SingleBrandProduct key={product.id} product={product}></SingleBrandProduct>)
                        }
                        </div>
                }

            </div>
        </div>
    );
};

export default BrandProducts;

