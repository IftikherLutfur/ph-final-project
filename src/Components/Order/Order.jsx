import { useParams } from 'react-router-dom';
import banner from '../../../src/home/banner.jpg'
import useMenu from '../../Hooks/UseMenu';
import Cover from '../OurMenu/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import OrderDetails from './OrderDetails';


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
                   <OrderDetails title={salad}/>
                </TabPanel>

                {/* Pizza */}
                <TabPanel>
                <OrderDetails title={pizza}/>
                </TabPanel>

                {/* Soups */}
                <TabPanel>
                    <OrderDetails title={soup} />
                </TabPanel>

                {/* Deserts */}
                <TabPanel>
                <OrderDetails title={deserts}/>
                </TabPanel>

                {/* Drinks */}
                <TabPanel>
                <OrderDetails title={drinks}/>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default Order;