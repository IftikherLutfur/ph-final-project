import AxiosSecure from "../../../Hooks/AxiosSecure";
import SectionTitle from "../../SectionTitle/SectionTitle";
import UseAuth from "../../Shared/UseAuth";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
    const {user} = UseAuth();
    const secureAxios = AxiosSecure();

    const {data: payments=[]} = useQuery({
     queryKey:['payments', user?.email],
     queryFn: async ()=>{
        const res = await secureAxios.get(`/payments/${user.email}`)
        return res.data;
     }
    })

    return (
      
        <div>
            <SectionTitle heading='PAYMENT HISTORY' subHeading='---At a Glance!---' />
{payments.length}
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
        payments.map((user, index)=><tbody key={user._id}>
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
               
              </td>
              <th>
                <button ></button>
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

export default PaymentHistory;