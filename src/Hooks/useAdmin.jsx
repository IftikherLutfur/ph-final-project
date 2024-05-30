import { useQuery } from "@tanstack/react-query";
import UseAuth from "../Components/Shared/UseAuth";
import AxiosSecure from "./AxiosSecure";

const useAdmin = () => {
    console.log('123');
    const { user } = UseAuth();
    console.log(user);

    const secureAxios = AxiosSecure();
    const { data: isAdmin , isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled:!!user?.email,
        queryFn: async () => {
            const res = await secureAxios.get(`/users/admin/${user?.email}`);
            // console.log('res.data', res.data);
            return res.data?.admin;
        }
    })

    return [isAdmin , isAdminLoading]

};

export default useAdmin;