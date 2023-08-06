import React,{useState} from 'react'
import Logo from "../Images/logo.png";
const SignUp = () => {
    const [Role, setRole] = useState("")
    return (
        <>
            <div className="Background bg-[url('Images/bglogin.jpg')] bg-cover relative h-screen">
                <div className="flex justify-center items-center h-full">
                    <div className="Card flex flex-col justify-center m-auto items-center w-2/5 shadow-custom6 drop-shadow-md py-10 sm:px-6 lg:px-8 backdrop-blur-md rounded-2xl">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md mix-blend-multiply">
                            <img
                                className="m-auto h-12 w-auto mix-blend-multiply rounded-md"
                                src={Logo}
                                alt="Your Company"
                            />
                            <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900">
                                Sign up for account
                            </h2>
                        </div>

                        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
                            <div className="bg-transparent py-8 px-4 sm:rounded-lg sm:px-10">
                                <form className="space-y-6" action="#" method="POST">
                                    <div>
                                        <label
                                            htmlFor="usrname"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            User Name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="usrname"
                                                name="usrname"
                                                type="usrname"
                                                autoComplete="usrname"
                                                required
                                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Email
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Password
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="cnfPassword"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Confirm Password
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="cnfPassword"
                                                name="cnfPassword"
                                                type="cnfPassword"
                                                autoComplete="current-cnfPassword"
                                                required
                                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <label htmlFor="Role" className="block mb-2 text-sm font-medium text-gray-900">Select Account Role</label>
                                            <select onChange={(e) => { setRole(e.target.value) }} value={Role} name="Role" id="Role"
                                                className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                                                <option value="">
                                                    Select Role
                                                </option>
                                                <option value="doctor">
                                                    Doctor
                                                </option>
                                                <option value="receptionist">
                                                    Receptionist
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Sign up
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp