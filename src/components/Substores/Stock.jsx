import React, { useState, useEffect } from 'react'

function Stock() {
    const [datas, setDatas] = useState([]);

	const url = "https://waterserver-4f44.onrender.com";

	const getData = async () => {
        await fetch(url + "/store/recieveStore")
            .then(response => response.json())
            .then(data => setDatas(data))
    }
    
	useEffect(() => {
        getData()
	},[])
	
	return (
		<div className='w-full relative'>
			<div className=" w-full flex flex-col justify-center items-center  " style={{ height: "90vh" }}>
				<div className=' w-full flex z-20 ' style={{ height: "10vh" }} >
					<span className='w-full flex justify-center items-center'>
						<span className='text-3xl font-bold' >Store Stock Details </span>
					</span>
				</div>
				<img src="/logo-waves.png" alt="logo" className=" h-96 rounded-full absolute opacity-20" />
				
                <div className='w-full flex flex-col items-center z-10 text-xl  overflow-y-scroll' style={{ height: "80vh" }} >
                    <table className='text-center flex flex-col ' >
                        <thead className='sticky top-0'>
                            <tr className='h-12 bg-slate-950 text-white border border-black '>
                                <th className=' w-80 border-r border-gray-300'>Catogory (ml) </th>
                                <th className=' w-80 '>Balance Quantity (Cage)</th>
                            </tr>
                        </thead>
                        {
                            datas && datas.length > 0 ? (
                                <tbody >
                                    <tr className='h-12 bg-red-100 border border-black'>
                                        <td className=' w-80 border-r border-black'>500ml  (1 x 24) </td>
                                        <td className=' w-80 border-r border-black'>{datas[datas.length - 1].ml500Qty}</td>
                                    </tr>
                                    <tr className='h-12 bg-red-100 border border-black'>
                                        <td className=' w-80 border-r border-black'>1000ml (1 x 15) </td>
                                        <td className=' w-80 border-r border-black'>{ datas[datas.length - 1].ml1000Qty}</td>
                                    </tr>
                                    <tr className='h-12 bg-red-100 border border-black'>
                                        <td className=' w-80 border-r border-black'>1500ml (1 x 12) </td>
                                        <td className=' w-80 border-r border-black'>{ datas[datas.length - 1].ml1500Qty}</td>
                                    </tr>
                                    <tr className='h-12 bg-red-100 border border-black'>
                                        <td className=' w-80 border-r border-black'>5000ml (1 x 4) </td>
                                        <td className=' w-80 border-r border-black'>{datas[datas.length - 1].ml500Qty}</td>
                                    </tr>
                                    <tr className='h-12 bg-red-100 border border-black'>
                                        <td className=' w-80 border-r border-black'>19000ml (1 x 1) </td>
                                        <td className=' w-80 border-r border-black'>{ datas[datas.length - 1].ml19000Qty}</td>
                                    </tr>
                                </tbody>
                            ) : (console.log("Something Error from fetching Data"))
                        }
                    </table>
                </div>
			</div>
		</div>
	)
}

export default Stock