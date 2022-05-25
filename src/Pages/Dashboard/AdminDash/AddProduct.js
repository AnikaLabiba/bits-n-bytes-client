import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {

        const part = {
            name: data.part,
            img: data.image,
            description: data.description,
            minOrderQuantity: data.minOrder,
            availableQuantity: data.availableQuantity,
            price: data.price
        }
        console.log(part);
        fetch('http://localhost:5000/part', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(part)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Part added successfully')
                    reset()
                }
                else {
                    toast.error('Failed to add the part')
                }
            })
    }
    return (
        <div>
            <h2 className='text-2xl text-center font-bold'>Add Product</h2>

            <form className='w-80 mt-5' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Part Name"
                        className="input input-sm input-bordered w-full max-w-xs"
                        {...register("part", {
                            required: {
                                value: true,
                                message: 'Part is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.part?.type === 'required' && <span className="label-text-alt text-red-500">{errors.part.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Image"
                        className="input input-sm input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Description"
                        className="input input-sm input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>

                </div>
                <div className="form-control w-full max-w-xs">
                    <input
                        type="number"
                        placeholder="Min Order"
                        className="input input-sm input-bordered w-full max-w-xs"
                        {...register("minOrder", {
                            required: {
                                value: true,
                                message: 'Min Order is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.minOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minOrder.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <input
                        type="number"
                        placeholder="Available Quantity"
                        className="input input-sm input-bordered w-full max-w-xs"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'Available Quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <input
                        type="number"
                        placeholder="Price"
                        className="input input-sm input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>
                <input className='btn btn-sm btn-accent w-full max-w-xs text-white' type="submit" value="Add" />
            </form>

        </div>
    );
};

export default AddProduct;