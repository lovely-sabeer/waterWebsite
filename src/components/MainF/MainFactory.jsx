import React, { useState } from 'react'
import Empty from './Empty'
import Stock from './Stock'

function MainFactory() {
    const [bottle, setBottle] = useState(0)
    
    return (
        <>
            {
                bottle == 0 && (
                    <div className=' w-full flex items-center justify-evenly gap-5' >
                        <div onClick={()=>setBottle(1)} className='w-1/5 bg-slate-700 text-center py-28 rounded-md text-white font-bold text-2xl cursor-pointer hover:shadow-2xl hover:bg-slate-900 '>Empty Bottles</div>
                        <div onClick={()=>setBottle(2)} className='w-1/5 bg-slate-700 text-center py-28 rounded-md text-white font-bold text-2xl cursor-pointer hover:shadow-2xl hover:bg-slate-900 '>Stock Bottles</div>
                    </div>

                )
            }
            {
                // bottle == 1 ? <Empty/> : <Stock/>
                bottle == 1 && (
                    <Empty func={setBottle}  />

                )
            }
            {
                bottle == 2 && (
                    <Stock func={setBottle} />

                )
            }

        </>
	)
}

export default MainFactory