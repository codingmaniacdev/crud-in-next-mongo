"use client";
import Link from 'next/link'
import { useParams } from 'next/navigation';
import React from 'react'

const getUserById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'GET', headers: {
        'accept': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error("failed to get user");
    }
    return res.json();
  } catch (error) {
    console.log("failed to get user", error);
  }
}

const page = async () => {
  const { id } = useParams();

  const { user } = await getUserById(id);
  return (
    <div className="container mx-auto">
      <div className="max-w-2xl rounded overflow-hidden shadow-lg m-auto mt-20 border">
        <div className="px-6 py-4 mt-10">
          <div className="font-bold text-xl mb-2">UPDATE ACCOUNT</div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-6 gap-y-5">
            <div className="sm:col-span-6">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
              <div className="mt-1">
                <input type="text" name="name" id="name" value={user.name} autoComplete="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 px-3" />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-1">
                <input id="email" name="email" type="email" value={user.email} autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 px-3" />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
              <div className="mt-1">
                <input id="country" name="country" type="text" autoComplete="country" value={user.country} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 px-3" />
              </div>
            </div>

            <div className="w-full sm:col-span-6">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">State</label>
              <div className="mt-1">
                <select id="country" value={user.state} name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-300 px-3">
                  <option>UP</option>
                  <option>Bihar</option>
                  <option>Bangal</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
              <div className="mt-1">
                <input type="text" value={user.city} name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 px-3" />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
              <div className="mt-1">
                <input type="text" value={user.zip} name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 px-3" />
              </div>
            </div>

            <div className="sm:col-span-12">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">About</label>
              <div className="mt-1">
                <textarea id="about" name="about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3">
                  {user.about}
                </textarea>
              </div>
              <p className="mt-0 text-xs leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            <div className="sm:col-span-12">
              <div className="flex justify-between">
                <button className="bg-indigo-700 px-3 py-2 text-white font-medium rounded-lg text-xs">UPDATE</button>
                <Link href={'/users'} className="px-3 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-xs dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">USERS</Link>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page