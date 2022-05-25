import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'

const MyOrders = () => {
    const navigate = useNavigate()
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'get',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }

            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => setOrders(data));
        }
    }, [user])

    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>My orders </h2>
            <div class="overflow-x-auto">

                <table class="table lg:table md:table table-auto table-zebra">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders?.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.part}</td>
                                    <td>${order.price}</td>
                                    <td>
                                        {(order.price && !order.paid) && <Link to={``}> <button class="btn btn-xs bg-accent text-black">Pay</button></Link>}
                                        {(order.price && order.paid) && <span class="text-accent">Paid</span>}
                                        <button class="btn btn-xs bg-secondary text-black ml-2">Cancel</button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;