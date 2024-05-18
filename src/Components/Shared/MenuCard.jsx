
const MenuCard = ({ item }) => {

    const { name, recipe, image, price } = item;

    return (
        <div>
            <div className="flex mx-6 gap-5">
                <div>
                    <img className="w-[200px] border-2 border-orange-400 rounded-r-full rounded-b-full" src={image} alt="" />
                </div>
                <div className="flex">
                    <div>
                        <h1 className="text-xl font-semibold">{name}---------</h1>
                        <p>{recipe}</p>
                    </div>
                    <div>
                        <p className="font-bold text-orange-400">{price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;