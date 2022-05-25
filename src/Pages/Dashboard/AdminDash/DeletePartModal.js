import React from 'react';
import { toast } from 'react-toastify';

const DeletePartModal = ({ deletingPart, setDeletingPart, refetch }) => {
    const { _id, name } = deletingPart

    const handleDelete = () => {
        fetch(`http://localhost:5000/part/${_id}`, {
            method: 'delete',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast(`${name} is deleted`, {
                        position: toast.POSITION.TOP_CENTER
                    })
                    refetch()
                    setDeletingPart(null)
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirmation-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure? You want to delete {name}?</h3>
                    <div class="modal-action">
                        <button onClick={handleDelete} class="btn btn-error btn-xs">Delete</button>
                        <label for="delete-confirmation-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletePartModal;