import React from 'react'
import logo from '../Images/logo.png'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition, Disclosure } from '@headlessui/react'
import {
    Bars3BottomLeftIcon,
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import PatientTable from './PatientTable'
import { Link } from 'react-router-dom'
import ConfirmedListTable from './ConfirmedListTable'
import TreatmentTable from './TreatmentTable'

const navigation = [
    // { name: 'Dashboard', href: '#', current: true, icon: HomeIcon },
    {
        name: 'Patients',
        current: false,
        children: [
            { name: 'Patient Details', to: "/doctordashb/PatientDetails" },
            { name: 'Previous Records', to: "/doctordashb/PreviousRecord" },
            { name: 'Treatment', to: '/doctordashb/Treatment' },
            { name: 'Settings', to: '#' },
        ],
    }
]

// Get Patient Details



const userNavigation = [
    { name: 'Your Profile', to: '#' },
    { name: 'Settings', to: '#' },
    { name: 'Sign out', to: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Treatment() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [value, setValue] = useState(0);

    function decrement() {
        setValue(prev => prev - 1);
    }

    function increment() {
        setValue(prev => prev + 1);
    }

    return (
        <div>


            {/* Static sidebar for desktop */}
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex flex-grow flex-col border-r border-gray-200 bg-white pt-5 overflow-y-scroll no-scrollbar " >
                    <div className="flex flex-shrink-0 self-center px-4">
                        <img
                            className="h-8 w-auto"
                            src={logo}
                            alt="Your Company"
                        />
                    </div>
                    <div className="mt-5 flex flex-grow flex-col">
                        <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
                            {navigation.map((item) =>
                                !item.children ? (
                                    <div key={item.name}>
                                        <Link
                                            to={item.to}
                                            className={classNames(
                                                item.current
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md'
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </div>
                                ) : (
                                    <Disclosure as="div" key={item.name} className="space-y-1">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                        'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                                    )}
                                                >
                                                    <svg
                                                        className={classNames(
                                                            open ? 'text-gray-400 rotate-0' : 'text-gray-300',
                                                            'mr-2 h-5 w-5 flex-shrink-0 -rotate-90 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                                                        )}
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" fill="currentColor" />
                                                    </svg>


                                                    {item.name}
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="space-y-1">
                                                    {item.children.map((subItem) => (
                                                        <Disclosure.Button
                                                            key={subItem.name}
                                                            as={Link}
                                                            to={subItem.to}
                                                            className="group flex w-full items-center rounded-md py-2 pl-10 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                        >
                                                            {subItem.name}
                                                        </Disclosure.Button>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                )
                            )}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col md:pl-64">
                <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
                    <button
                        type="button"
                        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex flex-1 justify-between px-4 ">
                        <div className="flex flex-1">
                            <div className="text-center w-full sm:text-[1.5rem] text-[1.1rem] self-center font-semibold text-[rgb(8  72 48)]">Doctor Dashboard</div>
                        </div>
                        <div className="ml-4 flex items-center md:ml-6">
                            <button
                                type="button"
                                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {/* {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))} */}
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>

                <main className="flex-1">
                    <div className="py-6">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        </div>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                            {/* Replace with your content */}
                            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Patient Information & Treatment</h3>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Name</dt>
                                            <dd className="mt-1 text-sm text-gray-900">Ankit Savani</dd>
                                        </div>
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Age</dt>
                                            <dd className="mt-1 text-sm text-gray-900">20</dd>
                                        </div>

                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Gender</dt>
                                            <dd className="mt-1 text-sm text-gray-900">Male</dd>
                                        </div>
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">App. Date</dt>
                                            <dd className="mt-1 text-sm text-gray-900">23-03-2023</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                    <dl className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 divide-x-2">
                                        <div className="sm:col-span-1 p-3 justify-center flex">
                                            <div className='sm:w-[500px]'>
                                                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                                                    Diagnosis
                                                </label>
                                                <div className="mt-1">
                                                    <textarea
                                                        rows={7}
                                                        name="comment"
                                                        id="comment"
                                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm resize-none"
                                                        defaultValue={''}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-1 p-3 justify-center flex">
                                            <div className='sm:w-[500px]'>
                                                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                                                    Treatments
                                                </label>
                                                <div className="mt-1">
                                                    <textarea
                                                        rows={7}
                                                        name="comment"
                                                        id="comment"
                                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm resize-none"
                                                        defaultValue={''}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </dl>
                                </div>
                                <div className='flex sm:p-3 border-t border-gray-200 px-4 py-5 sm:px-6'>
                                    <div className="px-4 sm:px-6 lg:px-8 w-full">
                                        <div className="sm:flex sm:items-center">
                                            <div className="sm:flex-auto">
                                                <h1 className="text-lg font-semibold text-gray-900">Prescriptions</h1>

                                            </div>

                                        </div>
                                        <div className="mt-8 flex flex-col">
                                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div className="w-full py-2 align-middle md:px-6 lg:px-8">
                                                    <div className="overflow-hidden  md:rounded-lg">
                                                        <table className="min-w-full divide-y divide-gray-300">
                                                            <thead className="bg-gray-50">
                                                                <tr className='rounded-2xl'>
                                                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                                        Sr. No.
                                                                    </th>
                                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                        Name of Prescription
                                                                    </th>
                                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                        Total Quantity
                                                                    </th>
                                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                        Duration
                                                                    </th>
                                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                        Add
                                                                    </th>
                                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                        Remove
                                                                    </th>


                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                                <tr>
                                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                                        1.
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                        <div className="flex max-w-lg rounded-lg shadow-sm">

                                                                            <input
                                                                                type="text"
                                                                                name="username"
                                                                                id="username"
                                                                                autoComplete="username"
                                                                                className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                        <div className="flex flex-row h-10 rounded-lg relative bg-transparent mt-1 ">
                                                                            <button
                                                                                data-action="decrement"
                                                                                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-10 rounded-l cursor-pointer outline-none"
                                                                                onClick={
                                                                                    decrement
                                                                                }
                                                                            >
                                                                                <span className="m-auto text-2xl font-thin">-</span>
                                                                            </button>
                                                                            <input
                                                                                type="number"
                                                                                className="w-14 outline-none focus:outline-none bg-white text-center  text-md hover:text-black focus:text-black md:text-base cursor-text [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-gray-700"
                                                                                name="custom-input-number"
                                                                                value={value}
                                                                                onChange={e => setValue(Number(e.target.value))}
                                                                            />
                                                                            <button
                                                                                data-action="increment"
                                                                                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-10 rounded-l cursor-pointer outline-none"
                                                                                onClick={
                                                                                    increment
                                                                                }
                                                                            >

                                                                                <span className="m-auto text-2xl font-thin">+</span>
                                                                            </button>

                                                                        </div>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Hemlo</td>
                                                                    <td>
                                                                        <button
                                                                            type="button"
                                                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                                                        >
                                                                            Add More
                                                                        </button>
                                                                    </td>
                                                                    <td >
                                                                        <button
                                                                            type="button"
                                                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                                <tr>
                                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                                        1.
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                        <div className="flex max-w-lg rounded-lg shadow-sm">

                                                                            <input
                                                                                type="text"
                                                                                name="username"
                                                                                id="username"
                                                                                autoComplete="username"
                                                                                className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                        <div className="flex flex-row h-10 rounded-lg relative bg-transparent mt-1 ">
                                                                            <button
                                                                                data-action="decrement"
                                                                                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-10 rounded-l cursor-pointer outline-none"
                                                                                onClick={
                                                                                    decrement
                                                                                }
                                                                            >
                                                                                <span className="m-auto text-2xl font-thin">-</span>
                                                                            </button>
                                                                            <input
                                                                                type="number"
                                                                                className="w-14 outline-none focus:outline-none bg-white text-center  text-md hover:text-black focus:text-black md:text-base cursor-text [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-gray-700"
                                                                                name="custom-input-number"
                                                                                value={value}
                                                                                onChange={e => setValue(Number(e.target.value))}
                                                                            />
                                                                            <button
                                                                                data-action="increment"
                                                                                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-10 rounded-l cursor-pointer outline-none"
                                                                                onClick={
                                                                                    increment
                                                                                }
                                                                            >

                                                                                <span className="m-auto text-2xl font-thin">+</span>
                                                                            </button>

                                                                        </div>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Hemlo</td>
                                                                    <td>
                                                                        <button
                                                                            type="button"
                                                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                                                        >
                                                                            Add More
                                                                        </button>
                                                                    </td>
                                                                    <td >
                                                                        <button
                                                                            type="button"
                                                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                                <tr>
                                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                                        1.
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                        <div className="flex max-w-lg rounded-lg shadow-sm">

                                                                            <input
                                                                                type="text"
                                                                                name="username"
                                                                                id="username"
                                                                                autoComplete="username"
                                                                                className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                        <div className="flex flex-row h-10 rounded-lg relative bg-transparent mt-1 ">
                                                                            <button
                                                                                data-action="decrement"
                                                                                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-10 rounded-l cursor-pointer outline-none"
                                                                                onClick={
                                                                                    decrement
                                                                                }
                                                                            >
                                                                                <span className="m-auto text-2xl font-thin">-</span>
                                                                            </button>
                                                                            <input
                                                                                type="number"
                                                                                className="w-14 outline-none focus:outline-none bg-white text-center  text-md hover:text-black focus:text-black md:text-base cursor-text [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-gray-700"
                                                                                name="custom-input-number"
                                                                                value={value}
                                                                                onChange={e => setValue(Number(e.target.value))}
                                                                            />
                                                                            <button
                                                                                data-action="increment"
                                                                                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-10 rounded-l cursor-pointer outline-none"
                                                                                onClick={
                                                                                    increment
                                                                                }
                                                                            >

                                                                                <span className="m-auto text-2xl font-thin">+</span>
                                                                            </button>

                                                                        </div>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Hemlo</td>
                                                                    <td>
                                                                        <button
                                                                            type="button"
                                                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                                                        >
                                                                            Add More
                                                                        </button>
                                                                    </td>
                                                                    <td >
                                                                        <button
                                                                            type="button"
                                                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="space-y-6 sm:space-y-5">
                                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pt-5">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                1. Medicine Name
                                            </label>
                                            <div className="mt-1 sm:col-span-2 sm:mt-0">
                                                <div className="flex max-w-lg rounded-md shadow-sm">

                                                    <input
                                                        type="text"
                                                        name="username"
                                                        id="username"
                                                        autoComplete="username"
                                                        className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>




                                    </div> */}

                                </div>
                            </div>


                            {/* /End replace */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Treatment