import React, { useRef, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import TitilePage from "../components/TitilePage";
import Select from "../components/Select";

interface ImageFile extends File {
  name: string;
}

function AddDoctor() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  //@ts-ignore
  const [image, setImage] = useState<ImageFile | null>(null);

  // handle image
  function handleImageClick() {
    inputRef.current?.click();
  }

  function handleImageChange(e: any) {
    const file = e.target.files[0];
    setImage(file);
  }

  //handle submit
  function handleSubmit(e: any) {
    e.preventDefault();
  }

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
            {/* Image */}
            <div className='bg-indigo-50 rounded-xl sm:mx-0 md:mx-auto'>
              <div onClick={handleImageClick}>
                <input
                  onChange={handleImageChange}
                  ref={inputRef}
                  type='file'
                  accept='image/*'
                  hidden
                />
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
              onSubmit={handleSubmit}
            >
              <div className='flex flex-col gap-4 lg:flex-row'>
                <input
                  className='input-form'
                  type='text'
                  name='firstname'
                  placeholder='First Name'
                />
                <input
                  className='input-form'
                  type='text'
                  name='lastname'
                  placeholder='Last Name'
                />
              </div>
              <div className='flex flex-col gap-4 lg:flex-row'>
                <input
                  className='input-form'
                  type='email'
                  name='email'
                  placeholder='Email'
                />
                <input
                  className='input-form'
                  type='tel'
                  name='phone'
                  placeholder='Phone'
                />
              </div>
              <div className='flex flex-col gap-4 lg:flex-row'>
                <Select
                  options={optionsDepartment}
                  className='input-form'
                  name='department'
                />

                <Select
                  options={optionsGender}
                  className='input-form'
                  name='gender'
                />
              </div>
              <div className='flex flex-col gap-4 lg:flex-row'>
                <Select
                  options={optionsCity}
                  className='input-form'
                  name='city'
                />
                <input
                  className='input-form'
                  type='text'
                  name='address'
                  placeholder='Address'
                />
              </div>
              <div className='flex flex-col gap-4 lg:flex-row'>
                <textarea
                  className='w-full align-top rounded-md border pl-3 focus:outline-none focus:border-blueColor'
                  rows={4}
                  name='bio'
                  placeholder='Bio:'
                />
              </div>
              <button className='self-end py-3 px-4 bg-blueColor font-semibold text-white rounded-lg hover:bg-opacity-90'>
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
