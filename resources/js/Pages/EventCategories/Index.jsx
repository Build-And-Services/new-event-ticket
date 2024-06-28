import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, useForm, router} from '@inertiajs/react';
// import { usePage } from '@inertiajs/inertia-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/Components/ui/table';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/Components/ui/alert"
import { Button } from "@/Components/ui/button";
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa';

export default function Index({ auth, eventCategories }) {
  // console.log(success);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [success, setSuccess] = useState("");
  const [flash, setOpenFlash] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const { data, setData, post, errors, reset } = useForm({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      router.put(route("eventcategories.update", editData.id), data,{
        onSuccess: () => {
          setModalOpen(false);
          setData("name", "");
          setOpenFlash(true);
          setSuccess("Data kategori berhasil diubah");
        },
      });
    } else {
      post(route("eventcategories.store"), {
        onSuccess: () => {
          setModalOpen(false);
          setData("name", "");
          setOpenFlash(true);
          setSuccess("Data kategori berhasil ditambah");
        },
      });

    }
    setModalOpen(false);
  };

  const handleEdit = (category) => {
    setIsEdit(true);
    setEditData(category);
    setData({ ...data, name: category.name }); // Set nama kategori ke dalam form data
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    router.delete(route("eventcategories.destroy", id), {
      onSuccess: () => {
        setModalDeleteOpen(false);
        setDeleteData(null);
        setOpenFlash(true);
        setSuccess("Data kategori berhasil dihapus");
      },
    });
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title='Event Categories'/>
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
      <div className="flex justify-between my-6 items-center">
        <h3>All Event Categories</h3>
        <Button onClick={() => { setIsEdit(false); setModalOpen(true); }} className="bg-blue-500 text-white hover:text-slate hover:bg-blue-400 gap-2">
          Add Event Category
          <FaPlus/>
        </Button>
      </div>

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
                  {isEdit ? 'Edit' : 'Add'} Event Category
                </h3>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
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
                    onChange={(e) => setData("name", e.target.value)}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="name"

                  />
                  {isEdit && (
                    <input
                      type="hidden"
                      name="id"
                      value={data.id}
                      id="id"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  )}
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {modalDeleteOpen && deleteData && (
        <div
          id="popup-modal"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                onClick={() => setModalDeleteOpen(false)}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2 2 2m0 0l-2 2-2-2m2-2V6m6 4v12a2 2 0 01-2 2H8a2 2 0 01-2-2V10m2-4h8a2 2 0 012 2v4H4V8a2 2 0 012-2h8z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this event category?
                </h3>
                <Button className="bg-rose-500 hover:bg-rose-600" onClick={() => handleDelete(deleteData.id)}>
                  Delete
                </Button>
                <Button className="bg-slate-500 ms-2 hover:bg-slate-600" onClick={() => setModalDeleteOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {success && (
        <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-200 dark:bg-gray-800 dark:text-green-400" role="alert">
          <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">{success}</span>
          </div>
        </div>
      )} */}


      {/* {error && (
        <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-200 dark:bg-gray-800 dark:text-red-400" role="alert">
          <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">{error}</span>
          </div>
        </div>
      )} */}

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
              {eventCategories.map((category, index) => (
                <tr key={category.id}>
                  <td className="border-b border-[#eee] py-5 px-4 text-black">
                    {index + 1}
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4">
                    <h5 className="font-medium text-black">{category.name}</h5>
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
                        onClick={() => { setModalDeleteOpen(true); setDeleteData(category); }}
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
    </AuthenticatedLayout>
  );
}
