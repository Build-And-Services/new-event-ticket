import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import { Button } from "@/Components/ui/button";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import { useState } from "react";

export default function TicketCategory({ auth, tiketCategories, session }) {
  const { data, setData, post, processing } = useForm({
    name: "",
  });
  const [success, setSuccess] = useState("");
  const [flash, setOpenFlash] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { errors } = usePage().props;

  function handleChange(e) {
    setData("name", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    post("/ticket/category/store", {
      onSuccess: () => {
        setModalOpen(false);
        setData("name", "");
        setOpenFlash(true);
        setSuccess("Data kategori berhasil ditambah");
      },
    });
  }

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Tickets" />
      <div className="rounded-sm border border-stroke bg-white px-5 py-6 shadow-default sm:px-7">
        <div className="flex justify-between items-center my-8">
          <h3 className="text-xl">Ticket Categories</h3>
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            className="bg-blue-500 text-white hover:text-slate hover:bg-blue-400 gap-2"
          >
            Add Ticket Category
            <FaPlus />
          </Button>
        </div>
        {flash && (
          <div
            id="alert-3"
            class="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <svg
              class="flex-shrink-0 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div class="ms-3 text-sm font-semibold">
              Success!!! <span className="font-normal">{success}</span>
            </div>
            <button
              onClick={() => setOpenFlash(false)}
              type="button"
              class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
              data-dismiss-target="#alert-3"
              aria-label="Close"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}
        {modalOpen && (
          <div
            id="crud-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {/* {isEdit ? "Edit" : "Add"}  */}
                    Add Event Category
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setModalOpen(false);
                      setData("name", "");
                      errors.name = "";
                    }}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="name"
                    />
                    {errors && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className={`text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
                      processing && "cursor-not-allowed"
                    }`}
                    disabled={processing}
                  >
                    {processing && (
                      <>
                        <svg
                          aria-hidden="true"
                          className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300 mr-4"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </>
                    )}
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left">
                <th className="min-w-[40px] py-4 px-4 font-medium text-black">
                  No
                </th>
                <th className="min-w-[220px] py-4 px-4 font-medium text-black">
                  Name
                </th>
                <th className="py-4 px-4 font-medium text-black text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tiketCategories.map((Ticket, index) => (
                <tr key={Ticket.id}>
                  <td className="border-b border-[#eee] py-5 px-4 text-black">
                    {index + 1}
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4">
                    <h5 className="font-medium text-black">{Ticket.name}</h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4">
                    <div className="flex items-center space-x-3.5 justify-center">
                      <Button
                        onClick={() => handleEdit(category)}
                        className="rounded-lg gap-1 duration-300 bg-yellow-200 hover:bg-yellow-400 text-yellow-500 hover:text-white"
                      >
                        <FaPen />
                        Edit
                      </Button>
                      <Button
                        className="rounded-lg gap-1 duration-300 bg-rose-200 hover:bg-rose-400 text-rose-500 hover:text-white"
                        onClick={() =>
                          Inertia.delete(
                            route("eventcategories.destroy", category.id)
                          )
                        }
                      >
                        <FaTrash />
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 md:mt-8 flex justify-center md:justify-end">
          {/* <Pagination links={tiketCategories.meta.links} /> */}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
