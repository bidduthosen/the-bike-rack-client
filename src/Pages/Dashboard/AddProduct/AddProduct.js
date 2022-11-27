import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const  {register, handleSubmit, formState: { errors }} = useForm();
    const [addProductError, setAddProductError] = useState('');
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;


    const {data: categories} = useQuery({
        queryKey: ["categoriesId"],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/categoriesId`);
            const data  = await res.json();
            return data;
        }
    })  

    const handleAddAProduct = data =>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: "POST",
            body: formData,
        })
        .then(res => res.json())
        .then(imageData =>{
            console.log(imageData.data.url)
            const images = imageData.data.url;
            const title = data.title;
            const location = data.location;
            const original_price = data.original_price;
            const resale_price = data.resale_price;
            const using_year = data.using_year;
            const details = data.details;
            const publishDate = data.publishDate;
            const id = data.option;
            const selectFav = data.selectFav;

            const categoriesProduct = {
                title,
                location,
                original_price,
                resale_price,
                image_url: images,
                using_year,
                details,
                categoryId: id,
                ownerName: user.displayName,
                ownerEmail: user.email,
                publishDate,
                choiceOption : selectFav,

            }
            fetch('http://localhost:5000/addAProduct',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(categoriesProduct)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success(`Add a Product ${title}`)
                    navigate('/dashboard/myProduct')
                }
            })
        })

        


    }
    return (
        <div className='flex justify-center items-center mt-5 mb-20'>
            <div className='shadow-xl bg-base-100 w-[95%] p-6 rounded-xl'>
                <form onSubmit={handleSubmit(handleAddAProduct)}>
                    <h2 className="text-2xl font-semibold border-b-4 border-gray-500 mb-7 p-4 md:w-3/12 ">Add a Product</h2>
                        <div className='grid md:grid-cols-2 gap-3'>
                            <div>
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input {...register('userName', { required: 'userName is required'})} type="text" defaultValue={user?.displayName} readOnly placeholder="userName" className="input input-bordered w-full" />
                            {errors.userName && <p role="alert" className='text-red-600'>{errors.userName?.message}</p>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Product title</span>
                            </label>
                            <input {...register('title',{ required: 'Please give me your product title?'})} type="text" placeholder="title" className="input input-bordered w-full mb-3" />
                            {errors.title && <p role="alert" className='text-red-600'>{errors.title?.message}</p>}
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-3'>
                        <div>
                                <label className="label">
                                    <span className="label-text">Categories</span>
                                </label>
                                <select {...register("option", { required: 'Please give me your options?'})} className="select select-bordered mb-3 w-full">
                                    {
                                        categories?.map(category => <option
                                        key={category._id}
                                        value={category.categoryId}
                                        >{category?.categoryId}. {category?.categoryName}</option>)
                                    }
                                </select>
                            </div>
                        <div>
                                <label className="label">
                                    <span className="label-text">Product Photo</span>
                                </label>
                            <input {...register('image', { required: 'Please give me your image?'})} type="file" className="file-input file-input-bordered w-full" />
                            {errors.image && <p role="alert" className='text-red-600'>{errors.image?.message}</p>}
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-3'>
                        <div>
                            <label className="label">
                                <span className="label-text">location</span>
                            </label>
                            <input {...register('location',{ required: 'Please give me your location?'})} type="text" placeholder="location" className="input input-bordered w-full mb-3" />
                            {errors.location && <p role="alert" className='text-red-600'>{errors.location?.message}</p>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Using year</span>
                            </label>
                            <input {...register('using_year',{ required: 'Please give me your using_year?'})} type="number" placeholder="using_year" className="input input-bordered w-full mb-3" />
                            {errors.using_year && <p role="alert" className='text-red-600'>{errors.using_year?.message}</p>}
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-3'>
                        <div>
                            <label className="label">
                                <span className="label-text">Original price</span>
                            </label>
                            <input {...register('original_price',{ required: 'Please give me your original_price?'})} type="number" placeholder="original_price" className="input input-bordered w-full mb-3" />
                            {errors.original_price && <p role="alert" className='text-red-600'>{errors.original_price?.message}</p>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Resale price</span>
                            </label>
                            <input {...register('resale_price',{ required: 'Please give me your resale_price?'})} type="number" placeholder="resale_price" className="input input-bordered w-full mb-3" />
                            {errors.resale_price && <p role="alert" className='text-red-600'>{errors.resale_price?.message}</p>}
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-3'>
                        <div>
                            <label className="label">
                                <span className="label-text">Contract Number</span>
                            </label>
                            <input {...register('number',{ required: 'Please give me your Contract Number?'})} type="number" placeholder="number" className="input input-bordered w-full mb-3" />
                            {errors.number && <p role="alert" className='text-red-600'>{errors.publishDate?.number}</p>}
                        </div>
                        <div>
                            <label className="label">
                                    <span className="label-text">Select Your fav</span>
                            </label>
                            <select {...register("selectFav")} className="select select-bordered w-full ">
                                <option selected>excellent</option>
                                <option>good</option>
                                <option>fair</option>
                            </select>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-3'>
                        <div>
                            <label className="label">
                                <span className="label-text">Publish Date</span>
                            </label>
                            <input {...register('publishDate',{ required: 'Please give me your publishDate?'})} type="date" placeholder="publishDate" className="input input-bordered w-full mb-3" />
                            {errors.publishDate && <p role="alert" className='text-red-600'>{errors.publishDate?.message}</p>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Product description</span>
                            </label>
                            <textarea {...register('details',{ required: 'Please give me your details?'})} className="textarea textarea-bordered mb-3 w-full" placeholder="description..."></textarea>
                            {errors.details && <p role="alert" className='text-red-600'>{errors.details?.message}</p>}
                        </div>
                    </div>
                    
                    {/* error message password  */}

                    <button type='submit' className="btn btn-active w-full my-3 uppercase">Add Product</button>
                </form>
                {addProductError && <p className='text-red-600'>{addProductError} </p> }
            </div>
        </div>
    );
};

export default AddProduct;