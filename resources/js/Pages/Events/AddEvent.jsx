import React, { useState, useEffect } from 'react';
import { Button } from '@/Components/ui/button';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FaArrowLeft } from 'react-icons/fa';

export default function AddEvent({ auth, eventCategories = [] }) {
  const [success, setSuccess] = useState("");
  const [flash, setOpenFlash] = useState(false);
  const { data, setData, post, reset } = useForm({
    title: "",
    event_category_id: "",
    date: "",
    start_time: "",
    finish_time: "",
    open_gate: "",
    venue: "",
    img: null,
    status: "",
    description: "",
  });

  const { errors } = usePage().props;

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("events.store"), {
      onSuccess: () => {
        setOpenFlash(true);
        setSuccess("Event successfully added");
      },
    });
  };

  const handleFileChange = (e) => {
    setData('img', e.target.files[0]);
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Add Event" />
      <div className="flex justify-between my-6 items-center">
        <h3>Add Events</h3>
        <Link href={route('events.index')}>
          <Button className="bg-blue-500 text-white hover:text-slate hover:bg-blue-400 gap-2">
            Back
            <FaArrowLeft />
          </Button>
        </Link>
      </div>
      <div className="max-w-full overflow-x-auto">
        <div className="p-5 bg-card rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="border-gray-900/10 pb-3">
              <div className="mt-4 grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="mb-4 w-full">
                  <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={data.title}
                      onChange={(e) => setData('title', e.target.value)}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors && (
                      <p className="text-sm text-red-500">{errors.title}</p>
                    )}
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <label htmlFor="event-category" className="block text-sm font-medium leading-6 text-gray-900">
                    Event Category
                  </label>
                  <div className="mt-2">
                    <select
                      id="event_category_id"
                      name="event_category_id"
                      value={data.event_category_id}
                      onChange={(e) => setData('event_category_id', e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      {eventCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    {errors && (
                      <p className="text-sm text-red-500">{errors.event_category_id}</p>
                    )}
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                    Date
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={data.date}
                      onChange={(e) => setData('date', e.target.value)}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors && (
                      <p className="text-sm text-red-500">{errors.date}</p>
                    )}
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <label htmlFor="start-time" className="block text-sm font-medium leading-6 text-gray-900">
                    Start Time
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      name="start_time"
                      id="start_time"
                      value={data.start_time}
                      onChange={(e) => setData('start_time', e.target.value)}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors && (
                      <p className="text-sm text-red-500">{errors.start_time}</p>
                    )}
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <label htmlFor="finish_time" className="block text-sm font-medium leading-6 text-gray-900">
                    Finish Time
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      name="finish_time"
                      id="finish_time"
                      value={data.finish_time}
                      onChange={(e) => setData('finish_time', e.target.value)}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors && (
                      <p className="text-sm text-red-500">{errors.finish_time}</p>
                    )}
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <label htmlFor="open-gate" className="block text-sm font-medium leading-6 text-gray-900">
                    Open Gate
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      name="open_gate"
                      id="open_gate"
                      value={data.open_gate}
                      onChange={(e) => setData('open_gate', e.target.value)}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors && (
                      <p className="text-sm text-red-500">{errors.open_gate}</p>
                    )}
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <label htmlFor="venue" className="block text-sm font-medium leading-6 text-gray-900">
                    Venue
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="venue"
                      id="venue"
                      value={data.venue}
                      onChange={(e) => setData('venue', e.target.value)}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors && (
                      <p className="text-sm text-red-500">{errors.venue}</p>
                    )}
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <label htmlFor="thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
                    Thumbnail
                  </label>
                  <div className="mt-2">
                    <input
                      type="file"
                      name="img"
                      id="img"
                      onChange={handleFileChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors && (
                      <p className="text-sm text-red-500">{errors.img}</p>
                    )}
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                    Status
                  </label>
                  <div className="mt-2">
                    <select
                      id="status"
                      name="status"
                      value={data.status}
                      onChange={(e) => setData('status', e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="ACTIVE">Active</option>
                      <option value="COMING SOON">Coming Soon</option>
                    </select>
                    {errors && (
                      <p className="text-sm text-red-500">{errors.status}</p>
                    )}
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      rows="5"
                      name="description"
                      id="description"
                      value={data.description}
                      onChange={(e) => setData('description', e.target.value)}
                      autoComplete="description"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                    {errors && (
                      <p className="text-sm text-red-500">{errors.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
