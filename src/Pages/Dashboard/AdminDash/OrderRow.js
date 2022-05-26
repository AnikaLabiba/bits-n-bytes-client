import React, { useState } from 'react';

const OrderRow = ({ order, index, refetch, setCancelOrder }) => {
    const { name, part, price, paid } = order

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{part}</td>
            <td>${price}</td>
            <td>
                {paid &&
                    <select class="select select-bordered select-sm w-full bg-primary max-w-xs">
                        <option disabled selected>Pending</option>
                        <option><button className='btn btn-xs'>Shipped</button></option>
                    </select>
                }
                {
                    !paid && <>
                        <span className='text-secondary'>Unpaid</span>
                        <label onClick={() => setCancelOrder(order)} for="delete-confirmation-modal" className="btn btn-xs btn-secondary ml-1">Remove</label>
                    </>
                }
            </td>
        </tr>
    );
};

export default OrderRow;