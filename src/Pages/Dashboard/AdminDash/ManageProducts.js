import React, { useState } from 'react';
import useParts from '../../../hooks/useParts';
import DeletePartModal from './DeletePartModal';

const ManageProducts = () => {
    const [deletingPart, setDeletingPart] = useState(null)
    const [parts] = useParts()
    return (
        <div>
            <h2>Manage Products</h2>
            <div class="overflow-x-auto">
                <table class="table table-auto">

                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-lg'>Part</th>
                            <th className='text-lg'>Image</th>
                            <th className='text-lg'>Price</th>
                            <th className='text-lg'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            parts.map((part, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{part.name}</td>
                                    <td>
                                        <img width={'50px'} src={part.img} alt="" />
                                    </td>
                                    <td>${part.price}</td>
                                    <td>
                                        <label onClick={() => setDeletingPart(part)} for="delete-confirmation-modal" class="text-accent font-bold hover:text-blue-400">Delete</label>

                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingPart && <DeletePartModal
                    deletingPart={deletingPart}
                    setDeletingPart={setDeletingPart}
                ></DeletePartModal>
            }
        </div>
    );
};

export default ManageProducts;