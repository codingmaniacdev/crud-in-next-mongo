"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

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
        <div className="px-6 py-4 mt-5 ">
          <div className="flex justify-between mb-3">
            <div className="font-bold text-xl">ACCOUNT</div>
            <Link href={'/users'} className="px-3 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-xs dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">BACK</Link>
          </div>

          <div className="flex items-center">
            <img src="https://i.pravatar.cc/300?img=1" alt="Profile picture" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.about}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">Email: <span className="text-gray-800 font-semibold">{user.email}</span></p>
            <p className="text-gray-600">City: <span className="text-gray-800 font-semibold">{user.city}</span></p>
            <p className="text-gray-600">State: <span className="text-gray-800 font-semibold">{user.state}</span></p>
            <p className="text-gray-600">Country: <span className="text-gray-800 font-semibold">{user.country}</span></p>
            <p className="text-gray-600">ZIP: <span className="text-gray-800 font-semibold">{user.zip}</span></p>
          </div>

        </div>
      </div>
    </div>
  );
}


export default page;