import Link from "next/link"
import DeleteButton from "../components/DeleteButton";

const getUsers = async () => {
  const res = await fetch(`http://localhost:3000/api/users`, {
    cache: "no-store"
  });

  try {
    if (!res.ok) {
      throw new Error("failed to get users");
    }
    return res.json();
  } catch (error) {
    console.log("Error fetching users", error);
  }
}

const page = async () => {
  const { users } = await getUsers();

  return (
    <div className="container mx-auto">
      <div className="max-w-6xl rounded overflow-hidden shadow-lg m-auto mt-20">
        <div className="px-6 py-4 mt-5">
          <div className="flex justify-between my-2">
            <div className="font-bold text-xl">Users List</div>
            <Link href={'/'} className="px-3 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-xs dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">CREATE</Link>
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">#</th>
                  <th scope="col" className="px-6 py-3">Image</th>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Email</th>
                  <th scope="col" className="px-6 py-3">City</th>
                  <th scope="col" className="px-6 py-3">State</th>
                  <th scope="col" className="px-6 py-3">Country</th>
                  <th scope="col" className="px-6 py-3">ZIP</th>
                  <th scope="col" className="px-6 py-3">About</th>
                  <th scope="col" className="px-6 py-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {users && users.map((user, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">
                      <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white" src={`https://i.pravatar.cc/100?img=${index + 1}`} alt="..." />
                    </td>
                    <td className="px-4 py-4">{user.name}</td>
                    <td className="px-4 py-4">{user.email}</td>
                    <td className="px-4 py-4">{user.city}</td>
                    <td className="px-4 py-4">{user.state}</td>
                    <td className="px-4 py-4">{user.country}</td>
                    <td className="px-4 py-4">{user.zip}</td>
                    <td className="px-4 py-4">{user.about}</td>
                    <td className="px-1 py-2 items-center">
                      <Link href={`users/profile/${user._id}`}>
                        <div className="px-1 py-1 bg-yellow-400 text-gray-700 rounded-lg mr-1 inline-block">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        </div>
                      </Link>

                      <Link href={`users/edit/${user._id}`}>
                        <div className="px-1 py-1 bg-green-500 text-white rounded-lg  mr-1 inline-block">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>
                        </div>
                      </Link>

                      <DeleteButton id={user._id} />

                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page