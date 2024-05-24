import { useNavigate } from "react-router-dom";
import UseAuth from "../Shared/UseAuth";

const OrderDetails = ({title}) => {
    const navigate = useNavigate()

    const {user} = UseAuth()
 
    const handleAddFood = food =>{
        if(user && user.email){
            alert("Added")
        }
        else{
            navigate('/login')
        }
    }

    return (
        <div>
<div className='grid grid-cols-4 mx-16 gap-4'>
                        {
                            title.map(sl => <div key={sl._id} className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <img className="object-cover object-center w-full h-56" src={sl.image} alt="food" />
                                <div className="px-6 py-4">
                                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{sl.name}</h1>

                                    <p className="py-2 text-gray-700 dark:text-gray-400">{sl.recipe}</p>

                                    <div className='text-center'>
                                        <button onClick={()=>handleAddFood(sl)} className='btn bg-black
                        border-t-yellow-400 text-white border-t-4'>
                                            Add To Cart</button>
                                    </div>

                                </div>
                            </div>)
                        }
                    </div>            
        </div>
    );
};

export default OrderDetails;