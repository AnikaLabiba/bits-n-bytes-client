import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init'
import { toast } from "react-toastify";


const PurchaseForm = ({ OrderQuantity, part, Order }) => {
    const minimumOrder = part?.minOrderQuantity
    const AvailableQuantity = part?.availableQuantity
    const [user, loading, error] = useAuthState(auth)
    const [Error, setError] = useState('');
    const [Disable, setDisable] = useState(false);

    const user_name = user?.displayName;
    const user_email = user?.email;


    const handleSubmit = (event) => {
        event.preventDefault();
        const name = user?.displayName;
        const email = user_email;
        const orderQuantity = event.target.orderQuantity.value;
        const phone = event.target.number.value;
        const address = event.target.address.value;

        event.target.reset();

        if (orderQuantity < part?.minOrderQuantity) {
            setError("You Can Not Purchase Less Than Minimum Order Quantity")
            setDisable(true)
            toast.error(`You Have To Purchase Minimum ${part?.minOrderQuantity} Pieces!`)
        }
        else if (orderQuantity > part.availableQuantity) {
            setError("You Can Not Purchase More Than Available Products Quantity")
            setDisable(true)
            toast.error(`You Can Not Order More Than ${part.availableQuantity} Pieces!`)
        }
        else {
            const order = {
                name: name,
                email: email,
                part: part.name,
                price: part.price,
                quantity: orderQuantity,
                phone: phone,
                address: address

            }
            fetch('https://safe-escarpment-45724.herokuapp.com/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast("Order Placed Successfully!");
                })
        }
    };

    return (
        <>
            <h2 className="text-center font-bold text-2xl">Order Details</h2>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="form-control place-order-form">
                        <input
                            type="text"
                            className="input input-bordered"
                            value={user?.displayName}
                            readOnly
                            disabled
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="email"
                            className="input input-bordered mt-2"
                            value={user?.email}
                            readOnly
                            disabled
                        />
                    </div>

                    <div className="form-control">
                        <input
                            type="text"
                            className="input input-bordered my-2"
                            value={part?.name}
                            readOnly
                            disabled
                        />
                    </div>

                    <div className="form-control ">
                        <input
                            type="number"
                            className="input input-bordered "
                            placeholder="Your Quantity"
                            name="orderQuantity"
                            value={Order ? OrderQuantity : part?.minOrderQuantity}
                            required
                        />
                        <p className='text-red-500'>{Error || error}</p>


                    </div>
                    <div className="form-control ">
                        <input
                            type="number"
                            className="input input-bordered my-2"
                            placeholder="Your Phone Number"
                            name="number"
                            required
                        />
                    </div>
                    <div className="form-control ">
                        <textarea
                            type="textarea"
                            className="input input-bordered "
                            placeholder="Your Detail Address"
                            name="address"
                            required
                        />
                    </div>

                    <div className="form-control  mt-4">
                        <input disabled={OrderQuantity < minimumOrder || AvailableQuantity < OrderQuantity ? Disable : false} type="submit" value="purchase" className='btn btn-primary' />
                    </div>
                </form>
            </div>
        </>

    );
};

export default PurchaseForm;