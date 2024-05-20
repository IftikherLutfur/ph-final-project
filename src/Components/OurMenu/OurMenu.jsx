import { Helmet } from "react-helmet-async";
import Cover from "./Cover";
import imgCover from '../../../src/home/banner3.jpg'
import Menu from "../Menu";

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Menu</title>
            </Helmet>

            <Cover img={imgCover} title={'our menu'} description={'Would you like to try a dish?'} />
            <Menu/>
            <Cover img={imgCover} title={'our menu'} description={'Would you like to try a dish?'} />
            <Menu/>
            <Cover img={imgCover} title={'our menu'} description={'Would you like to try a dish?'} />
            <Menu/>


        </div>
    );
};

export default OurMenu;