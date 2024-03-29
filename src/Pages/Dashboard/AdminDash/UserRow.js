import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user

    const makeAdmin = () => {
        fetch(`https://safe-escarpment-45724.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make admin', {
                        position: toast.POSITION.TOP_CENTER
                    })
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Admin added Sucessfully', {
                        position: toast.POSITION.TOP_CENTER
                    })
                }

            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-accent btn-xs">Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;