"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();

  const handleAdd = () => {
    router.push("/add");
  };

  const handleEdit = () => {
    router.push("/edit/123"); // Using a dummy ID '123'
  };

  return (
    <div className="border-2 border-black m-6 flex flex-col items-center rounded-lg p-6 bg-gray-100 shadow-lg">
      <div className="text-3xl font-bold bg-slate-300 p-4 rounded-lg shadow-sm mb-8 w-full text-center">
        Todo App
      </div>
      <div className="flex justify-around items-center w-full mb-8 p-4 bg-white rounded-lg shadow-sm">
        <div className="w-3/4">
          <h1 className="font-bold">Title</h1>
          <p>Description</p>
        </div>
        <div className="flex flex-col items-center">
          <button
            name="delete"
            className="mb-2 bg-red-500 text-white px-3 py-1 rounded-lg"
          >
            X
          </button>
          <button
            className="bg-yellow-500 text-white px-3 py-1 rounded-lg"
            onClick={handleEdit} // Using the handler with dummy ID
          >
            Edit
          </button>
        </div>
      </div>
      <button
        className="border-2 border-red-950 text-xl rounded-lg bg-blue-500 text-white font-bold m-2 p-2 w-1/2"
        onClick={handleAdd}
      >
        Add +
      </button>
    </div>
  );
}
