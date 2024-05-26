import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "./AxiosSecure";
import UseAuth from "../Components/Shared/UseAuth";


const UseCart = () => {

    const secureAxios = AxiosSecure()
    const { user } = UseAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })

    return [cart, refetch]

};

export default UseCart;