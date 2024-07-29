import React, { useState } from 'react'
import Distributers from './Distributers'
import Customer from './Customer'
import StockSub from './StockSub'
import StockDetails from './StockDetails'

function StoreMaintains() {
	const [selected, setSelected] = useState(0)
	return (
		<>
			{
				selected === 0 && (		
					<div className=' w-full flex items-center justify-evenly gap-5' >
						<div  className='w-1/5 bg-slate-700 text-center py-28 rounded-md text-white font-bold text-2xl cursor-pointer hover:shadow-2xl hover:bg-slate-900 ' onClick={()=>setSelected(1)}>Distributers</div>
						<div  className='w-1/5 bg-slate-700 text-center py-28 rounded-md text-white font-bold text-2xl cursor-pointer hover:shadow-2xl hover:bg-slate-900 ' onClick={()=>setSelected(2)}>Customers</div>
						<div  className='w-1/5 bg-slate-700 text-center py-28 rounded-md text-white font-bold text-2xl cursor-pointer hover:shadow-2xl hover:bg-slate-900 ' onClick={()=>setSelected(3)}>Stock Details</div>
					</div>
				)
			}
			{
				selected === 1 && (
					<Distributers func={ setSelected} />
				)
			}
			{
				selected === 2 && (
					<Customer func={ setSelected}/>
				)
			}
			{
				selected === 3 && (
					<StockDetails func={ setSelected } />
				)
			}
		</>
  )
}

export default StoreMaintains