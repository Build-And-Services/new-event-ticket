import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
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

export default function Index({ auth, events }) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Events" />
      <div className="flex justify-between my-6 items-center">
        <h3>All Events</h3>
        <Button className="bg-blue-500 text-white hover:text-slate hover:bg-blue-400 gap-2">
          Add Event
          <FaPlus/>
        </Button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>Konser Dewa 19</CardTitle>
              <Badge className="bg-emerald-500 rounded-xl">Active</Badge>
            </div>
            <h4 className="text-sky-500">Category : Konser</h4>
            <CardDescription>Konser Dewa 19 adalah sebuah perhelatan musik yang menampilkan band legendaris asal Indonesia, Dewa 19. </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-5">
            <div className="">
              <p>Date</p>
              <p className="text-slate-500">10, April 2024</p>
            </div>
            <div className="">
              <p>Clock</p>
              <p className="text-slate-500">15.00 to 22.00 WIB</p>
            </div>
            <div className="">
              <p>Open Gate</p>
              <p className="text-slate-500">14.00 WIB</p>
            </div>
            <div className="">
              <p>Venue</p>
              <p className="text-slate-500">Sevendream</p>
            </div>
          </CardContent>
          <CardContent>
            <p>Artist :</p>
            <div className="flex gap-1">
              <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYReBsvJDDyPdnn4zxR7sUbfvqaFjxsKfq-VQXlNnsSWxsFApUZSjSECUa0KeE0AlRoc&usqp=CAU"/>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-6cUFCJh8WdsGWZi342vO3zEhVgYXIMsIrp4-PO0mEnjwcANx_5s0Y-bKemb0aGEwWg&usqp=CAU"/>
              </Avatar>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-1">
            <Button className="rounded-3xl duration-300 bg-yellow-200 hover:bg-yellow-400 text-yellow-500 hover:text-white">
              <FaPen/>
            </Button>
            <Button className="rounded-3xl duration-300 bg-sky-200 hover:bg-sky-400 text-sky-500 hover:text-white">
              <FaEye/>
            </Button>
            <Button className="rounded-3xl duration-300 bg-rose-200 hover:bg-rose-400 text-rose-500 hover:text-white">
              <FaTrash/>
            </Button>
          </CardFooter>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>Konser Dewa 19</CardTitle>
              <Badge className="bg-emerald-500 rounded-xl">Active</Badge>
            </div>
            <h4 className="text-sky-500">Category : Konser</h4>
            <CardDescription>Konser Dewa 19 adalah sebuah perhelatan musik yang menampilkan band legendaris asal Indonesia, Dewa 19. </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-5">
            <div className="">
              <p>Date</p>
              <p className="text-slate-500">10, April 2024</p>
            </div>
            <div className="">
              <p>Clock</p>
              <p className="text-slate-500">15.00 to 22.00 WIB</p>
            </div>
            <div className="">
              <p>Open Gate</p>
              <p className="text-slate-500">14.00 WIB</p>
            </div>
            <div className="">
              <p>Venue</p>
              <p className="text-slate-500">Sevendream</p>
            </div>
          </CardContent>
          <CardContent>
            <p>Artist :</p>
            <div className="flex gap-1">
              <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYReBsvJDDyPdnn4zxR7sUbfvqaFjxsKfq-VQXlNnsSWxsFApUZSjSECUa0KeE0AlRoc&usqp=CAU"/>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-6cUFCJh8WdsGWZi342vO3zEhVgYXIMsIrp4-PO0mEnjwcANx_5s0Y-bKemb0aGEwWg&usqp=CAU"/>
              </Avatar>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-1">
            <Button className="rounded-3xl duration-300 bg-yellow-200 hover:bg-yellow-400 text-yellow-500 hover:text-white">
              <FaPen/>
            </Button>
            <Button className="rounded-3xl duration-300 bg-sky-200 hover:bg-sky-400 text-sky-500 hover:text-white">
              <FaEye/>
            </Button>
            <Button className="rounded-3xl duration-300 bg-rose-200 hover:bg-rose-400 text-rose-500 hover:text-white">
              <FaTrash/>
            </Button>
          </CardFooter>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>Konser Dewa 19</CardTitle>
              <Badge className="bg-emerald-500 rounded-xl">Active</Badge>
            </div>
            <h4 className="text-sky-500">Category : Konser</h4>
            <CardDescription>Konser Dewa 19 adalah sebuah perhelatan musik yang menampilkan band legendaris asal Indonesia, Dewa 19. </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-5">
            <div className="">
              <p>Date</p>
              <p className="text-slate-500">10, April 2024</p>
            </div>
            <div className="">
              <p>Clock</p>
              <p className="text-slate-500">15.00 to 22.00 WIB</p>
            </div>
            <div className="">
              <p>Open Gate</p>
              <p className="text-slate-500">14.00 WIB</p>
            </div>
            <div className="">
              <p>Venue</p>
              <p className="text-slate-500">Sevendream</p>
            </div>
          </CardContent>
          <CardContent>
            <p>Artist :</p>
            <div className="flex gap-1">
              <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYReBsvJDDyPdnn4zxR7sUbfvqaFjxsKfq-VQXlNnsSWxsFApUZSjSECUa0KeE0AlRoc&usqp=CAU"/>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-6cUFCJh8WdsGWZi342vO3zEhVgYXIMsIrp4-PO0mEnjwcANx_5s0Y-bKemb0aGEwWg&usqp=CAU"/>
              </Avatar>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-1">
            <Button className="rounded-3xl duration-300 bg-yellow-200 hover:bg-yellow-400 text-yellow-500 hover:text-white">
              <FaPen/>
            </Button>
            <Button className="rounded-3xl duration-300 bg-sky-200 hover:bg-sky-400 text-sky-500 hover:text-white">
              <FaEye/>
            </Button>
            <Button className="rounded-3xl duration-300 bg-rose-200 hover:bg-rose-400 text-rose-500 hover:text-white">
              <FaTrash/>
            </Button>
          </CardFooter>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>Konser Dewa 19</CardTitle>
              <Badge className="bg-emerald-500 rounded-xl">Active</Badge>
            </div>
            <h4 className="text-sky-500">Category : Konser</h4>
            <CardDescription>Konser Dewa 19 adalah sebuah perhelatan musik yang menampilkan band legendaris asal Indonesia, Dewa 19. </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-5">
            <div className="">
              <p>Date</p>
              <p className="text-slate-500">10, April 2024</p>
            </div>
            <div className="">
              <p>Clock</p>
              <p className="text-slate-500">15.00 to 22.00 WIB</p>
            </div>
            <div className="">
              <p>Open Gate</p>
              <p className="text-slate-500">14.00 WIB</p>
            </div>
            <div className="">
              <p>Venue</p>
              <p className="text-slate-500">Sevendream</p>
            </div>
          </CardContent>
          <CardContent>
            <p>Artist :</p>
            <div className="flex gap-1">
              <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYReBsvJDDyPdnn4zxR7sUbfvqaFjxsKfq-VQXlNnsSWxsFApUZSjSECUa0KeE0AlRoc&usqp=CAU"/>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-6cUFCJh8WdsGWZi342vO3zEhVgYXIMsIrp4-PO0mEnjwcANx_5s0Y-bKemb0aGEwWg&usqp=CAU"/>
              </Avatar>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-1">
            <Button className="rounded-3xl duration-300 bg-yellow-200 hover:bg-yellow-400 text-yellow-500 hover:text-white">
              <FaPen/>
            </Button>
            <Button className="rounded-3xl duration-300 bg-sky-200 hover:bg-sky-400 text-sky-500 hover:text-white">
              <FaEye/>
            </Button>
            <Button className="rounded-3xl duration-300 bg-rose-200 hover:bg-rose-400 text-rose-500 hover:text-white">
              <FaTrash/>
            </Button>
          </CardFooter>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle>Konser Dewa 19</CardTitle>
              <Badge className="bg-emerald-500 rounded-xl">Active</Badge>
            </div>
            <h4 className="text-sky-500">Category : Konser</h4>
            <CardDescription>Konser Dewa 19 adalah sebuah perhelatan musik yang menampilkan band legendaris asal Indonesia, Dewa 19. </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-5">
            <div className="">
              <p>Date</p>
              <p className="text-slate-500">10, April 2024</p>
            </div>
            <div className="">
              <p>Clock</p>
              <p className="text-slate-500">15.00 to 22.00 WIB</p>
            </div>
            <div className="">
              <p>Open Gate</p>
              <p className="text-slate-500">14.00 WIB</p>
            </div>
            <div className="">
              <p>Venue</p>
              <p className="text-slate-500">Sevendream</p>
            </div>
          </CardContent>
          <CardContent>
            <p>Artist :</p>
            <div className="flex gap-1">
              <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYReBsvJDDyPdnn4zxR7sUbfvqaFjxsKfq-VQXlNnsSWxsFApUZSjSECUa0KeE0AlRoc&usqp=CAU"/>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-6cUFCJh8WdsGWZi342vO3zEhVgYXIMsIrp4-PO0mEnjwcANx_5s0Y-bKemb0aGEwWg&usqp=CAU"/>
              </Avatar>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-1">
            <Button className="rounded-3xl duration-300 bg-yellow-200 hover:bg-yellow-400 text-yellow-500 hover:text-white">
              <FaPen/>
            </Button>
            <Button className="rounded-3xl duration-300 bg-sky-200 hover:bg-sky-400 text-sky-500 hover:text-white">
              <FaEye/>
            </Button>
            <Button className="rounded-3xl duration-300 bg-rose-200 hover:bg-rose-400 text-rose-500 hover:text-white">
              <FaTrash/>
            </Button>
          </CardFooter>
        </Card>

      </div>
    </AuthenticatedLayout>
  );
}
