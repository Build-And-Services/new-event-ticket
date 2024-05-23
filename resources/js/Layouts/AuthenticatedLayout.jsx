import Sidebar from "@/Components/Sidebar/Index";
import Header from "@/Components/Header/Index";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthenticatedLayout({ user, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <AuthContext.Provider value={user}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className=" mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </AuthContext.Provider>
  );
}
