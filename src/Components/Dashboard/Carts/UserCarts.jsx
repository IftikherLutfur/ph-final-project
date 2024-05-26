import Swal from "sweetalert2";
import UseCart from "../../../Hooks/UseCart";

import deleteButton from '../../../home/Group 87.png'
import AxiosSecure from "../../../Hooks/AxiosSecure";


const UserCarts = () => {
    const [cart] = UseCart();
    const totalPrice = cart.reduce((total, item) =>  total + item.price , 0)
    const secureAxios = AxiosSecure();
    const [, refetch] = UseCart()

    const handleDelete = id =>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             

              secureAxios.delete(`/carts/${id}`)
              .then(res=>{
                if(res.data. deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    refetch(); 
                }
              })

            }
          });
    }
    return (
        <div className="bg-white">
            <div className="flex items-center justify-evenly  gap-20 mt-7 px-20 bg-white py-4">
            <div><h1 className="text-2xl font-bold">items:{cart.length}</h1></div>
            <div><h1 className="text-xl font-bold">Price:{totalPrice}</h1></div>
            <div><button className="btn bg-yellow-600 text-white">Pay</button></div>
            </div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            
          </label>
        </th>
        <th className="uppercase">item image</th>
        <th className="uppercase">Item name</th>
        <th className="uppercase">price</th>
        <th className="uppercase"></th>
      </tr>
    </thead>
    {
        cart.map(item=><tbody key={item._id}>
            {/* row 1 */}
            <tr>
              <th>
                
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask rounded-lg border-2 border-yellow-700 w-24 h-24">
                      <img src={item.image} />
                    </div>
                  </div>
                  
                </div>
              </td>
              <td className="text-xl font-semibold">
                {item.name}
                <br/>
              </td>
              <td className="text-xl font-semibold">{item.price}</td>
              <th>
                <button onClick={()=>handleDelete(item._id)} className=""><img src={deleteButton } alt="" /></button>
              </th>
            </tr>
            
          </tbody>)
    }
    {/* foot */}

    
  </table>
</div>
            
        </div>

    );
};

export default UserCarts;