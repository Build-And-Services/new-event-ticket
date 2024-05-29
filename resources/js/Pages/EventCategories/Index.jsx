import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
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
import { Inertia } from '@inertiajs/inertia';

export default function Index({ auth, eventCategories, session = {} }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({ id: '', name: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      Inertia.put(route('eventcategories.update', formData.id), {
        name: formData.name,
      }).then(() => {
        setModalOpen(false);
        setFormData({ id: '', name: '' });
      });
    } else {
      Inertia.post(route('eventcategories.store'), {
        name: formData.name,
      }).then(() => {
        setModalOpen(false);
        setFormData({ name: '' });
      });
    }
  };

  const handleEdit = (category) => {
    setIsEdit(true);
    setFormData(category);
    setModalOpen(true);
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title='Event Categories'/>
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
                    value={formData.name}
                    onChange={handleChange}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="name"
                    required
                  />
                  <input
                    type="hidden"
                    name="id"
                    value={formData.id}
                    id="id"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
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

      {session.success && (
        <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-200 dark:bg-gray-800 dark:text-green-400" role="alert">
        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">{session.success}</span>
        </div>
      </div>
      )}
      {session.error && (
        <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-200 dark:bg-gray-800 dark:text-red-400" role="alert">
        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">{session.error}</span>
        </div>
      </div>
      )}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-white">No</TableHead>
            <TableHead className="text-white text-center">Name</TableHead>
            <TableHead className="text-white text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventCategories.map((category, index) => (
            <TableRow key={category.id} className="bg-slate-200">
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="text-center">{category.name}</TableCell>
              <TableCell className="flex gap-1 justify-center">
                <Button
                  onClick={() => handleEdit(category)}
                  className="rounded-lg gap-1 duration-300 bg-yellow-200 hover:bg-yellow-400 text-yellow-500 hover:text-white"
                >
                  <FaPen/>
                  Edit
                </Button>
                <Button className="rounded-lg gap-1 duration-300 bg-rose-200 hover:bg-rose-400 text-rose-500 hover:text-white" onClick={() => Inertia.delete(route("eventcategories.destroy", category.id))}>
                  <FaTrash/>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AuthenticatedLayout>
  );
}
