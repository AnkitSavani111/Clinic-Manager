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
import { BarsArrowUpIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import DoctorRecordTable from './DoctorRecordTable'
import Sidebar from './Navigation'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function PreviousRecord() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <Sidebar />
            <div>
                {/* Static sidebar for desktop */}
                <div className="flex flex-1 flex-col md:pl-64">
                    

                    <main className="flex-1">
                        <div className="py-6">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                            </div>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                                {/* Replace with your content */}

                                <DoctorRecordTable />


                                {/* /End replace */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default PreviousRecord