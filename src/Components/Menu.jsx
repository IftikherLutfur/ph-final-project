import useMenu from "../Hooks/UseMenu";
import SectionTitle from "./SectionTitle/SectionTitle";
import MenuCard from "./Shared/MenuCard";

const Menu = () => {

    const [menu] = useMenu();
    const popularMenu = menu.filter(item=>item.category === 'popular')


    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const itemData = data.filter(item => item.category === "popular")
    //             setMenu(itemData);
    //         })
    // }, [])

    return (
        <div>

            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            />

           <div className="space-y-4 grid grid-cols-2 my-5">
           {popularMenu.map(item => <MenuCard
                key={item._id}
                item={item}
            />)}
           </div>

        </div>
    );
};

export default Menu;