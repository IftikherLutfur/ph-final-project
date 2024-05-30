import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Shared/UseAuth";
import useAdmin from "../../Hooks/useAdmin";
import { Circles } from "react-loader-spinner";

const AdminRoutes = ({ children }) => {

  const { user, load } = UseAuth()
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (load || isAdminLoading) {
    return <div className="mx-[600px] my-80">
      <Circles
        height="200"
        width="500"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <h2 className="text-2xl font-bold text-orange-400">LOADING.......</h2>
    </div>
  }

  if(user && isAdmin){
    return children;
  }


  return (
    <Navigate to='login' state={{form:location}} replace>

    </Navigate>
  );
};

export default AdminRoutes;