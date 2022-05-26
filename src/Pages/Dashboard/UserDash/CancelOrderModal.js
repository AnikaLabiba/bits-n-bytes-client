import React from 'react';
import { toast } from 'react-toastify';

const CancelOrderModal = ({ cancelOrder, setCancelOrder }) => {
    const { part, _id } = cancelOrder

    const handleCancelOrder = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: 'delete',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast(`${part} is deleted`, {
                        position: toast.POSITION.TOP_CENTER
                    })
                    // refetch()
                    setCancelOrder(null)
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirmation-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure? You want to cancel order for {part}?</h3>
                    <div class="modal-action">
                        <button onClick={handleCancelOrder} class="btn btn-error btn-xs">Yes, Cancel</button>
                        <label for="delete-confirmation-modal" class="btn btn-xs">Nope</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderModal;