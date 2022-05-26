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
        const url = `https://safe-escarpment-45724.herokuapp.com/part/${id}`
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

        <div className="hero lg:h-screen my-10">
            <div className="flex flex-col lg:flex-row-reverse ">
                <div className="card w-full ml-6">
                    <h2 className='text-2xl text-center font-bold'>Please confirm your order.</h2>

                    <div className='lg:flex-shrink-1 w-full text-center'>
                        <h2 className="text-primary text-xl">{part?.name}</h2>
                        <p>{part?.description}</p>
                        <div className='lg:flex my-4 w-full'>
                            <p className="text-primary font-bold text-lg">Min order: {part?.minOrderQuantity}</p>
                            <p className="text-secondary font-bold mx-3  text-lg">In stock {part?.availableQuantity}</p>
                            <p className="text-info font-bold  text-lg">${part?.price}</p>
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
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <PurchaseForm OrderQuantity={OrderQuantity} part={part} Order={Order}></PurchaseForm>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Purchase;