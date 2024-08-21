import React, { useEffect, useState } from 'react'

function AddCustomer({ func }) {
    const [customer, setCustomer] = useState("");
	const [invoiceNo, setInvoice] = useState("");
    const [date, setDate] = useState(() => {const today = new Date().toISOString().split('T')[0];return today;});
    const [ml500Qty, setMl500Qty] = useState(0);
    const [ml1000Qty, setMl1000Qty] = useState(0);
    const [ml1500Qty, setMl1500Qty] = useState(0);
    const [ml5000Qty, setMl5000Qty] = useState(0);
    const [ml19000Qty, setMl19000Qty] = useState(0);
    const [ml500Price, setMl500Price] = useState(0);
	const [ml1000Price, setMl1000Price] = useState(0);
	const [ml1500Price, setMl1500Price] = useState(0);
	const [ml5000Price, setMl5000Price] = useState(0);
    const [ml19000Price, setMl19000Price] = useState(0);
    const [paid, setPaid] = useState(0)
	const totalPrice = parseInt(ml500Price == "" ? 0 : ml500Price) + parseInt(ml1000Price == "" ? 0 : ml1000Price ) + parseInt(ml1500Price == "" ? 0 : ml1500Price) + parseInt(ml5000Price == "" ? 0 : ml5000Price) + parseInt(ml19000Price == "" ? 0 : ml19000Price);
    const [some, setSome] = useState(0);
    const [dispatchData, setDispatchData] = useState([]);

    
    const url = "https://water-server.vercel.app/api";
    
    const handlePost = () => {
        fetch(url + '/customer/addCustomer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/JSON' },
                body: JSON.stringify({customer, invoiceNo, date, ml500Qty, ml500Price, ml1000Qty, ml1000Price, ml1500Qty,  ml1500Price, ml5000Qty, ml5000Price, ml19000Qty, ml19000Price, paid, totalPrice }) 
        })
        .then((res, err) => {
            res.ok ? func(0) : console.log("something wrong", err)  
        })
    }

    const handleGetStore = async () => {
        try {
            const response = await fetch(url + "/store/recieveStore");
            const data = await response.json();
            setDispatchData(data);
        }catch (error) {
            if (error.name === "AbortError") {
                console.log("Request was aborted");
            } else {
                console.error(error);
            }
        }
    };

    const handleUpdateStore = async () => {
        const { _id: id, date: ndate, ml500Qty: nml500Qty, ml1000Qty: nml1000Qty, ml1500Qty: nml1500Qty, ml5000Qty: nml5000Qty, ml19000Qty: nml19000Qty } = dispatchData[0];
        await fetch(url + "/store/updateStore/" + id, {
            method: 'PUT',
            headers:{'Content-Type':'application/JSON'},
            body: JSON.stringify({ date: ndate, ml500Qty: parseInt(nml500Qty) - parseInt(ml500Qty), ml1000Qty: parseInt(nml1000Qty) - parseInt(ml1000Qty), ml1500Qty: parseInt(nml1500Qty) - parseInt(ml1500Qty), ml5000Qty: parseInt(nml5000Qty) - parseInt(ml5000Qty), ml19000Qty: parseInt(nml19000Qty) - parseInt(ml19000Qty) })
            }
        )
        .then((res, err) => {res.ok ? func(0) : console.log("something wrong", err)}
        )
    }
    
    useEffect(() => {
        handleGetStore();
    })
       
    return (
		<div className=' absolute w-4/6  border-2 border-black top-5 rounded-md p-7 bg-white z-30 flex flex-col items-center justify-center ' style={{ boxShadow: "5px 5px 20px black, -5px -5px 20px black" }}>
			<img src="/xmark.svg" alt="" className="absolute w-9 top-0 right-0 m-3 bg-red-600 px-2 py-1 cursor-pointer rounded" onClick={()=>{func(0)}}/>
			<div className=" py-4">
                <div className='text-xl font-bold underline'> Sold to  Customer </div>
			</div>
            <div className="flex flex-col w-full">
                <div className='flex items-center gap-6'>
					<label className='font-bold text-lg'>Customer: </label>
					<input type="name" placeholder="DIstributer name" className='w-1/3 p-1 border-b-2' onChange={(e)=>setCustomer(e.target.value)} />
                </div>
                <div className='flex w-full justify-between pr-2'>
    				<div className="flex gap-6 items-center py-4 w-1/2">
    					<label className='font-bold text-lg'>Invoice No : </label>
    					<input type="number"  placeholder="Enter InvoiceNo Number"  className='w-2/3 p-1 border-b-2 ' onChange={(e)=>setInvoice(e.target.value)}/>
    				</div>
    				<div className=" flex items-center gap-6 py-4">
    					<label className='font-bold text-lg'> Date : </label>
    					<input type="date" onChange={(e) => { setDate(e.target.value)}} value={date} className='w-2/3 p-1 rounded-md border-2' />
    				</div>
                </div>
            </div>
            <table className='text-center flex flex-col ' >
                <thead className='sticky top-0'>
                    <tr className='h-8 bg-slate-950 text-white border-2 border-black '>
                        <th className=' w-80 '>Catogory (ml) </th>
                        <th className=' w-80'> Quantity (cage)</th>
                        <th className=' w-80'> Quantity (cage)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='h-8 bg-white border-2 border-black'>
                        <td className=' w-80 border-r-2 border-black'>500ml ( 1 x 24)</td>
                        <td className=' w-80 border-2 border-black'><input type="number" onChange={(e) => { setMl500Qty(e.target.value)}} placeholder="Enter quantity" className='w-full h-full p-1 text-center outline-none'/></td>
                        <td className=' w-80'><input type="number" onChange={(e) => { setMl500Price(e.target.value)}} placeholder="Enter Price" className='w-full h-full p-1 text-center outline-none'/></td>
                    </tr>
                    <tr className='h-8 bg-white border-2 border-black'>
                        <td className=' w-80 border-r-2 border-black'>1000ml ( 1 x 15)</td>
                        <td className=' w-80 border-2 border-black'><input type="number" onChange={(e) => { setMl1000Qty(e.target.value)}} placeholder="Enter quantity" className='w-full h-full p-1 text-center outline-none'/></td>
                        <td className=' w-80'><input type="number" onChange={(e) => { setMl1000Price(e.target.value)}} placeholder="Enter Price" className='w-full h-full p-1 text-center outline-none'/></td>
                    </tr>
                    <tr className='h-8 bg-white border-2 border-black'>
                        <td className=' w-80 border-r-2 border-black'>1500ml ( 1 x 12)</td>
                        <td className=' w-80 border-2 border-black'><input type="number" onChange={(e) => { setMl1500Qty(e.target.value)}} placeholder="Enter quantity" className='w-full h-full p-1 text-center outline-none'/></td>
                        <td className=' w-80'><input type="number" onChange={(e) => { setMl1500Price(e.target.value)}} placeholder="Enter Price" className='w-full h-full p-1 text-center outline-none'/></td>
                    </tr>
                    <tr className='h-8 bg-white border-2 border-black'>
                        <td className=' w-80 border-r-2 border-black'>5000ml ( 1 x 4)</td>
                        <td className=' w-80 border-2 border-black'><input type="number" onChange={(e) => { setMl5000Qty(e.target.value)}} placeholder="Enter quantity" className='w-full h-full p-1 text-center outline-none'/></td>
                        <td className=' w-80'><input type="number" onChange={(e) => { setMl5000Price(e.target.value)}} placeholder="Enter Price" className='w-full h-full p-1 text-center outline-none'/></td>
                    </tr>
                    <tr className='h-8 bg-white border-2 border-black'>
                        <td className=' w-80 border-r-2 border-black'>19000ml ( 1 x 1)</td>
                        <td className=' w-80 border-2 border-black'><input type="number" onChange={(e) => { setMl19000Qty(e.target.value)}} placeholder="Enter quantity" className='w-full h-full p-1 text-center outline-none'/></td>
                        <td className=' w-80'><input type="number" onChange={(e) => { setMl19000Price(e.target.value)}} placeholder="Enter Price" className='w-full h-full p-1 text-center outline-none'/></td>
                    </tr>
                </tbody>
            </table>
            <div className='flex flex-col w-full items-end justify-end'>
				<div className="flex gap-6 items-center justify-end w-1/2 p-1">
                    <label className='font-bold text-lg '>Total Amount :  </label>
                    <div className='w-2/4 font-bold '>{totalPrice}</div>
				</div>
				<div className=" flex items-center gap-6 p-1">
					<label className='font-bold text-lg '> Paid Amount : </label>
                    <input type="number"  placeholder="Enter InvoiceNo Number"  className='w-2/4border-b-2 ' onChange={(e)=>setPaid(e.target.value == "" ? 0 :  e.target.value)}/>
				</div>
            </div>
            <button className=' bg-green-600 hover:bg-green-800 px-8 py-2 rounded text-white font-bold ' onClick={() => { handlePost(); setSome(some + 1); handleUpdateStore() }}>Submit</button>
		</div>
	)
}

export default AddCustomer