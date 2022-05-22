import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useParts from '../../hooks/useParts';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const [orderQuantity, setOrderQuantity] = useState(0)
    const [part, setPart] = useState({})
    const [setParts] = useParts()

    useEffect(() => {
        const url = `http://localhost:5000/part/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id])

    // const { data: part, isLoading, refetch } = useQuery(['part', id], () => {
    //     fetch(`http://localhost:5000/part/${id}`)
    //         .then(res => res.json())
    // })



    const handleSubmit = event => {
        event.preventDefault()
        const quantity = event.target.orderQuan.value
        if (quantity < part.minOrderQuantity) {
            toast.error(`You need to order at least ${part.minOrderQuantity}`, {
                position: toast.POSITION.TOP_CENTER
            })
            return
        }
        else if (quantity > part.availableQuantity) {
            toast.error(`Only ${part.availableQuantity} in stock`, {
                position: toast.POSITION.TOP_CENTER
            })
            return
        }
        else {
            setOrderQuantity(quantity)
        }
        const order = {
            name: user?.displayName,
            email: user?.email,
            parrtId: id,
            part: part.name,
            price: part.price,
            quantity: quantity,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }

        fetch('http://localhost:5000/order', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log('success', data)
                    toast.info('Your order is Placed.', {
                        position: toast.POSITION.TOP_CENTER
                    })
                    event.target.reset()

                    //updating quantity to parts table
                    const oldQuantity = parseInt(part.availableQuantity)
                    const updatedQuantity = oldQuantity - quantity
                    const updatedPart = { ...part, availableQuantity: updatedQuantity }

                    const url = `http://localhost:5000/parts/${id}`
                    fetch(url, {
                        method: 'put',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(updatedPart)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                setParts(updatedPart)
                            }
                        })
                }

            })
    }
    return (
        <div className='my-10'>
            <h2 className='text-3xl text-center font-bold'>Hello <span className='text-primary'>{user?.displayName}!</span></h2>
            <h3 className='text-xl font-bold'>Thanks for your buisness</h3>

            <div class="hero lg:min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card lg:w-10/12">
                        <h2 className='text-3xl text-center font-bold'>Please confirm your order.</h2>
                        <div class="lg:flex p-10 justify-center items-center">
                            <div class="avatar flex-shrink-0">
                                <div class="w-2/5 rounded-full mx-auto">
                                    <img className='w-1/5' src={part.img} alt={part.name} />
                                </div>
                            </div>
                            <div className='lg:flex-shrink-1 w-full text-left'>
                                <h2 class="card-title">{part.name}</h2>
                                <p>{part.description}</p>
                                <div className='lg:flex mt-2'>
                                    <p class=" badge badge-primary text-base py-2">Min order: {part.minOrderQuantity}</p>
                                    <p class="badge mx-2 badge-secondary text-base py-2">In stock {part.availableQuantity}</p>
                                    <p class="badge mx-2 badge-accent text-base py-2">${part.price}</p>
                                    <p class="badge badge-info mx-2 text-base py-2">Order quantity: {orderQuantity}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card flex-shrink-1 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form className='mt-5' onSubmit={handleSubmit}>
                                <div class="form-control">
                                    <input type="text" value={user?.displayName} disabled class="input input-bordered" />
                                </div>
                                <div class="form-control my-2">
                                    <input type="email" value={user?.email} disabled class="input input-bordered" />
                                </div>
                                <div class="form-control my-2">
                                    <input name='address' type="text" placeholder='Address' class="input input-bordered" />
                                </div>
                                <div class="form-control my-2">
                                    <input name='phone' type="number" placeholder='Phone number' class="input input-bordered" />
                                </div>
                                <div class="form-control my-2">
                                    <input name='orderQuan' type="number" placeholder='Order Quantity' required class="input input-bordered" />
                                </div>
                                <input className='btn btn-primary w-full' type="submit" value="Confirm Order" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;