import React, { useState, useEffect } from 'react'
import AddnewDispatch from "./AddnewDispatch";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dispatch({dispatch, empty, setRender }) {
    const [addnew, setAddnew] = useState(0);
    const [dispatchData, setDispatchData] = useState([{ ml500Qty: 0, ml1000Qty: 0, ml1500Qty: 0, ml5000Qty: 0, ml19000Qty: 0 }]);
    // const [allData, setAllData] = useState();

    const url = "https://water-server.vercel.app/api";
    
    const notify = async () => {
        if (dispatchData.length > 0 ) {
            if (
                dispatchData.ml500Qty < 200 || 
                dispatchData.ml1000Qty < 200 || 
                dispatchData.ml1500Qty < 200 || 
                dispatchData.ml5000Qty < 200 || 
                dispatchData.ml19000Qty < 200
            ) {
                toast.error('You have low stock! Please check the Stock Details.');
                
            }
        } else {
            console.log("dispatchData is empty or undefined");
        }
    };
	
    const getData = async () => {
        try {
            await fetch(url + "/empty/emptyRecieve")
                .then(response => response.json())
                .then(data => setDispatchData(data))
            notify();
        }
        catch (error) {
            if (error.name === "AbortError") {
                console.log("Request was aborted");
            } else {
                console.error(error);
            }
        }
    }
	
    // const handleGet = async () => {
    //     try {
    //         const response = await fetch(url + "/dispatch/dispatchrecieve");
    //         const data = await response.json();
    //         setAllData(data);
    //     }catch (error) {
    //         if (error.name === "AbortError") {
    //             console.log("Request was aborted");
    //         } else {
    //             console.error(error);
    //         }
    //     }
    // };

    useEffect(() => {
        getData();
		// handleGet();
	}, [addnew]);

    return (
		<div className='w-full relative'>
			<div className=" w-full flex flex-col justify-center items-center  " style={{ height: "90vh" }}>
				<div className=' w-full flex z-20 ' style={{ height: "10vh" }} >
					<span className='w-full flex justify-center items-center'>
						<span className='text-3xl font-bold' > Dispatch to Sub Store </span>
					</span>
				</div>
				<img src="/logo-waves.png" alt="logo" className=" h-96 rounded-full absolute opacity-20" />
				<div className='w-full flex items-center justify-evenly z-20' style={{ height: "10vh" }}>
					<button></button>
					<button></button>
					<button className='btn' onClick={() => setAddnew(1)}>New Dispatch</button>
				</div>
				<div className='w-full flex flex-col items-center z-10  overflow-y-scroll' style={{ height: "70vh" }} >
                    <table className='text-center flex flex-col '>
                        <thead className='sticky top-0'>
                            <tr className='h-10 bg-slate-950 text-white border border-black'>
                                <th className=' w-48 border-r border-gray-300'>Date : </th>
                                <th className=' w-48 border-r border-gray-300'>500ml : </th>
                                <th className=' w-48 border-r border-gray-300'>1000ml : </th>
                                <th className=' w-48 border-r border-gray-300'>1500ml </th>
                                <th className=' w-48 border-r border-gray-300'>5000ml </th>
                                <th className=' w-48 '>19000ml </th>
                            </tr>
                        </thead>
                        <tbody>
							{
                                dispatch && dispatch.length > 0 ? (
										dispatch.toReversed().map((value, index) => {
                                            const dates = value.date.split('-');
                                            const formattedDate = `${dates[2]}-${dates[1]}-${dates[0]}`;
                                            return (
                                                <tr key={index} className='h-10 bg-red-100 border border-black'>
                                                    <td className=' w-48 border-r border-black'>{formattedDate}</td>
                                                    <td className=' w-48 border-r border-black'>{value.ml500Qty}</td>
                                                    <td className=' w-48 border-r border-black'>{value.ml1000Qty}</td>
                                                    <td className=' w-48 border-r border-black'>{value.ml1500Qty}</td>
                                                    <td className=' w-48 border-r border-black'>{value.ml5000Qty}</td>
                                                    <td className=' w-48 border-r border-black'>{value.ml19000Qty}</td>
                                                </tr>
                                            )
                                        })
                                ) : (
                                    console.log("something Error")
                                )
                            }
                        </tbody>
                    </table>
                </div>
				{
					addnew === 1 && <AddnewDispatch func={ setAddnew}  empty={empty} setRender={setRender} />
				}
            </div>
            <ToastContainer />
		</div>
	)
}

export default Dispatch