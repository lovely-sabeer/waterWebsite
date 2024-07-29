import React from 'react'

const Category = ({litre}) => {
	return (
		<div className="grid grid-cols-3 gap-8 w-full items-center">
			<div className='grid grid-cols-2 py-3 w-full '>
				<div> Category : </div>
				<div> {litre} </div>
			</div>
			<div className="grid grid-cols-2 py-3">
				<label htmlFor="">Quantity :</label>
				<input type="number" name="" id="" placeholder="Enter quantity" />
			</div>
			<div className="grid grid-cols-2 py-3">
				<label htmlFor="">Price : </label>
				<input type="number" name="" id="" placeholder="Enter price" />
			</div>
		</div>
	)
}


function Addnew({func}) {
	return (
		<div className=' absolute w-3/4  border-2 border-black rounded-md p-7 bg-white z-20 flex flex-col items-center ' style={{ boxShadow: "5px 5px 20px black, -5px -5px 20px black" }}>
			<img src="/xmark.svg" alt="" className="absolute w-9 top-0 right-0 m-3 bg-red-600 px-2 py-1 cursor-pointer rounded" onClick={()=>func(0)}/>
			<div className="flex gap-10 py-4 w-full">
				<label htmlFor="">Manufacturer : </label>
				<input type="name" name="" id="" placeholder="Enter name of the manufacturer" className='w-1/3 p-1 ' />

			</div>
			{/* Invoice, Date */}
			<div className="grid grid-cols-2 gap-8 w-full">
				<div className="flex gap-10 items-center py-4">
					<label htmlFor="">Invoice No: </label>
					<input type="number" name="" id="" placeholder="Enter Invoice Number"  className='w-2/3 p-1 ' />

				</div>
				<div className="flex gap-10 items-center py-4">
					<label htmlFor="">Date : </label>
					<input type="date" name="" id="" placeholder="Enter price"  className='w-2/3 p-1 ' />

				</div>
			</div>
			<Category litre={"500 ml"} />
			<Category litre={"1 L"} />
			<Category litre={"1.5 L"} />
			<Category litre={"5 L"} />
			<Category litre={"19 L"} />
			
			<button className='mt-7 bg-green-600 hover:bg-green-800 px-8 py-2 rounded text-white font-bold '>Submit</button>
		</div>
	)
}

export default Addnew