'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

const MyForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className='flex flex-wrap justify-center gap-[10px] pt-[20px]'>

                <div className="relative z-0 w-[45%] mb-6 group">
                    <input
                        type="tel"
                        id="phone"
                        {...register('phone', {
                            required: 'شماره تلفن معتبر نیست',
                            pattern: {
                                value: /^[0-9]{10,14}$/,
                                message: 'شماره تلفن معتبر نیست'
                            }
                        })}
                        className={`block text-right py-4 px-[10px] w-full text-sm text-gray-900 bg-transparent rounded-md border-2 appearance-none focus:outline-none focus:ring-0 peer ${errors.phone ? 'border-red-500' : 'border-[#E9EBEB]'}`}
                        placeholder=" "
                    />
                    <label
                        htmlFor="phone"
                        className={`absolute right-0 px-[10px] text-sm text-gray-500 duration-300 transform -translate-y-4 scale-100 top-4 -z-10 origin-[100% 0%] peer-focus:right-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-4`}
                    >
                        شماره تلفن
                    </label>
                    {errors.phone && <p className="mt-2 text-right text-sm text-red-600">{errors.phone.message}</p>}
                </div>

                <div className="relative z-0 w-[45%] mb-6 group">
                    <input
                        type="text"
                        id="firstName"
                        {...register('firstName', { required: 'ابتدا نام را وارد کنید' })}
                        className={`block text-right py-4 px-[10px] w-full text-sm text-gray-900 bg-transparent rounded-md border-2 appearance-none focus:outline-none focus:ring-0 peer ${errors.firstName ? 'border-red-500' : 'border-[#E9EBEB]'}`}
                        placeholder=" "
                    />
                    <label
                        htmlFor="firstName"
                        className={`absolute right-0 px-[10px] text-sm text-gray-500 duration-300 transform -translate-y-4 scale-100 top-4 -z-10 origin-[100% 0%] peer-focus:right-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-4`}
                    >
                        نام و نام خانوادگی
                    </label>
                    {errors.firstName && <p className="mt-2 text-sm text-red-600 text-right">{errors.firstName.message}</p>}
                </div>

                <div className="relative z-0 w-[45%] mb-6 group">
                    <input
                        type="date"
                        id="birthDate"
                        {...register('birthDate', { required: 'ابتدا تاریخ تولد را وارد کنید' })}
                        className={`block text-right py-4 px-[10px] w-full text-sm text-gray-900 bg-transparent rounded-md border-2 appearance-none focus:outline-none focus:ring-0 peer ${errors.birthDate ? 'border-red-500' : 'border-[#E9EBEB]'}`}
                        placeholder=" "
                    />
                    <label
                        htmlFor="birthDate"
                        className={`absolute text-right right-0 px-[10px] text-sm text-gray-500 duration-300 transform -translate-y-4 scale-100 top-4 -z-10 origin-[100% 0%] peer-focus:right-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-4`}
                    >
                        تاریخ تولد
                    </label>
                    {errors.birthDate && <p className="mt-2 text-right text-sm text-red-600">{errors.birthDate.message}</p>}
                </div>

                <div className="relative z-0 w-[45%] mb-6 group">
                    <input
                        type="email"
                        id="email"
                        {...register('email', {
                            required: 'ایمیل معتبر نیست',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: 'ایمیل معتبر نیست'
                            }
                        })}
                        className={`block text-right py-4 px-[10px] w-full text-sm text-gray-900 bg-transparent rounded-md border-2 appearance-none focus:outline-none focus:ring-0 peer ${errors.email ? 'border-red-500' : 'border-[#E9EBEB]'}`}
                        placeholder=" "
                    />
                    <label
                        htmlFor="email"
                        className={`absolute text-right right-0 px-[10px] text-sm text-gray-500 duration-300 transform -translate-y-4 scale-100 top-4 -z-10 origin-[100% 0%] peer-focus:right-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-4`}
                    >
                        ایمیل
                    </label>
                    {errors.email && <p className="mt-2 text-sm text-right text-red-600">{errors.email.message}</p>}
                </div>

                <div className="relative z-0 w-[45%] mb-6 group">
                    <select
                        id="gender"
                        {...register('gender', { required: 'جنسیت را انتخاب کنید' })}
                        className={`block text-right py-4 px-[10px] w-full text-sm text-gray-900 bg-transparent rounded-md border-2 appearance-none focus:outline-none focus:ring-0 peer ${errors.gender ? 'border-red-500' : 'border-[#E9EBEB]'}`}
                        defaultValue=""
                    >
                        <option value="" disabled hidden></option>
                        <option value="male">مرد</option>
                        <option value="female">زن</option>
                    </select>
                    <label
                        htmlFor="gender"
                        className={`absolute right-0 px-[10px]  text-sm text-gray-500 duration-300  -translate-y-5 scale-100 top-4 -z-10 origin-[100% 0%] peer-focus:right-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-4`}
                    >
                        جنسیت
                    </label>
                    {errors.gender && <p className="mt-2 text-sm text-red-600 text-right">{errors.gender.message}</p>}
                </div>

                <div className="relative z-0 w-[45%] mb-6 group">
                    <select
                        id="militaryStatus"
                        {...register('militaryStatus', { required: 'وضعیت نظام وظیفه را انتخاب کنید' })}
                        className={`block text-right py-4 px-[10px] w-full text-sm text-gray-900 bg-transparent rounded-md border-2 appearance-none focus:outline-none focus:ring-0 peer ${errors.militaryStatus ? 'border-red-500' : 'border-[#E9EBEB]'}`}
                        defaultValue=""
                    >
                        <option value="" disabled hidden></option>
                        <option value="completed">پایان خدمت</option>
                        <option value="exempt">معافیت</option>
                        <option value="notStarted">مشمول</option>
                    </select>
                    <label
                        htmlFor="militaryStatus"
                        className={`absolute right-0 px-[10px] text-sm text-gray-500 duration-300 transform -translate-y-4 scale-100 top-3 -z-10 origin-[100% 0%] peer-focus:right-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-4`}
                    >
                        وضعیت نظام وظیفه
                    </label>
                    {errors.militaryStatus && <p className="mt-2 text-sm text-red-600 text-right">{errors.militaryStatus.message}</p>}
                </div>



                <div className="relative z-0 w-[90%] mb-6 group ">
                    <label className='text-right'>رزومه</label>
          <input
          
            type="file"
            id="file"
            {...register('file', {
              required: 'ابتدا رزومه را وارد کنید',
              validate: {
                maxSize: (file) => file[0]?.size <= 5 * 1024 * 1024 || 'حجم فایل باید کمتر از 5MB باشد',
              }
            })}
            className={`block text-center  bg-white  py-4 px-[10px] w-full text-sm text-gray-900 bg-transparent rounded-md border-2 appearance-none focus:outline-none focus:ring-0 peer ${errors.file ? 'border-red-500' : 'border-[#E9EBEB]'}`}
          />
          <label
            htmlFor="file"
            className={`absolute text-center  text-sm `}
          >
            یا رها کردن فایل در این قسمت <span className='text-[#2961E5]'>انتخاب فایل</span>
          </label>
          {errors.file && <p className="mt-2 text-sm text-red-600 text-right">{errors.file.message}</p>}
        </div>

            </div>

            <div className='pl-[50px]'>
                <button type="submit" className="w-[120px] px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default MyForm;
