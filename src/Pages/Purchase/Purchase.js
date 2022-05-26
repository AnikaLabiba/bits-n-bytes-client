import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import PurchaseForm from "./PurchaseForm";

const Purchase = () => {
    const [user] = useAuthState(auth)
    const [part, setPart] = useState({})
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/part/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id])

    const [Order, setOrder] = useState(0);
    const orderIncrement = () => {
        setOrder(Order + 1)
    }
    const orderDecrement = () => {
        setOrder(Order - 1)
    }
    let OrderQuantity
    if (Order > 0) {
        OrderQuantity = Order
    }

    return (
        <div class="hero lg:h-screen my-10">
            <div class="flex flex-col lg:flex-row-reverse ">
                <div class="card w-full ml-6">
                    <h2 className='text-3xl text-center font-bold'>Please confirm your order.</h2>

                    <div className='lg:flex-shrink-1 w-full text-center'>
                        <h2 class="text-primary text-xl">{part?.name}</h2>
                        <p>{part?.description}</p>
                        <div className='lg:flex my-4 w-full'>
                            <p class="text-primary font-bold text-lg">Min order: {part?.minOrderQuantity}</p>
                            <p class="text-secondary font-bold mx-3  text-lg">In stock {part?.availableQuantity}</p>
                            <p class="text-info font-bold  text-lg">${part?.price}</p>
                        </div>
                        <h3>Your order quantity</h3>
                        <div>
                            <button className='btn btn-sm btn-primary mr-4' onClick={orderDecrement}>-</button>
                            <input type="number" aria-controls='false'
                                value={Order ? OrderQuantity : part?.min_quantity}
                                name="OrderQuantity" className='input input-bordered input-accent text-accent w-20 text-center' />
                            <button className='btn btn-sm btn-primary ml-4' onClick={orderIncrement}>+</button>
                        </div>
                    </div>


                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <PurchaseForm OrderQuantity={OrderQuantity} part={part} Order={Order}></PurchaseForm>
                    </div>
                </div>
            </div>
        </div>

        // <div className="container">
        //     <h2 className='text-3xl text-center font-bold'>Hello <span className='text-primary'>{user?.displayName}!</span></h2>
        //     <h3 className='text-xl font-bold text-center'>Thanks for your buisness</h3>
        //     <div className="mt-8">

        //         <div className="card bg-base-100 shadow-xl">
        //             <div>

        //                 <div class="lg:flex p-10 justify-center items-center">
        //                     <div class="avatar flex-shrink-0">
        //                         <div class="w-2/5 rounded-full mx-auto">
        //                             <img className='w-1/5' src={part?.img} alt={part?.name} />
        //                         </div>
        //                     </div>
        //                     <div className='lg:flex-shrink-1 w-full text-left'>
        //                         <h2 class="card-title">{part?.name}</h2>
        //                         <p>{part?.description}</p>
        //                         <div className='lg:flex mt-2'>
        //                             <p class=" badge badge-primary text-white p-4">Min order: {part?.minOrderQuantity}</p>
        //                             <p class="badge mx-2 badge-secondary text-base py-2">In stock {part?.availableQuantity}</p>
        //                             <p class="badge mx-2 badge-accent text-base py-2">${part?.price}</p>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div className="ml-20">
        //                     <h4>Order Quantity</h4>
        //                     <button className='btn btn-primary mr-4' onClick={orderDecrement}>-</button>
        //                     <input type="number" aria-controls='false'
        //                         value={Order ? OrderQuantity : part?.min_quantity}
        //                         name="OrderQuantity" className='input input-bordered input-accent text-accent w-20 text-center' />
        //                     <button className='btn btn-primary ml-4' onClick={orderIncrement}>+</button>
        //                 </div>
        //             </div>
        //             <PurchaseForm OrderQuantity={OrderQuantity} part={part} Order={Order}></PurchaseForm>
        //         </div>

        //     </div>
        // </div>


    );
};

export default Purchase;