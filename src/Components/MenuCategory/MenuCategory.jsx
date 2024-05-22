import { Link } from "react-router-dom";
import Cover from "../OurMenu/Cover";
import MenuCard from "../Shared/MenuCard";

const MenuCategory = ({item, title, coverImg , description}) => {
    return (
        <div className="">
             {title&&<Cover img={coverImg} title={title} description={description} />}
             <div className="space-y-4 grid grid-cols-2 my-5 mt-24">
           {item.map(it => <MenuCard
                key={it._id}
                item={it}
            />)}
           </div>
           <div className="text-center my-5 ">
         <Link to={`/order/${title}`}> <button className="btn bg-pink-400 text-xl
            text-white font-bold">Get Order</button></Link>
           </div>
        </div>
    );
};

export default MenuCategory;