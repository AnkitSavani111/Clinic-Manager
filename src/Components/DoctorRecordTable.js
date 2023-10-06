import React from "react";
import { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { BarsArrowUpIcon, UsersIcon, MagnifyingGlassIcon, ChevronDoubleRightIcon } from '@heroicons/react/20/solid'
import { useNavigate } from "react-router-dom";
const getURL = "http://localhost:4000/";

function DoctorRecordTable() {
    const [openDetails, setOpenDetails] = useState(false);
    const cancelButtonRef = useRef(null);
    const [people, setPeople] = useState([]);
    const [deletionID, setDeletionID] = useState(0);
    const [updationID, setUpdatetionID] = useState(0);
    const [currentPatient, setCurrentPatient] = useState({});
    const [isUpdating, setIsUpdating] = useState(false);
    const [nameError, setNameError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [generalError, setGeneralError] = useState("");
    const [addressError, setAddressError] = useState("");
    const nav = useNavigate();

    const insert = () => {
        axios
            .get(getURL + "patient")
            .then((response) => {
                console.log(response);
                setPeople(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    useEffect(() => {
        insert();
    }, []);

    const handeDetails = (personId) => {
        axios
            .get(`${getURL}patient/${personId}`)
            .then((response) => {
                console.log(response);
                setCurrentPatient(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        setOpenDetails(true);
        setUpdatetionID(personId);
    };

    const validateForm = (data) => {
        var isValid = true;
        setNameError("");
        setGenderError("");
        setPhoneError("");
        setEmailError("");
        setAgeError("");
        setGeneralError("");
        setAddressError("");

        // Validate fields
        if (data.name === undefined || data.name === "") {
            setNameError("Name is required");
            isValid = false;
        }
        if (data.gender === undefined || data.gender === "") {
            setGenderError("Gender is required");
            isValid = false;
        }
        if (data.phone === undefined || data.phone === "") {
            setPhoneError("Phone number is required");
            isValid = false;
        }
        if (data.email === undefined || data.email === "") {
            setEmailError("Email address is required");
            isValid = false;
        }
        if (data.age === undefined || data.age === "") {
            setAgeError("Age is required");
            isValid = false;
        }
        if (data.address === undefined || data.address === "") {
            setAddressError("Address is required");
            isValid = false;
        }
        return isValid;
    };

    const updateRecord = (changedData) => {
        if (!validateForm(changedData)) {
            return;
        }

        axios
            .put(`${getURL}patient/${updationID}`, changedData)
            .then((response) => {
                console.log("Patient updated successfully:", response);
                setOpenDetails(false);
                setPeople((prevPeople) =>
                    prevPeople.map((person) =>
                        person._id === updationID ? { ...person, ...changedData } : person
                    )
                );
                handleShowToast("Patient updated successfully", "success");
            })
            .catch((error) => {
                console.error("Error updating patient:", error);
                handleShowToast("Error updating patient", "error");
            });
    };


    const deleteRecord = () => {
        axios
            .delete(`${getURL}patient/${deletionID}`)
            .then((response) => {
                console.log(response);
                setPeople(people.filter((person) => person._id !== deletionID));
                handleShowToast("Patient deleted successfully", "success");
            })
            .catch((error) => {
                console.log(error);
                handleShowToast("Error deleting patient", "error");
            });
    };

    const handleShowToast = (message, type) => {
        if (type === "error") {
            toast.error(message, {
                position: "bottom-center",
            });
            return;
        } else if (type === "success") {
            toast.success(message, {
                position: "bottom-center",
            });
            return;
        }
    };

    return (
        <div className='py-4'>
            <div className='h-auto'>
                <>
                    <div className='px-4 sm:px-6 lg:px-8'>
                        <div className='sm:flex sm:items-center'>
                            <Toaster />
                            <div className='sm:flex-auto'>
                                <h1 className='text-xl font-semibold text-gray-900'>
                                    Previous Records
                                </h1>
                            </div>
                            <div>
                                <p htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Search Patients
                                </p>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Enter Here"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                    >
                                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='mt-8 flex flex-col'>
                            <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                                <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                    <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                                        <table className='min-w-full divide-y divide-gray-300'>
                                            <thead className='bg-gray-50'>
                                                <tr>
                                                    <th
                                                        scope='col'
                                                        className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        scope='col'
                                                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                                    >
                                                        Mobile Number
                                                    </th>
                                                    <th
                                                        scope='col'
                                                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                                    >
                                                        Email
                                                    </th>
                                                    <th
                                                        scope='col'
                                                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                                    >
                                                        Gender
                                                    </th>
                                                    <th
                                                        scope='col'
                                                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                                    >
                                                        Age
                                                    </th>
                                                    <th
                                                        scope='col'
                                                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                                    >
                                                        Date
                                                    </th>
                                                    <th
                                                        scope='col'
                                                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                                                    >
                                                        Details
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody className='bg-white'>
                                                {people.map((person, personIdx) => (
                                                    <tr
                                                        key={person._id}
                                                        className={
                                                            personIdx % 2 === 0 ? undefined : "bg-gray-50"
                                                        }
                                                    >
                                                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                                                            {person.name}
                                                        </td>
                                                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                                            {person.phone}
                                                        </td>
                                                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                                            {person.email}
                                                        </td>
                                                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                                                            {person.gender}
                                                        </td>
                                                        <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6'>
                                                            {person.age}
                                                        </td>
                                                        <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6'>
                                                            {person.date_registration}
                                                        </td>
                                                        <td className='relative text-blue-500 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6'>
                                                            <button
                                                                key={person._id}
                                                                onClick={() => handeDetails(person._id)}
                                                            >
                                                                <ChevronDoubleRightIcon className="h-5 w-5  text-blue-500" aria-hidden="true" />
                                                            </button>
                                                        </td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition.Root show={openDetails} as={Fragment}>
                        <Dialog
                            as='div'
                            className='relative z-30'
                            initialFocus={cancelButtonRef}
                            onClose={() => {
                                setOpenDetails(false);
                                setNameError("");
                                setGenderError("");
                                setPhoneError("");
                                setEmailError("");
                                setAgeError("");
                                setGeneralError("");
                                setAddressError("");
                            }}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0'
                                enterTo='opacity-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                            >
                                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                            </Transition.Child>

                            <div className='fixed inset-0 z-10 overflow-y-auto'>
                                <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                                    <Transition.Child
                                        as={Fragment}
                                        enter='ease-out duration-300'
                                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                                        leave='ease-in duration-200'
                                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                                    >
                                        <Dialog.Panel className='relative rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:m-5 xl:mx-64'>
                                            <form
                                                className='space-y-8 divide-y divide-gray-200 px-20 py-10'
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    updateRecord({
                                                        name: document.getElementById("name").value,
                                                        phone: document.getElementById("phone").value,
                                                        email: document.getElementById("email").value,
                                                        age: document.getElementById("age").value,
                                                        address: document.getElementById("address").value,
                                                    });
                                                }}
                                            >
                                                <div className='space-y-8 divide-y divide-gray-200 sm:space-y-5'>
                                                    <div className='space-y-6 sm:space-y-5'>
                                                        <div>
                                                            <h3 className='text-lg font-medium leading-6 text-gray-900'>
                                                                Patient Information
                                                            </h3>
                                                        </div>
                                                        <div className='space-y-6 sm:space-y-5 '>
                                                            <div className='sm:grid sm:grid-cols-5 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
                                                                <p
                                                                    htmlFor='name'
                                                                    className='block text-sm font-medium text-gray-700 sm:mt-px'
                                                                >
                                                                    Full name
                                                                </p>
                                                                <div className='sm:justify-center sm:col-span-4 sm:mt-px'>
                                                                    <p className='text-sm text-gray-700 content-center'>
                                                                        {currentPatient.name}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className='sm:grid sm:grid-cols-5 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
                                                                <p
                                                                    htmlFor='gender'
                                                                    className='block text-sm font-medium text-gray-700 sm:mt-px'
                                                                >
                                                                    Gender
                                                                </p>
                                                                <p className='text-sm text-gray-700 content-center sm:col-span-4 capitalize'>
                                                                    {currentPatient.gender}
                                                                </p>
                                                            </div>
                                                            <div className='sm:grid sm:grid-cols-5 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
                                                                <p
                                                                    htmlFor='age'
                                                                    className='block text-sm font-medium text-gray-700 sm:mt-px'
                                                                >
                                                                    Age
                                                                </p>
                                                                <p className='text-sm text-gray-700 content-center sm:col-span-4'>
                                                                    {currentPatient.age}
                                                                </p>
                                                            </div>
                                                            <div className='sm:grid sm:grid-cols-5 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
                                                                <p
                                                                    htmlFor='service'
                                                                    className='block text-sm font-medium text-gray-700 sm:mt-px'
                                                                >
                                                                    Service
                                                                </p>
                                                                <p className='text-sm text-gray-700 content-center sm:col-span-4'>
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam fuga magnam minus, dicta quo laudantium ducimus sequi, iusto maxime, voluptas sunt doloribus neque beatae sapiente alias voluptatibus totam blanditiis tenetur delectus adipisci cum dolore.
                                                                </p>
                                                            </div>

                                                            <div className='sm:grid sm:grid-cols-5 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
                                                                <p
                                                                    htmlFor='diagnosis'
                                                                    className='block text-sm font-medium text-gray-700 sm:mt-px'
                                                                >
                                                                    Diagnosis
                                                                </p>
                                                                <p className='text-sm text-gray-700 content-center sm:col-span-4'>
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatem iure! Dolorem nulla, omnis cum dolore maxime eos odit hic, aliquam fuga quia praesentium dolores repellat! Quis dolore eius nobis fugiat enim sint possimus?
                                                                </p>
                                                            </div>
                                                            <div className='sm:grid sm:grid-cols-5 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
                                                                <p
                                                                    htmlFor='address'
                                                                    className='block text-sm font-medium text-gray-700 sm:mt-px'
                                                                >
                                                                    Treatment
                                                                </p>
                                                                <p className='text-sm text-gray-700 content-center sm:col-span-4'>
                                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam molestiae blanditiis eos dicta iusto, fugiat quis aperiam facere nisi impedit illum quo amet! Similique facilis corrupti quibusdam eum saepe repellendus atque magni quidem totam.
                                                                </p>
                                                            </div>
                                                            <div className='sm:grid sm:grid-cols-5 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
                                                                <p
                                                                    htmlFor='remark'
                                                                    className='block text-sm font-medium text-gray-700 sm:mt-px'
                                                                >
                                                                    Remark
                                                                </p>
                                                                <p className='text-sm text-gray-700 content-center sm:col-span-4'>
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat explicabo ab dolores porro necessitatibus illo! Reiciendis dicta perspiciatis, ducimus harum, ratione tenetur quas rem recusandae aperiam ullam voluptas debitis exercitationem error voluptatem corporis eaque.
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bg-gray-50 py-3 flex flex-row-reverse px-6 rounded-xl gap-x-5'>
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setOpenDetails(false);

                                                        }}
                                                        type='submit'
                                                        disabled={isUpdating}
                                                        className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                                    >
                                                        Done
                                                    </button>
                                                </div>
                                            </form>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition.Root>
                </>
            </div>
        </div>
    );
}

export default DoctorRecordTable;
