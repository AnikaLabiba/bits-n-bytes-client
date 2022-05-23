import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SetProfileModal = ({ id, name, email, setIsModalOpen, userInfo }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgStorageKey = 'dbfa04656cc9dcc21680095a76a3195c'

    const onSubmit = async data => {
        const img = data.image[0]
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const user = {
                        ...userInfo,
                        name: name,
                        email: email,
                        phone: data.phone,
                        img: img,
                        address: data.address,
                        linkedIn: data.linkedIn,
                    }
                    //update user profile
                    fetch(`http://localhost:5000/user/${email}`, {
                        method: 'put',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(updated => {
                            console.log(updated);
                        })

                }
            })

        // }
        // console.log(user);
        setIsModalOpen(false)
    }
    return (
        <div>
            <input type="checkbox" id="profileModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="profileModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Profile setting</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='lg:w-80 mx-auto'>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
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