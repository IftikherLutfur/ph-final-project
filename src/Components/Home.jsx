import Banner from "./Banner";
import Category from "./Category";
import ChefRecommended from "./ChefRecommended";
import ChefServe from "./ChefServe";
import Feature from "./Feature";
import Menu from "./Menu";
import Reviews from "./Reviews";
import { Helmet } from 'react-helmet-async';



const Home = () => {
    return (
        <div>
<Helmet>
    <title>Bistro Boss - Home</title>
</Helmet>
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