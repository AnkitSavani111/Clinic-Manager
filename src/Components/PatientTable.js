import React, { useEffect, useState } from 'react'
import axios from 'axios'

// date x
// age


// const people = [
//     { name: 'Lindsay Walton', mobile: '9xxxxxxxxxx', email: 'lindsay.walton@example.com', date: '10/05/2023' },
//     { name: 'Lindsay Walton', mobile: '9xxxxxxxxxx', email: 'lindsay.walton@example.com', date: '10/05/2023' },
//     { name: 'Lindsay Walton', mobile: '9xxxxxxxxxx', email: 'lindsay.walton@example.com', date: '10/05/2023' },
//     { name: 'Lindsay Walton', mobile: '9xxxxxxxxxx', email: 'lindsay.walton@example.com', date: '10/05/2023' },
//     { name: 'Lindsay Walton', mobile: '9xxxxxxxxxx', email: 'lindsay.walton@example.com', date: '10/05/2023' },
//     { name: 'Lindsay Walton', mobile: '9xxxxxxxxxx', email: 'lindsay.walton@example.com', date: '10/05/2023' },
//     { name: 'Lindsay Walton', mobile: '9xxxxxxxxxx', email: 'lindsay.walton@example.com', date: '10/05/2023' },
//     // More people...
// ]

const getURL = "http://localhost:4000/patient"

function PatientTable() {

    const [people,setPeople] = useState([])

    useEffect(()=>{
        axios.get(getURL)
        .then((response)=>{
            console.log(response);
            setPeople(response.data)
        })
        .catch((e)=>{
            console.log(e);
        })
    })

    return (
        <div className="py-4">
            <div className="h-auto" >
                <>
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-xl font-semibold text-gray-900">Patients Details</h1>
                                {/* <p className="mt-2 text-sm text-gray-700">
                              A list of all the users in your account including their name, title, email and role.
                            </p> */}
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                >
                                    Add Patient
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-300">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                        Name
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Mobile Number
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Email
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Gender
                                                    </th>
                                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                        Age
                                                    </th>
                                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                        Address
                                                    </th>
                                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                        Date
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white">
                                                {people.map((person, personIdx) => (
                                                    <tr key={person.email} className={personIdx % 2 === 0 ? undefined : 'bg-gray-50'}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                            {person.name}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.phone}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.gender}</td>
                                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                            {person.age}
                                                        </td>
                                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                            {person.address}
                                                        </td>
                                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                            {person.date_registration}
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
                </>
            </div>
        </div>
    )
}

export default PatientTable