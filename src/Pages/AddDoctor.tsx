import React, { useRef, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import TitilePage from "../components/TitilePage";
import Select from "../components/Select";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Field } from "../components/Field";

type FormValues = {
  message?: string;
  email: string;
  firstname: string;
  lastname: string;
  address: string;
  department: string;
  gender: "male" | "female";
  phone: string;
  bio?: string;
  city: string;
};

const optionsCity = [
  { value: "City", lable: "City" },
  { value: "Amman", lable: "Amman" },
  { value: "Zarqa", lable: "Zarqa" },
  { value: "Irbid", lable: "Irbid" },
  { value: "Aqaba", lable: "Aqaba" },
  { value: "Al-Mafraq", lable: "Al-Mafraq" },
  { value: "Maan", lable: "Maan" },
  { value: "As-Salt", lable: "As-Salt" },
  { value: "Jerash", lable: "Jerash" },
];

const optionsDepartment = [
  { value: "Department", lable: "Department" },
  { value: "Eye", lable: "Eye" },
  { value: "Gynecologist", lable: "Gynecologist" },
  { value: "Psychotherapist", lable: "Psychotherapist" },
  { value: "Orthopedic", lable: "Orthopedic" },
  { value: "Dentist", lable: "Dentist" },
  { value: "Gastrologist", lable: "Gastrologist" },
  { value: "Urologist", lable: "Urologist" },
  { value: "Neurologist", lable: "Neurologist" },
];

const optionsGender = [
  { value: "Gender", lable: "Gender" },
  { value: "Male", lable: "Male" },
  { value: "Female", lable: "Female" },
];

interface ImageFile extends File {
  name: string;
}

function AddDoctor() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [image, setImage] = useState<ImageFile | null>(null);
  const selectRef = useRef<HTMLSelectElement>(null); // Create a ref

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>();

  function onSubmit(data: FormValues) {
    console.log("form submit", data);
  }

  // handle image
  function handleImageClick() {
    inputRef.current?.click();
  }

  function handleImageChange(e: any) {
    const file = e.target.files[0];
    setImage(file);
  }

  return (
    <>
      {/* Gloabal Container */}
      <section className=''>
        {/* Title */}
        <TitilePage>Add New Doctor</TitilePage>
        {/* Card Container */}
        <div className='flex flex-col p-6 rounded-lg bg-white'>
          {/* Header Section*/}
          <div className='text-lg tracking-wide font-semibold pb-6 border-b-gray-100'>
            Personal Information
          </div>
          {/* Border */}
          <div className='border-b -mx-6 boarder-b-gray-100'></div>

          {/* Main Section */}
          <div className='grid grid-row-2 md:gap-x-5 mt-6 gap-y-5 lg:grid-cols-3'>
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
                      <p className='absolute text-center text-sm font-semibold md:text-yellow-50 md:text-sm  lg:p-4'>
                        Drop Image Here Or Click To Upload.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              className='flex flex-col mb-3 gap-4 row-span-2 lg:col-span-2 '
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

                {/* <Select
                  {...register("gender")}
                  options={optionsGender}
                  className='input-form'
                /> */}
                {/* </Field> */}
              </div>
              <div className='flex flex-col gap-4 lg:flex-row'>
                {/* <Select
                  {...register("city")}
                  options={optionsCity}
                  className='input-form'
                /> */}
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
                  className='w-full align-top rounded-md border pl-3 focus:outline-none focus:border-blueColor'
                  rows={4}
                  placeholder='Bio:'
                />
              </div>
              <button className='self-start py-3 px-4 bg-blueColor font-semibold text-white rounded-lg hover:bg-opacity-90'>
                Add Doctor
              </button>
            </form>
            <DevTool control={control} />
          </div>
        </div>
      </section>
    </>
  );
}

export default AddDoctor;
