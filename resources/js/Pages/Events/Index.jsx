import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { FaEye, FaPen, FaPlus, FaTrash } from "react-icons/fa";
import { Badge } from "@/Components/ui/badge";
import { Avatar, AvatarImage } from "@/Components/ui/avatar";
import { useState } from "react";
import {usePage, Head, Link, router} from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function Index({ auth, events }) {
  // const [success, setSuccess] = useState("");
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [success, setSuccess] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  const [flash, setOpenFlash] = useState(false);
  // const { success } = usePage().props;
  console.log(success)

  const handleDelete = (id) => {
    router.delete(route("events.destroy", id), {
      onSuccess: () => {
        setModalDeleteOpen(false);
        setDeleteData(null);
        setOpenFlash(true);
        setSuccess("Data event berhasil dihapus");
      },
    });
  };


  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Events" />
      <div className="flex justify-between my-6 items-center">
        <h3>All Events</h3>
        <Link href={route("events.create")}>
          <Button className="bg-blue-500 text-white hover:text-slate hover:bg-blue-400 gap-2">
            Add Event
            <FaPlus />
          </Button>
        </Link>
      </div>
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
        {events.length > 0 ? (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {events.map((event, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle>{event.title}</CardTitle>
                    <Badge
                       className={`rounded-xl ${
                        event.status === "ACTIVE" ? "bg-emerald-500" : event.status === "COMING SOON" ? "bg-sky-500" : "bg-rose-500"
                      }`}
                    >
                      {event.status}
                    </Badge>
                  </div>
                  <h4 className="text-sky-500">
                    Category : {event.eventcategories.name}
                  </h4>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-5">
                  <div className="">
                    <p>Date</p>
                    <p className="text-slate-500">{event.date}</p>
                  </div>
                  <div className="">
                    <p>Clock</p>
                    <p className="text-slate-500">
                      {event.start_time} to {event.finish_time}
                    </p>
                  </div>
                  <div className="">
                    <p>Open Gate</p>
                    <p className="text-slate-500">{event.open_gate}</p>
                  </div>
                  <div className="">
                    <p>Venue</p>
                    <p className="text-slate-500">{event.venue}</p>
                  </div>
                </CardContent>
                <CardContent>
                  <p>Artist :</p>
                  <div className="flex gap-1">
                    {event.artists && event.artists.length > 0 ? (
                      <div className="flex gap-1">
                        {event.artists.map((artist, idx) => (
                          <Avatar key={idx}>
                            <AvatarImage src={artist.img} />
                          </Avatar>
                        ))}
                      </div>
                    ) : (
                      <p className="text-slate-500">No artists available</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-1">
                  <Button className="rounded-3xl duration-300 bg-yellow-200 hover:bg-yellow-400 text-yellow-500 hover:text-white">
                    <FaPen />
                  </Button>
                  <Button className="rounded-3xl duration-300 bg-sky-200 hover:bg-sky-400 text-sky-500 hover:text-white">
                    <FaEye />
                  </Button>
                  <Button
                  onClick={() => { setModalDeleteOpen(true); setDeleteData(event); }}
                  className="rounded-3xl duration-300 bg-rose-200 hover:bg-rose-400 text-rose-500 hover:text-white">
                    <FaTrash />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div
            id="alert-3"
            class="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-100 dark:bg-gray-800 dark:text-blue-400"
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
            <div class="ms-3 text-sm font-semibold">
              Events is empty ,
              <span className="font-normal"> Add event please !!</span>
            </div>
          </div>
        )}
    </AuthenticatedLayout>
  );
}
