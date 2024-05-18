import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle/SectionTitle";

const ChefRecommended = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [])
    // const { name, recipe, image, price } = data;

    return (
        <div className="">
            <SectionTitle
            subHeading={'---Should Try---'}
            heading={'CHEF RECOMMENDS'}
            />
            <div className="grid grid-cols-3 gap-4 mx-5">
            {data.slice(0,9).map(dt=><div key={dt._id} className="max-w-xs h-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover w-full h-48 mt-2" src={dt.image} alt="FOOD" />
                <div className="px-4 mt-5 ">
                    <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{dt.name}</h1>
                    <p className="mt-1  text-sm text-gray-600 dark:text-gray-400">{dt.recipe}</p>
                </div>



                <div className="flex items-center mt-10 justify-between px-4 py-2 bg-gray-900">
                    <h1 className="text-lg font-bold text-white">${dt.price}</h1>
                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                </div>
            </div>)}

            </div>
        </div>
    );
};

export default ChefRecommended;