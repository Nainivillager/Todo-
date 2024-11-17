import React from "react";

export default function Page() {
  return (
    <div className="border-2 border-black m-6 flex flex-col items-center rounded-lg">
      <div className="text-3xl font-bold bg-slate-300 p-1 rounded-lg shadow-sm">
        Todo App
      </div>

      <div className="flex flex-col my-8 py-2 gap-4  items-center rounded-lg leading-10">
        <label className="w-1/2 border ">
          <input type="text" placeholder="Task" />
        </label>
        <label className="w-3/4 border">
          <input type="text" placeholder="Description" />
        </label>
      </div>

      <button className="border-2 border-red-950  text-xl rounded-lg bg-blue-500 text-white font-bold m-2 p-1 w-1/2">
        Add +
      </button>
    </div>
  );
}
