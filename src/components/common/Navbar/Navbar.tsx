'use client'
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false);

  const navlinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Jobs", path: "/jobs" },
    { name: "Success", path: "/apply/success" },
  ];
  const navName='job-portal'
  return (
    <>
      <nav className="w-full flex justify-between items-center px-6 py-4 shadow bg-white relative z-50">
        <Link href="/" className="text-2xl font-bold text-purple-700">
          {navName}
        </Link>

        <button
          className="lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={32} />
        </button>

        <div className="hidden lg:flex items-center space-x-6">
          {navlinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-gray-700 hover:text-purple-700 font-medium transition"
            >
              {item.name}
            </Link>
          ))}
          <Button onClick={()=>router.push('/')}>Login</Button>
          <Button  color="secondary">signup</Button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="text-xl font-bold text-purple-700">{navName}</span>
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col px-4 py-6 space-y-4">
          {navlinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className="text-gray-700 text-lg hover:text-purple-700 transition"
            >
              {item.name}
            </Link>
          ))}

          <hr />
          <Button onClick={()=>router.push('/')}>Login</Button>
          <Button  color="secondary">signup</Button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
