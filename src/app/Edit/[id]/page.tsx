"use client";
import React from "react";

export default function Page() {
  return (
    <div className="m-6 p-6 flex flex-col items-center gap-6">
      <div>
        <h1 className="text-3xl font-bold">Update Todo</h1>
      </div>
      <div className="flex flex-col w-3/4 border rounded-full p-16 m-5 leading-10">
        <label className="mb-2 w-1/2">
          <input
            type="text"
            placeholder="Enter Title"
            name="task"
            className="w-full p-2 border rounded-lg"
          />
        </label>
        <label className="mb-2">
          <input
            type="text"
            placeholder="Enter Description"
            name="desc"
            className="w-full p-2 border rounded-lg"
          />
        </label>
      </div>
      <div className="bg-black p-2 rounded-lg">
        <button className="text-white font-bold px-4 py-2">Update</button>
      </div>
    </div>
  );
}
