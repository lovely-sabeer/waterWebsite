import React from 'react'

function BalanceStock({func}) {
  return (
		
		<div className='w-full relative' style={{height: "90vh"}}>
            <button onClick={() => func(0)} className='absolute border-none bg-black text-white px-5 py-2 font-bold m-5 rounded-md z-20 top-0 left-0'>back</button>
            <div className=" w-full flex flex-col justify-start items-center gap-5 mt-20 ">
				<img src="/logo-waves.png" alt="logo" className=" h-5/6 rounded-full absolute opacity-20" />
				
                <div className="w-4/6 flex flex-col justify-start items-center gap-2 z-10 ">
					{/* <h1 className="text-6xl font-bold p-5 ">EMPTY BOTTLES</h1>  */}
					{/* <button className='btn self-end' onClick={()=>setAddnew(1)}>Add New Stock</button> */}
                    {/* <button >Add new</button> */}
                    <div className="grid grid-cols-3 items-center text-center p-2 w-full border-2 border-black rounded-md cursor-pointer  font-bold">
                        <div>Category: 500 ml</div>
                        <div>Balance Bottels: 600</div>
                        <button className='btn w-2/3 '>Update</button>
                        {/* <button className='btn '>Add New Stock</button> */}
                    </div>
                    <div className="grid grid-cols-3 items-center text-center p-2 w-full border-2 border-black rounded-md cursor-pointer  font-bold">
                        <div>Category: 1 L</div>
                        <div>Balance Bottels: 600</div>
                        <button className='btn w-2/3'>Update</button>
                        {/* <button className='btn '>Add New Stock</button> */}
                    </div>
                    <div className="grid grid-cols-3 items-center text-center p-2 w-full border-2 border-black rounded-md cursor-pointer  font-bold">
                        <div>Category: 1.5 L</div>
                        <div>Balance Bottels: 600</div>
                        <button className='btn w-2/3'>Update</button>
                        {/* <button className='btn '>Add New Stock</button> */}
                    </div>
                    <div className="grid grid-cols-3 items-center text-center p-2 w-full border-2 border-black rounded-md cursor-pointer  font-bold">
                        <div>Category: 5 L</div>
                        <div>Balance Bottels: 600</div>
                        <button className='btn w-2/3'>Update</button>
                        {/* <button className='btn '>Add New Stock</button> */}
                    </div>
                    <div className="grid grid-cols-3 items-center text-center p-2 w-full border-2 border-black rounded-md cursor-pointer  font-bold">
                        <div>Category: 19 L</div>
                        <div>Balance Bottels: 600</div>
                        <button className='btn w-2/3'>Update</button>
                        {/* <button className='btn '>Add New Stock</button> */}
					</div>
					
				</div>
				{/* {
					addnew === 1 && <Addnew func={ setAddnew} />
				} */}
            </div>
		</div>
	)
}

export default BalanceStock