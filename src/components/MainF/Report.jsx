import React, { useState, useEffect } from "react";


function Report() {
    const [allData, setAllData] = useState();

    const url = "https://waterserver-4f44.onrender.com";

    const handleGet = async () => {
        try {
            const response = await fetch(url + "/report/reportRecieve");
            const data = await response.json();
            setAllData(data);
        }catch (error) {
            if (error.name === "AbortError") {
                console.log("Request was aborted");
            } else {
                console.error(error);
            }
        }
    };  

    useEffect(() => {
        handleGet();
    }, []);
	
  return (
		<div className='w-full relative' style={{ height: "90vh" }}>
            <div className=' w-full flex z-20 ' style={{ height: "10vh" }} >
                <span className='w-full flex justify-center items-center'>
                    <span className='text-3xl font-bold' >Factory Report</span>
                </span>
            </div>
			
            <div className=" w-full flex flex-col justify-start items-center " style={{ height: "90vh" }}>
                <img src="/logo-waves.png" alt="logo" className=" h-96 rounded-full absolute opacity-20" />
                <div className='w-full flex flex-col items-center z-10  overflow-y-scroll' style={{ height: "80vh" }} >
                    <table className='text-center flex flex-col '>
                        <thead className='sticky top-0'>
                            <tr className='h-10 bg-black text-white border border-black '>
                                <th className=' w-1/12 border-r border-gray-700'>Type : </th>
                                <th className=' w-1/12 border-r border-gray-700'>Date : </th>
                                <th className=' w-40 border-r border-gray-700'>Invoice no: </th>
                                <th className=' w-40 border-r border-gray-700'>500ml (pcs) : </th>
                                <th className=' w-40 border-r border-gray-700'>1000ml (pcs) : </th>
                                <th className=' w-40 border-r border-gray-700'>1500ml (pcs) : </th>
                                <th className=' w-40 border-r border-gray-700'>5000ml (pcs) : </th>
                                <th className=' w-40 border-r border-gray-700'>19000ml (pcs) : </th>
                                <th className=' w-40'>Total Amount : </th>
                            </tr>
                        </thead>
                        <tbody>
							{
                                allData && allData.length > 0 ? (
									allData.toReversed().map((value, index) => {
										const dates = value.date.split('-');
                                        const formattedDate = `${dates[2]}-${dates[1]}-${dates[0]}`;
                                        return(
                                            value.flag == true ? (
                                                <tr key={index} className='h-10 bg-red-100 border border-black'>
                                                    <td className=' w-1/12 border-r border-gray-700 bg-green-600'>Purchase</td>
                                                    <td className=' w-1/12 border-r border-gray-700 '>{formattedDate}</td>
                                                    <td className=' w-40 border-r border-gray-700 '>{value.invoiceNo}</td>
                                                    <td className=' w-40 border-r border-gray-700 '>{value.ml500Qty}</td>
                                                    <td className=' w-40 border-r border-gray-700 '>{value.ml1000Qty}</td>
                                                    <td className=' w-40 border-r border-gray-700 '>{value.ml1500Qty}</td>
                                                    <td className=' w-40 border-r border-gray-700 '>{value.ml5000Qty}</td>
                                                    <td className=' w-40 border-r border-gray-700 '>{value.ml19000Qty}</td>
                                                    <td className=' w-40 border-r border-gray-700 '>{value.totalPrice}</td>
                                                </tr>
                                            ) : (
                                                <tr key={index} className='h-10 bg-red-100 border border-black'>
                                                    <td className=' w-1/12 border-r border-gray-700 bg-red-600 '>Dispatch</td>
                                                    <td className=' w-1/12 border-r border-gray-700 '>{formattedDate}</td>
                                                    <td className=' w-40 border-r border-gray-700 '>Sub Store</td>
                                                    <td className=' w-40 border-r border-gray-700 '>{value.ml500Qty}</td>
                                                    <td className=' w-40 border-r border-gray-700 '>{value.ml1000Qty}</td>
                                                    <td className=' w-40 border-r border-gray-700 '>{value.ml1500Qty}</td>
                                                    <td className=' w-40 border-r border-gray-700 '>{value.ml5000Qty}</td>
                                                    <td className=' w-40 border-r border-gray-700 '>{value.ml19000Qty}</td>
                                                    <td className=' w-40 border-r border-gray-700 '>undifined</td>
                                                </tr>
                                            )
                                        )
                                    })
                                ) : (
                                    console.log("something Error")
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
	)
}

export default Report;
