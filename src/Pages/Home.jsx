import Article from "../Components/Article/Article";
import Banner from "../Components/Banner/Banner";
import BestSeller from "../Components/BestSeller/BestSeller";
import Brands from "../Components/Brands/Brands";
import Service from "../Components/Service/Service";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Service></Service>
            <Brands></Brands>
            <BestSeller
            ></BestSeller>
            <Article></Article>
        </div>
    );
};

export default Home;