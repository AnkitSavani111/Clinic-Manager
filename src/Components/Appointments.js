import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import logo from "../Images/logo.png";
import { Fragment } from "react";
import { Dialog, Menu, Transition, Disclosure } from "@headlessui/react";
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
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Appointment from "./Appointment";

const navigation = [
  // { name: 'Dashboard', href: '#', current: true, icon: HomeIcon },
  {
    name: "Patients",
    current: false,
    children: [
      { name: "Patient Details", to: "/receptiondashb/PatientDetails" },
      { name: "Add Patient", to: "/receptiondashb/AddPatient" },
      { name: "Confirm List", to: "/receptiondashb/ConfirmList" },
      { name: "Settings", to: "#" },
    ],
  },
  {
    name: "Projects",
    current: false,
    children: [
      { name: "Overview", element: <Link to='/receptiondashb/' /> },
      { name: "Members", to: "#" },
      { name: "Calendar", to: "#" },
      { name: "Settings", to: "#" },
    ],
  },
  {
    name: "Calendar",
    current: false,
    children: [
      { name: "Overview", to: "#" },
      { name: "Members", to: "#" },
      { name: "Calendar", to: "#" },
      { name: "Settings", to: "#" },
    ],
  },
  {
    name: "Documents",
    current: false,
    children: [
      { name: "Overview", to: "#" },
      { name: "Members", to: "#" },
      { name: "Calendar", to: "#" },
      { name: "Settings", to: "#" },
    ],
  },
  {
    name: "Reports",
    current: false,
    children: [
      { name: "Overview", to: "#" },
      { name: "Members", to: "#" },
      { name: "Calendar", to: "#" },
      { name: "Settings", to: "#" },
    ],
  },
];

const userNavigation = [
  { name: "Your Profile", to: "#" },
  { name: "Settings", to: "#" },
  { name: "Sign out", to: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Appointments() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [appointments, setAppointments] = useState([]);
  const [host_ip, setHost_ip] = useState("");

  axios.get(process.env.REACT_APP_API + "/user/ip").then((res) => {
    setHost_ip(res.data.ip);
  });
  const socket = io(`http://${host_ip}:4000`);

  socket.on("appointment", (data) => {
    console.log(data);
    getAppointments();
  });
  async function getAppointments() {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API + "/appointment"
      );
      setAppointments(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAppointments();
  }, []);

  // Render your appointments list
  return (
    // <div>
    //   <h1>Appointments</h1>
    //   <ul>
    //     {appointments.map((appointment, index) => (
    //       <li key={appointment._id}>
    //         <ul>{index}</ul>
    //         <ul>{appointment.status}</ul>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-40 md:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4 no-scrollbar'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 -mr-12 pt-2'>
                    <button
                      type='button'
                      className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XMarkIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex flex-shrink-0 items-center px-4 self-center'>
                  <img className='h-8 w-auto' src={logo} alt='Your Company' />
                </div>
                <div className='mt-5 h-0 flex-1 overflow-y-auto'>
                  <nav
                    className='flex-1 space-y-1 bg-white px-2'
                    aria-label='Sidebar'
                  >
                    <div className='flex flex-col'>Dashboard</div>
                    {navigation.map((item) =>
                      !item.children ? (
                        <div key={item.name}>
                          <Link
                            to={item.to}
                            className={classNames(
                              item.current
                                ? "bg-gray-100 text-gray-900"
                                : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md"
                            )}
                          >
                            {item.name}
                          </Link>
                        </div>
                      ) : (
                        <Disclosure
                          as='div'
                          key={item.name}
                          className='space-y-1'
                        >
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={classNames(
                                  item.current
                                    ? "bg-gray-100 text-gray-900"
                                    : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                  "group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                )}
                              >
                                <svg
                                  className={classNames(
                                    open
                                      ? "text-gray-400 rotate-0"
                                      : "text-gray-300",
                                    "mr-2 h-5 w-5 flex-shrink-0 -rotate-90 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400"
                                  )}
                                  viewBox='0 0 20 20'
                                  aria-hidden='true'
                                >
                                  <path
                                    d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                                    fill='currentColor'
                                  />
                                </svg>

                                {item.name}
                              </Disclosure.Button>
                              <Disclosure.Panel className='space-y-1'>
                                {item.children.map((subItem) => (
                                  <Disclosure.Button
                                    key={subItem.name}
                                    as={Link}
                                    to={subItem.to}
                                    className='group flex w-full items-center rounded-md py-2 pl-10 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
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
              </Dialog.Panel>
            </Transition.Child>
            <div className='w-14 flex-shrink-0' aria-hidden='true'>
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex flex-grow flex-col border-r border-gray-200 bg-white pt-5 overflow-y-scroll no-scrollbar '>
          <div className='flex flex-shrink-0 self-center px-4'>
            <img className='h-8 w-auto' src={logo} alt='Your Company' />
          </div>
          <div className='mt-5 flex flex-grow flex-col'>
            <nav
              className='flex-1 space-y-1 bg-white px-2'
              aria-label='Sidebar'
            >
              {navigation.map((item) =>
                !item.children ? (
                  <div key={item.name}>
                    <Link
                      to={item.to}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      {item.name}
                    </Link>
                  </div>
                ) : (
                  <Disclosure as='div' key={item.name} className='space-y-1'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={classNames(
                            item.current
                              ? "bg-gray-100 text-gray-900"
                              : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          )}
                        >
                          <svg
                            className={classNames(
                              open ? "text-gray-400 rotate-0" : "text-gray-300",
                              "mr-2 h-5 w-5 flex-shrink-0 -rotate-90 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400"
                            )}
                            viewBox='0 0 20 20'
                            aria-hidden='true'
                          >
                            <path
                              d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                              fill='currentColor'
                            />
                          </svg>

                          {item.name}
                        </Disclosure.Button>
                        <Disclosure.Panel className='space-y-1'>
                          {item.children.map((subItem) => (
                            <Disclosure.Button
                              key={subItem.name}
                              as={Link}
                              to={subItem.to}
                              className='group flex w-full items-center rounded-md py-2 pl-10 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
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
      <div className='flex flex-1 flex-col md:pl-64'>
        <div className='sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow'>
          <button
            type='button'
            className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <Bars3BottomLeftIcon className='h-6 w-6' aria-hidden='true' />
          </button>
          <div className='flex flex-1 justify-between px-4 '>
            <div className='flex flex-1'>
              <div className='text-center w-full sm:text-[1.5rem] text-[1.1rem] self-center font-semibold text-[rgb(8  72 48)]'>
                Reception Dashboard
              </div>
            </div>
            <div className='ml-4 flex items-center md:ml-6'>
              <button
                type='button'
                className='rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                <span className='sr-only'>View notifications</span>
                <BellIcon className='h-6 w-6' aria-hidden='true' />
              </button>

              {/* Profile dropdown */}
              <Menu as='div' className='relative ml-3'>
                <div>
                  <Menu.Button className='flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
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

        <main className='flex-1'>
          <div className='py-6'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'></div>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
              {/* Replace with your content */}

              <Appointments />

              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Appointments;
