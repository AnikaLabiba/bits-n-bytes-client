import React from 'react';

const OrderRow = ({ order, index, refetch }) => {
    const { name, part, price } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{part}</td>
            <td>${price}</td>
            {/* <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-accent btn-xs">Make Admin</button>}</td> */}
            <td><button className="btn btn-xs btn-secondary">Remove</button> </td>
        </tr>
    );
};

export default OrderRow;