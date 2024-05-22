import { useParams } from 'react-router-dom';
import banner from '../../../src/home/banner.jpg'
import useMenu from '../../Hooks/UseMenu';
import Cover from '../OurMenu/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';


const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'desert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const[tabIndex , setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    const deserts = menu.filter(item => item.category === "dessert")
    const salad = menu.filter(item => item.category === "salad")
    const drinks = menu.filter(item => item.category === "drinks")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")


    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Order</title>
            </Helmet>
            <Cover img={banner} title={'OUR SHOP'} description={'Would you like to try a dish?'} />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='text-center mt-20 mb-10 text-xl font-bold'>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                {/* Salad */}
                <TabPanel>
                    <div className='grid grid-cols-4 mx-16 gap-4'>
                        {
                            salad.map(sl => <div key={sl._id} className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <img className="object-cover object-center w-full h-56" src={sl.image} alt="food" />
                                <p className='absolute text-xl font-bold bottom-3 rounded-sm bg-orange-400 p-px text-white'>{sl.price}</p>
                                <div className="px-6 py-4">
                                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{sl.name}</h1>

                                    <p className="py-2 text-gray-700 dark:text-gray-400">{sl.recipe}</p>

                                    <div className='text-center'>
                                        <button className='btn bg-black
                        border-t-yellow-400 text-white border-t-4'>
                                            Add To Cart</button>
                                    </div>

                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>

                {/* Pizza */}
                <TabPanel>
                    <div className='grid grid-cols-4 mx-16 gap-4'>
                        {
                            pizza.map(sl => <div key={sl._id} className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <img className="object-cover object-center w-full h-56" src={sl.image} alt="food" />
                                <div className="px-6 py-4">
                                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{sl.name}</h1>

                                    <p className="py-2 text-gray-700 dark:text-gray-400">{sl.recipe}</p>

                                    <div className='text-center'>
                                        <button className='btn bg-black
                        border-t-yellow-400 text-white border-t-4'>
                                            Add To Cart</button>
                                    </div>

                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>

                {/* Soups */}
                <TabPanel>
                    <div className='grid grid-cols-4 mx-16 gap-4'>
                        {
                            soup.map(sl => <div key={sl._id} className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <img className="object-cover object-center w-full h-56" src={sl.image} alt="food" />
                                <div className="px-6 py-4">
                                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{sl.name}</h1>

                                    <p className="py-2 text-gray-700 dark:text-gray-400">{sl.recipe}</p>

                                    <div className='text-center'>
                                        <button className='btn bg-black
                        border-t-yellow-400 text-white border-t-4'>
                                            Add To Cart</button>
                                    </div>

                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>

                {/* Deserts */}
                <TabPanel>
                    <div className='grid grid-cols-4 mx-16 gap-4'>
                        {
                            deserts.map(sl => <div key={sl._id} className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <img className="object-cover object-center w-full h-56" src={sl.image} alt="food" />
                                <div className="px-6 py-4">
                                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{sl.name}</h1>

                                    <p className="py-2 text-gray-700 dark:text-gray-400">{sl.recipe}</p>

                                    <div className='text-center'>
                                        <button className='btn bg-black
                        border-t-yellow-400 text-white border-t-4'>
                                            Add To Cart</button>
                                    </div>

                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>

                {/* Drinks */}
                <TabPanel>
                    <div className='grid grid-cols-4 mx-16 gap-4'>
                        {
                            drinks.map(sl => <div key={sl._id} className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <img className="object-cover object-center w-full h-56" src={sl.image} alt="food" />
                                <div className="px-6 py-4">
                                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{sl.name}</h1>

                                    <p className="py-2 text-gray-700 dark:text-gray-400">{sl.recipe}</p>

                                    <div className='text-center'>
                                        <button className='btn bg-black
                        border-t-yellow-400 text-white border-t-4'>
                                            Add To Cart</button>
                                    </div>

                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default Order;