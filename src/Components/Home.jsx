import Banner from "./Banner";
import Category from "./Category";
import ChefRecommended from "./ChefRecommended";
import ChefServe from "./ChefServe";
import Feature from "./Feature";
import Menu from "./Menu";
import Reviews from "./Reviews";


const Home = () => {
    return (
        <div>
<Banner/>
<Category/>
<ChefServe/>
<Menu/>
<ChefRecommended/>
<Feature/>
<Reviews/>
        </div>
    );
};

export default Home;