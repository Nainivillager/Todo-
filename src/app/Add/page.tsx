import React from "react";

export default function page() {
  return (
    <>
      <div className="flex flex-col items-center m-8 p-7 border border-black rounded-full gap-5 underline underline-offset-4">
        <h1 className="font-bold text-2xl mb-5">Add Todo</h1>

        <label className="border border-black rounded-lg leading-8">
          <input
            type="text"
            name="title"
            className="placeholder:italic placeholder:pl-4"
            placeholder="Enter the title"
          />
        </label>
        <label className="border border-black rounded-lg w-3/4 leading-10">
          <input
            type="text"
            name="desc"
            className="placeholder:italic placeholder: pl-4 w-full"
            placeholder="Enter the description"
          />
        </label>
        <button
          type="submit"
          title="save"
          className="bg-green-600 px-2 rounded-lg font-bold text-xl text-white"
        >
          Save
        </button>
      </div>
    </>
  );
}
