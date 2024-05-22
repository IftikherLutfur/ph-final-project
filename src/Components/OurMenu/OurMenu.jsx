import { Helmet } from "react-helmet-async";
import Cover from "./Cover";
import imgCover from '../../../src/home/banner3.jpg'
import useMenu from "../../Hooks/UseMenu";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import desert from '../../../src/home/dessert-bg.jpeg'
import pizzaImage from '../../../src/home/pizza-bg.jpg'
import saladImage from '../../../src/home/salad-bg.jpg'
import soupsImage from '../../../src/home/soup-bg.jpg'
import drink from '../../../src/home/Prime-Drink-Review--Science-Backed-Insights.avif'

const OurMenu = () => {
    const [menu] = useMenu();
    const deserts = menu.filter(items => items.category === "dessert")
    const salad = menu.filter(items => items.category === "salad")
    const drinks = menu.filter(items => items.category === "drinks")
    const soup = menu.filter(items => items.category === "soup")
    const offered = menu.filter(items => items.category === "offered")
    const pizza = menu.filter(items => items.category === "pizza")

    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Menu</title>
            </Helmet>

            <Cover img={imgCover} title={'our menu'} description={'Would you like to try a dish?'} />
            <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"} ></SectionTitle>
            {/* offered */}
            <MenuCategory item={offered} />

            {/* deserts */}
            <MenuCategory
            item={deserts}
            title={"dessert"}
            description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            coverImg={desert}
            />
            {/* Pizza */}
            <MenuCategory
            item={pizza}
            title={"pizza"}
            description={"Pizza is a beloved dish consisting of a dough base topped with tomato sauce, cheese, and various toppings. Originating in Italy, it has become a global favorite, enjoyed in countless variations from classic Margherita to gourmet specialties."}
            coverImg={pizzaImage}
            />
            {/* Salads */}
            <MenuCategory
            item={salad}
            title={"Salad"}
            description={"Salad is a versatile dish featuring a mix of vegetables, fruits, proteins, and dressings. Often served cold, it can include ingredients like lettuce, tomatoes, cucumbers, and more. Salads are popular for their health benefits, freshness, and endless customization possibilities."}
            coverImg={saladImage}
            />
            {/* Soup */}
            <MenuCategory
            item={soup}
            title={"Soup"}
            description={"Salad is a fresh, versatile dish made from a mix of vegetables, fruits, proteins, and dressings. Common ingredients include lettuce, tomatoes, cucumbers, and avocados. Often served cold, salads are valued for their health benefits, vibrant flavors, and endless customization options."}
            coverImg={soupsImage}
            />
            {/* Soup */}
            <MenuCategory
            item={drinks}
            title={"Drink"}
            description={"Prime Electrolyte Drink is a hydration beverage formulated with essential electrolytes, vitamins, and minerals. Designed to replenish fluids and nutrients lost during exercise, it supports athletic performance and recovery. Available in various flavors, it caters to fitness enthusiasts and athletes."}
            coverImg={drink}
            />

        </div>
    );
};

export default OurMenu;