import { FaRegEdit } from "react-icons/fa";
import useMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { MdDelete } from "react-icons/md";
import AxiosSecure from "../../../Hooks/AxiosSecure";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const ManageItems = () => {
   
    const [menu, , refetch] = useMenu();
    const secureAxios = AxiosSecure();
    const handleDelete = async (user) =>{
    console.log(user);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const res = await secureAxios.delete(`/menu/${user._id}`)
        console.log(res.data);
        if(res.data.deletedCount>0){
         refetch();
         Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        }
      }
    });
    }
    
    return (
        <div>
            <SectionTitle heading='manage all item' subHeading="Hurry Up!"></SectionTitle>
            <div className="overflow-x-auto px-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            
          </label>
        </th>
        
       
        <th className="uppercase"></th>
        <th className="uppercase">Name</th>
        <th className="uppercase">Price</th>
        <th className="uppercase">Role</th>
        <th className="uppercase">aCTION</th>
      </tr>
    </thead>
    {
        menu.map((user, index)=><tbody key={user._id}>
            {/* row 1 */}
            <tr>
                
            <td className="text-xl font-semibold">
                {index + 1}
                <br/>
              </td>
                
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask rounded-lg w-20 h-20">
                      <img className="rounded-full border-2
                       border-orange-400 " src={user.image} />
                    </div>
                  </div>
                  
                </div>
              </td>
              <td className="text-xl font-semibold">
                {user.name}
                <br/>
              </td>
              <td className="text-xl font-semibold">{user.price}</td>
              <td className=" ">
               <NavLink to={`/dashboard/updateItem/${user._id}`}>
               <button className=" p-2
                 rounded-md text-2xl  text-black"><FaRegEdit/></button>
               </NavLink>
              </td>
              <th>
                <button onClick={()=>handleDelete(user)} className="p-2 bg-red-600 text-white rounded-md text-2xl"><MdDelete/></button>
                
              
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

export default ManageItems;