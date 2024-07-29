import React from 'react'

function Customer({func}) {
  return (
	  	<div className='w-full relative'  style={{ height: "90vh"}}>
            <button onClick={() => func(0)} className='absolute border-none bg-black text-white px-5 py-2 font-bold m-5 rounded-md z-20' >back</button>

            <div className=" w-full flex flex-col justify-start items-center gap-5 pt-8 "  style={{ height: "90vh"}}>
				<img src="/logo-waves.png" alt="logo" className=" h-96 rounded-full absolute opacity-20" />
				<button className=' self-end mx-40 btn'>Add Distributed Items</button>
				<div className='w-full flex flex-col items-center z-10 overflow-y-scroll' style={{height:"70vh"}} >
					<table className='text-center flex flex-col '>
						<thead className='sticky top-0'>
							<tr className='h-10 bg-slate-950 text-white border-2 border-black '>
								<th className=' w-44'>Invoice no: </th>
								<th className=' w-44'>Name : </th>
								<th className=' w-44'>Date : </th>
								<th className=' w-44'>Total Quantity : </th>
								<th className=' w-44'>Total Amount : </th>
								{/* <th className=' w-40'>500ml : </th>
								<th className=' w-40'>1 L : </th>
								<th className=' w-40'>1.5 L : </th>
								<th className=' w-40'>5 L : </th>
								<th className=' w-40'>19 L : </th> */}
							</tr>
						</thead>
						<tbody>
							{
								<tr className='h-10 bg-red-100 border-2 border-black'>
									<td className=' w-44'>INV001</td>
									<td className=' w-44'>John Doe</td>
									<td className=' w-44'>2022-01-01</td>
									<td className=' w-44'>10100</td>
									<td className=' w-44'>$100</td>
								</tr>
							}	
						</tbody>

					</table>
				</div>
			</div>
		</div>
  )
}

export default Customer