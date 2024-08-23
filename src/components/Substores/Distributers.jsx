import React, { useState, useEffect} from 'react'
import AddDistributer from './AddDistributer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Distributers({distributers, store, setRender}) {
    const [addnew, setAddnew] = useState(0);
    const [dispatchData, setDispatchData] = useState([{ ml500Qty: 0, ml1000Qty: 0, ml1500Qty: 0, ml5000Qty: 0, ml19000Qty: 0 }]);

    const url = "https://water-server.vercel.app/api";

    // const notify = async () => {
    //     console.log(dispatchData)
    //     if (dispatchData.length > 0) {
    //         if (
    //             dispatchData.ml500Qty < 200 || 
    //             dispatchData.ml1000Qty < 200 || 
    //             dispatchData.ml1500Qty < 200 || 
    //             dispatchData.ml5000Qty < 200 || 
    //             dispatchData.ml19000Qty < 200
    //         ) {
    //             toast.error('You have low stock! Please check the Stock Details.');
    //         }
    //     } else {
    //         console.log("dispatchData is empty or undefined");
    //     }
    // };

    // const handleGetStore = async () => {
    //     try {
    //         const response = await fetch(url + "/recieve/recieveStore");
    //         const data = await response.json();
    //         setDispatchData(data);

    //         notify();
    //     } catch (error) {
    //         if (error.name === "AbortError") {
    //             console.log("Request was aborted");
    //         } else {
    //             console.error(error);
    //         }
    //     }
    // };

    // const handleGet = async () => {
    //     try {
    //         const response = await fetch(url + "/distributer/DistributersRecieve");
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

    // useEffect(() => {
    //     handleGetStore();
    // }, [addnew]);
    
    return (
        <div className='w-full relative' style={{ height: "90vh" }}>
            <div className=' w-full flex z-20 ' style={{ height: "10vh" }} >
                <span className='w-full flex justify-center items-center'>
                    <span className='text-3xl font-bold' >WHOLE SELLERS</span>
                </span>
            </div>
			
            <div className=" w-full flex flex-col justify-start items-center " style={{ height: "90vh" }}>
                <img src="/logo-waves.png" alt="logo" className=" h-96 rounded-full absolute opacity-20" />
                <div className='w-full flex items-center justify-evenly ' style={{ height: "10vh" }}>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button className='btn z-30' onClick={() => setAddnew(1)}>Add Distributed Items</button>
                </div>
                <div className='w-full flex flex-col items-center z-10  overflow-y-scroll' style={{ height: "70vh" }} >
                    <table className='text-center flex flex-col '>
                        <thead className='sticky top-0'>
                            <tr className='h-10 bg-slate-950 text-white border-2 border-black '>
                                <th className=' w-44'>Name : </th>
                                <th className=' w-44'>Invoice no: </th>
                                <th className=' w-44'>Date : </th>
                                <th className=' w-44'>Total Amount : </th>
                                <th className=' w-44'>Amount Paid : </th>
                                <th className=' w-44'>Balance Amount : </th>
                            </tr>
                        </thead>
                        <tbody>
							{
                                distributers && distributers.length > 0 ? (
                                    distributers.toReversed().map((value, index) => {
                                        const dates = value.date.split('-');
                                        const formattedDate = `${dates[2]}-${dates[1]}-${dates[0]}`;
                                        return (
                                            <tr key={index} className='h-10 bg-red-100 border-2 border-black'>
                                                    <td className=' w-44'>{value.distributer}</td>
                                                    <td className=' w-44'>{value.invoiceNo}</td>
                                                    <td className=' w-44'>{formattedDate}</td>
                                                    <td className=' w-44'>{value.totalPrice}</td>
                                                    <td className=' w-44'>{value.paid}</td>
                                                    <td className=' w-44'>{value.balance}</td>
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
                    addnew === 1 && <AddDistributer func={setAddnew} store={store} setRender={setRender} />
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default Distributers