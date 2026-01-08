"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-4">
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl mt-4 font-semibold">Oops! Page Not Found</h2>
      <Link
        href="/"
        className="mt-6 bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-lg text-white font-medium"
      >
        Home
      </Link>
    </div>
  );
};

export default NotFound;
