import React, { useEffect, useState } from 'react';
import Addnew from './AddnewEmpty';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Empty() {
    const [addnew, setAddnew] = useState(0);
    const [datas, setDatas] = useState([]);

	const url = "https://water-server.vercel.app/api";

	const getData = async () => {
        await fetch(url + "/empty/emptyRecieve")
        .then(response => response.json())
        .then(data => setDatas(data))
    }
    
	useEffect(() => {
        getData()
    }, [addnew])
    
	useEffect(() => {
		getData()
    }, [])
    
	return (
		<div className='w-full relative'>
			<div className=" w-full flex flex-col justify-center items-center  " style={{ height: "90vh" }}>
				<div className=' w-full flex z-20 ' style={{ height: "10vh" }} >
					<span className='w-full flex justify-center items-center'>
						<span className='text-3xl font-bold' >EMPTY BOTTLES </span>
					</span>
				</div>
				<img src="/logo-waves.png" alt="logo" className=" h-96 rounded-full absolute opacity-20" />
				<div className='w-full flex items-center justify-evenly z-20 ' style={{ height: "10vh" }}>
					<button></button>
					<button></button>
                    <button className='btn' onClick={() => setAddnew(1)}>Add New Stock</button>
                </div>
                <div className='w-full flex flex-col items-center z-10 text-xl  overflow-y-scroll' style={{ height: "70vh" }} >
                    <table className='text-center flex flex-col ' >
                        <thead className='sticky top-0'>
                            <tr className='h-12 bg-slate-950 text-white border border-black '>
                                <th className=' w-80 border-r border-gray-300'>Catogory (ml) </th>
                                <th className=' w-80 '>Balance Quantity (pcs)</th>
                            </tr>
                        </thead>
                        {
                            datas && datas.length > 0 ? (
                                <tbody >
                                    <tr className='h-12 bg-red-100 border border-black'>
                                        <td className=' w-80 border-r border-black'>500 ml : </td>
                                        <td className=' w-80 border-r border-black'>{datas[0].ml500Qty}</td>
                                    </tr>
                                    <tr className='h-12 bg-red-100 border border-black'>
                                        <td className=' w-80 border-r border-black'>1000 ml :</td>
                                        <td className=' w-80 border-r border-black'>{ datas[0].ml1000Qty}</td>
                                    </tr>
                                    <tr className='h-12 bg-red-100 border border-black'>
                                        <td className=' w-80 border-r border-black'>1500 ml :</td>
                                        <td className=' w-80 border-r border-black'>{ datas[0].ml1500Qty}</td>
                                    </tr>
                                    <tr className='h-12 bg-red-100 border border-black'>
                                        <td className=' w-80 border-r border-black'>5000 ml :</td>
                                        <td className=' w-80 border-r border-black'>{datas[0].ml500Qty}</td>
                                    </tr>
                                    <tr className='h-12 bg-red-100 border border-black'>
                                        <td className=' w-80 border-r border-black'>19000 ml :</td>
                                        <td className=' w-80 border-r border-black'>{ datas[0].ml19000Qty}</td>
                                    </tr>
                                </tbody>
                            ) : (console.log("Something Error from fetching Data"))
                        }
                    </table>
                </div>
				{
					addnew === 1 && <Addnew func={ setAddnew} addnew={addnew}  />
				}
				
			</div>
		</div>
	)
}

export default Empty
