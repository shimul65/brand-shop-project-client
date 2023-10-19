import Article from "../Components/Article/Article";
import Banner from "../Components/Banner/Banner";
import BestSeller from "../Components/BestSeller/BestSeller";
import Service from "../Components/Service/Service";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <BestSeller
            ></BestSeller>
            <Article></Article>
        </div>
    );
};

export default Home;