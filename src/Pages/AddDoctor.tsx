import React, { useEffect, useRef, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import TitilePage from "../components/TitilePage";
import Select from "../components/Select";
import { Controller, useForm } from "react-hook-form";
import { Field } from "../components/Field";
import {optionsCity, optionsDepartment, optionsGender , } from "../../data/doctorData"

type FormValues = {
  message?: string;
  email: string;
  firstname: string;
  lastname: string;
  address: string;
  department: string;
  gender: "male" | "female" | "Gender";
  phone: string;
  bio?: string;
  city: string;
};



interface ImageFile extends File {
  name: string;
}

function AddDoctor() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [image, setImage] = useState<File | undefined >(undefined);
  console.log(image);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    control,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      department: "Department",
      gender: "Gender",
      city: "City",
      phone: "",
      address: "",
      bio: "",
    },
  });

  // useEffect(() => {
  //   if (isSubmitSuccessful) reset();
  // }, [isSubmitSuccessful, reset]);

  function onSubmit(data: FormValues) {
    console.log("form submit", data);
  }

  // function onError(errors: FieldErrors<FormValues>) {
  //   console.log("Form errors", errors);
  // }

  // handle image
  function handleImageClick() {
    inputRef.current?.click();
  }
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    setImage(e.target.files?.[0]);
  }

  return (
    <>
      {/* Gloabal Container */}
      <section className=''>
        {/* Title */}
        <TitilePage>Add New Doctor</TitilePage>
        {/* Card Container */}
        <div className='flex flex-col p-6 bg-white rounded-lg'>
          {/* Header Section*/}
          <div className='pb-6 text-lg font-semibold tracking-wide border-b-gray-100'>
            Personal Information
          </div>
          {/* Border */}
          <div className='-mx-6 border-b boarder-b-gray-100'></div>

          {/* Main Section */}
          <div className='grid mt-6 grid-row-2 md:gap-x-5 gap-y-5 lg:grid-cols-3'>
            {/* Image profile*/}
            <div className='bg-indigo-50 rounded-xl sm:mx-0 md:mx-auto'>
              <div onClick={handleImageClick}>
                <input
                  onChange={handleImageChange}
                  ref={inputRef}
                  type='file'
                  accept='image/*'
                  hidden
                />
                {/* Image default profile */}
                <div className='relative flex items-center justify-center '>
                  {image ? (
                    <img
                      className='h-[12rem] object-cover '
                      src={URL.createObjectURL(image)}
                      alt={image.name}
                    />
                  ) : (
                    <>
                      <img
                        className=''
                        src='../../src/img/avatar-download.png'
                        alt='icon'
                      />
                      <p className='absolute text-sm font-semibold text-center md:text-yellow-50 md:text-sm lg:p-4'>
                        Drop Image Here Or Click To Upload.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              className='flex flex-col row-span-2 gap-4 mb-3 lg:col-span-2 '
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='flex flex-col gap-4 lg:flex-row'>
                <Field error={errors} errorMessage={errors?.firstname?.message}>
                  <input
                    {...register("firstname", {
                      required: "First Name is required",
                    })}
                    className='group input-form'
                    type='text'
                    placeholder='First Name'
                  />
                </Field>

                <Field error={errors} errorMessage={errors?.lastname?.message}>
                  <input
                    {...register("lastname", {
                      required: "Last Name is required",
                    })}
                    className='input-form'
                    type='text'
                    name='lastname'
                    placeholder='Last Name'
                  />
                </Field>
              </div>

              <div className='flex flex-col gap-4 lg:flex-row'>
                <Field error={errors} errorMessage={errors?.email?.message}>
                  <input
                    {...register("email", {
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Invaild email format",
                      },
                      required: "Email is required",
                    })}
                    className='input-form'
                    type='email'
                    placeholder='Email'
                  />
                </Field>
                <Field error={errors} errorMessage={errors?.phone?.message}>
                  <input
                    {...register("phone", {
                      required: "phone is required",
                    })}
                    className='input-form'
                    type='tel'
                    placeholder='Phone'
                  />
                </Field>
              </div>
              <div className='flex flex-col gap-4 lg:flex-row'>
                <Controller
                  name='department'
                  control={control}
                  rules={{ required: "Department is required" }}
                  render={({ field }) => (
                    <Select
                      error={errors}
                      errorMessage={errors.department?.message}
                      {...field}
                      className='input-form'
                      options={optionsDepartment}
                    />
                  )}
                />
                <Controller
                  name='gender'
                  control={control}
                  rules={{ required: "Gender is required" }}
                  render={({ field }) => (
                    <Select
                      error={errors}
                      errorMessage={errors.gender?.message}
                      {...field}
                      className='input-form'
                      options={optionsGender}
                    />
                  )}
                />
                {/* </Field> */}
              </div>
              <div className='flex flex-col gap-4 lg:flex-row'>
                <Controller
                  name='city'
                  control={control}
                  rules={{ required: "City is required" }}
                  render={({ field }) => (
                    <Select
                      error={errors}
                      errorMessage={errors.city?.message}
                      {...field}
                      className='input-form'
                      options={optionsCity}
                    />
                  )}
                />
                <input
                  {...register("address")}
                  className='input-form'
                  type='text'
                  placeholder='Address'
                />
              </div>
              <div className='flex flex-col gap-4 lg:flex-row'>
                <textarea
                  {...register("bio")}
                  className='w-full pl-3 align-top border rounded-md focus:outline-none focus:border-blueColor'
                  rows={4}
                  placeholder='Bio:'
                />
              </div>
              <button
                type='submit'
                className='self-start px-4 py-3 font-semibold text-white rounded-lg bg-blueColor hover:bg-opacity-90 disabled:bg-opacity-80'
              >
                Add Doctor
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddDoctor;
