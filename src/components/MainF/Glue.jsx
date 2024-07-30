import React, { useState } from "react";
import Addnew from "./Addnew";

function Glue({ func }) {
  const [addnew, setAddnew] = useState(0);

  return (
    <div className="w-full relative">
      <button
        onClick={() => func(0)}
        className="absolute border-none bg-black text-white px-5 py-2 font-bold m-5 rounded-md z-20"
      >
        back
      </button>

      <div className=" w-full h-svh flex flex-col justify-start items-center gap-5 mt-14 ">
        <img
          src="/logo-waves.png"
          alt="logo"
          className=" h-5/6 rounded-full absolute opacity-20"
        />

        <div className="w-4/6 m-4 flex flex-col justify-start items-center gap-2 z-10 ">
          <div className="text-4xl font-bold ">GLUE</div>
          <button className="btn self-end" onClick={() => setAddnew(1)}>
            Add New Stock
          </button>
          {/* <button >Add new</button> */}
          <div className="grid grid-cols-3 items-center text-center p-5 w-full border-2 border-black rounded-md cursor-pointer  font-bold">
            <div>Category: 500 ml</div>
            <div>Balance Glue: 600</div>
            {/* <button className='btn '>Update</button> */}
            {/* <button className='btn '>Add New Stock</button> */}
          </div>
        </div>
        {addnew === 1 && <Addnew func={setAddnew} />}
      </div>
    </div>
  );
}

export default Glue;
