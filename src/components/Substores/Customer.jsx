import React, { useEffect,  useState } from 'react'
import AddCustomer from './AddCustomer'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Customer({customer, store, setRender}) {
	const [addnew, setAddnew] = useState(0);
	
	return (
	  <div className='w-full relative' style={{ height: "90vh" }}>
		  <div className=' w-full flex z-20 ' style={{ height: "10vh" }} >
				<span className='w-full flex justify-center items-center'>
					<span className='text-3xl font-bold' >CUSTOMERS	</span>
				</span>
			</div>
			
            <div className=" w-full flex flex-col justify-start items-center "  style={{ height: "90vh"}}>
				<img src="/logo-waves.png" alt="logo" className=" h-96 rounded-full absolute opacity-20" />
				<div className='w-full flex items-center justify-evenly ' style={{ height: "10vh" }}>
					<button></button>
					<button></button>
					<button></button>
					<button className='btn z-30' onClick={() => setAddnew(1)}>Add Sold Items</button>
				</div>
				<div className='w-full flex flex-col items-center z-10  overflow-y-scroll' style={{height:"70vh"}} >
					<table className='text-center flex flex-col '>
						<thead className='sticky top-0'>
							<tr className='h-10 bg-slate-950 text-white border-2 border-black '>
								<th className=' w-44'>Name : </th>
								<th className=' w-44'>Invoice no: </th>
								<th className=' w-44'>Date : </th>
								<th className=' w-44'>Total Amount : </th>
							</tr>
						</thead>
						<tbody>
                            {
                                customer.toReversed().map((item, index) => {
                                    const dates = item.date.split('-');
                                    const formattedDate = `${dates[2]}-${dates[1]}-${dates[0]}`;
                                    return (
                                        <tr key={index} className='h-10 bg-red-100 border-2 border-black'>
        									<td className=' w-44'>{item.customer}</td>
        									<td className=' w-44'>{item.invoiceNo}</td>
        									<td className=' w-44'>{formattedDate}</td>
        									<td className=' w-44'>Rs. {item.totalPrice}</td>
                                        </tr>
                                    )
                                }
                                )
							}	
						</tbody>

					</table>
			  </div>
			    {
					addnew === 1 && <AddCustomer func={setAddnew} store={store} setRender={setRender}/>
				}
            </div>
            {/* <ToastContainer /> */}
		</div>
  )
}

export default Customer
