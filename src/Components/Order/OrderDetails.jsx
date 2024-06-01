import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Shared/UseAuth";
import AxiosSecure from "../../Hooks/AxiosSecure";
import UseCart from "../../Hooks/UseCart";
import toast, { Toaster } from "react-hot-toast";

const OrderDetails = ({ title }) => {
    const { image, name, price, recipe, _id } = title
    const navigate = useNavigate()
    const location = useLocation();
    const secureAxios = AxiosSecure()
    const [, refetch] = UseCart();

    const { user } = UseAuth()

    const handleAddFood = () => {

        if (user && user.email) {

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image
            }
            secureAxios.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if(res.data.insertedId){
                        toast.success(`${name} Add to my cart`)
                        refetch();
                    }
                })

        }


        else {
            navigate('/login', { state: { form: location } })
        }
    }

    return (
        <div className="">
            <div className=''>
                <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <img className="object-cover object-center w-full h-56" src={image} alt="food" />
                    <div className="px-6 py-4">
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h1>

                        <p className="py-2 text-gray-700
                         dark:text-gray-400">{recipe.slice(0, 80)}</p>

                        <div className='text-center mt-5'>
                            <button onClick={ handleAddFood} className='btn bg-black
                        border-t-yellow-400 text-white border-t-4'>
                                Add To Cart</button>
                                <Toaster/>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default OrderDetails;