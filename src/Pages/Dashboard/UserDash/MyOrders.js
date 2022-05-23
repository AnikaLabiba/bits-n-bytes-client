import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const email = user?.email
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/orders?email=${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>My orders </h2>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">

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
                                        <button class="btn btn-xs bg-accent text-black">Pay</button>
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