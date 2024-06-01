import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

// TODO: Add publishable key:
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading='Payment'/>
            <Elements stripe={stripePromise}>
             <CheckOut/>
            </Elements>
        </div>
    );
};

export default Payment;