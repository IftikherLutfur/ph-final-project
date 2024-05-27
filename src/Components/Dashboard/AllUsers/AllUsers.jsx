import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../../Hooks/AxiosSecure";
import deletePhoto from '../../../home/Group 87.png'
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
  const secureAxios = AxiosSecure();
 

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
   const res = await secureAxios.get('/users')
        return res.data;
        }
    })


    const handleMakeAdmin = user=>{
     secureAxios.patch(`/users/admin/${user._id}`)
     .then(res=>{
      console.log(res.data)
      if(res.data.modifiedCount > 0){
        refetch()
        Swal.fire({
          position: "bottom",
          icon: "success",
          title: `${user.name} is admin now!!`,
          showConfirmButton: false,
          timer: 1500
        });
      }
     })
    }

  const handleDelete = user=>{
    
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
       

        secureAxios.delete(`/users/${user._id}`)
        .then(res=>{
          console.log(res.data);
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
        <div className="mt-20 bg-white mx-5">        
       
       <div className="flex my-10 pt-10 justify-evenly">
        <h1 className="text-3xl">All Users</h1>
        <h1 className="text-3xl">Total Users: {users.length}</h1>
       </div>
      

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
        <th className="uppercase"> name</th>
        <th className="uppercase">Email</th>
        <th className="uppercase">Role</th>
        <th className="uppercase">aCTION</th>
      </tr>
    </thead>
    {
        users.map((user, index)=><tbody key={user._id}>
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
              <td className="text-xl font-semibold">{user.email}</td>
              <td className=" ">
               { user.role === 'admin' ? "Admin" : <button onClick={()=>handleMakeAdmin(user)} 
                className="bg-orange-600 p-2
                 rounded-md text-2xl  text-white"><FaUsers/></button>}
              </td>
              <th>
                <button onClick={()=>handleDelete(user)} className=""><img src={deletePhoto} alt="" /></button>
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

export default AllUsers;