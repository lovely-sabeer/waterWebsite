import React, { useState } from 'react'
import StockSub from './StockSub'
import BalanceStock from './BalanceStock'

function StockDetails({ func }) {
	const [ details, setDetails] = useState(0)
    return (
		<div className=' w-full flex items-center justify-evenly gap-5 relative'>
			{
				details == 0 && (
					<div className=' w-full flex items-center justify-evenly gap-5' >
					 	<button onClick={() => func(0)} className='absolute border-none bg-black text-white px-5 py-2 font-bold m-5 rounded-md z-20 top-0 left-0'>back</button>
					 	<div onClick={()=>setDetails(1)} className='w-1/5 bg-slate-700 text-center py-28 rounded-md text-white font-bold text-2xl cursor-pointer hover:shadow-2xl hover:bg-slate-900 '>Recieved Bottles</div>
					 	<div onClick={()=>setDetails(2)} className='w-1/5 bg-slate-700 text-center py-28 rounded-md text-white font-bold text-2xl cursor-pointer hover:shadow-2xl hover:bg-slate-900 '>Balance Stock</div>
					</div>
				)
			}
			{
				details == 1 && (
					<StockSub func={setDetails}/>
				)
			}
			{
				details == 2 && (
					<BalanceStock func={setDetails} />
				)
			}
		</div>
	)
}

export default StockDetails
