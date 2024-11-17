import React from "react";

export default function page() {
  <>
    <div>
      <h1 className="text-3xl font-bold">Update Todo</h1>
    </div>
    <div className="flex flex-col w-3/4">
      <label className="mb-2">
        <input
          type="text"
          placeholder="Enter Title"
          name="task"
          className="w-full p-2 border rounded-lg"
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Enter Description"
          name="desc"
          className="w-full p-2 border rounded-lg"
        />
      </label>
    </div>
    <div className="bg-black">
      <button className="text-white font-bold">Update</button>
    </div>
  </>;
}
