import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast, { Toaster } from "react-hot-toast";
import AxiosSecure from "../../../Hooks/AxiosSecure";
import { useEffect, useState } from "react";
import UseCart from "../../../Hooks/UseCart";
import UseAuth from "../../Shared/UseAuth";


const CheckOut = () => {
   const stripe = useStripe();
   const [clientSecret, setClientSecret] = useState('');
   const [transaction, setTransaction] = useState();
   const elements = useElements();
   const secureAxios = AxiosSecure();
   const {user} = UseAuth(); 
   const [cart, refetch] = UseCart();
   const totalPrice = cart.reduce((total,item)=> total + item.price, 0) 

   useEffect(()=>{
    if(totalPrice>0){
        secureAxios.post('/create-payment-intent', {price: totalPrice})
    .then(res=>{
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
    })   
    }
},[secureAxios, totalPrice])

    const handlePayment = async (event) =>{
      event.preventDefault();
      if(!stripe || !elements){
        return;
      }

      const card = elements.getElement(CardElement);
      if(card === null){
          return;
      }

       const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: "card",
        card
       })

       if(error){
        console.log("payment error", error);
        toast.error(error.message)
       }
       else{
        console.log("Payment method", paymentMethod);
        toast.success('Payment Successful')
       }
    // confirm payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret , {
        payment_method:{
         card:card,
         billing_details:{
         email: user.email || "anonymous",
         name: user.displayName || "anonymous"
         }   
        }
    });

    if(confirmError){
        console.log("Confirm Error");
    }
    else{
        console.log('payment intent',paymentIntent);
        if(paymentIntent.status === "succeeded"){
            console.log('transaction id', paymentIntent.id);
            setTransaction(paymentIntent.id);

            // mow save the payment in the database 
            const payment = {
                email: user.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                date: new Date, //utc data convert. use moment js
                cartId: cart.map(item=> item._id),
                menuId: cart.map(item=>item.menuId),
                status: 'pending' 
            }
           const res = await secureAxios.post('/payments', payment)
           console.log('payment saved', res.data);
           refetch();
        }
    }

    }
    return (
        <form onSubmit={handlePayment}>
             <CardElement className="mx-24"
             options={
                {style:{
                    base:{
                        fontSize:'16px',
                        color: "#424770",
                        '::placeholder' :{
                            color:'#aab7c4',
                        }
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                }
            }}
             />
             
             <button disabled={!stripe || !clientSecret} className="btn mx-24 bg-orange-400 my-4">
                    pay
                </button>
                {transaction && <p className="mt-5 text-xl">Your transaction id is {transaction}</p>}
                <Toaster/>
        </form>
    );
};

export default CheckOut;