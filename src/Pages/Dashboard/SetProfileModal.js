import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SetProfileModal = ({ name, email, setIsModalOpen, userInfo }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        const user = {
            name: name,
            email: email,
            phone: data.phone,
            education: data.education,
            address: data.address,
            linkedIn: data.linkedIn,
        }
        //update user profile
        fetch(`https://safe-escarpment-45724.herokuapp.com/user/${email}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(updated => {
                if (updated.result.modifiedCount) {
                    toast('Profile updated', {
                        position: toast.POSITION.TOP_CENTER
                    })
                }
            })
        setIsModalOpen(false)
    }
    return (
        <div>
            <input type="checkbox" id="profileModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="profileModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Profile setting</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='lg:w-80 mx-auto'>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Education'
                                className="input input-bordered w-full max-w-xs"
                                {...register("education")}
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                disabled
                                className="input input-bordered w-full max-w-xs"
                                {...register("name")}
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                value={email}
                                disabled
                                className="input input-bordered w-full max-w-xs"
                                {...register("email",)} />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                placeholder='Phone '
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Address'
                                className="input input-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">LinkedIn</span>
                            </label>
                            <input
                                type="text"
                                placeholder='LinkedIn'
                                className="input input-bordered w-full max-w-xs"
                                {...register("linkedIn")}
                            />
                        </div>

                        <input type="submit" className='btn w-full max-w-xs text-white mt-3' value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SetProfileModal;