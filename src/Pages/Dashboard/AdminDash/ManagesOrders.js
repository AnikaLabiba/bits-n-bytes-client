import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import CancelOrderModal from '../UserDash/CancelOrderModal';
import OrderRow from './OrderRow';

const ManagesOrders = () => {
    const [cancelOrder, setCancelOrder] = useState(null)
    const { data: orders, isLoading, refetch } = useQuery('orders', () =>
        fetch('https://safe-escarpment-45724.herokuapp.com/orders', {
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
            <h2 className='text-center text-2xl font-bold'>All {orders.length} Orders Found</h2>
            <div className="overflow-x-auto">
                <table className="lg:table md:table table-auto">

                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => <OrderRow
                            key={order._id}
                            index={index}
                            order={order}
                            setCancelOrder={setCancelOrder}
                            refetch={refetch}
                        ></OrderRow>)}

                    </tbody>
                </table>
            </div>
            {
                cancelOrder && <CancelOrderModal
                    cancelOrder={cancelOrder}
                    setCancelOrder={setCancelOrder}
                    refetch={refetch}
                ></CancelOrderModal>
            }
        </div>
    );
};

export default ManagesOrders;