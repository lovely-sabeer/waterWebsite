import React, { useEffect, useState } from 'react'



const Category = ({setQty500, setQty1000, setQty1500, setQty5000, setQty19000}) => {
	return (
		<div className="w-full flex justify-center ">
            <table className='text-center flex flex-col ' >
                <thead className='sticky top-0'>
                    <tr className='h-10 bg-slate-950 text-white border-2 border-black '>
                        <th className=' w-80 border-r-2'>Catogory (ml) </th>
                        <th className=' w-80'> Quantity (cage)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='h-10 bg-white border-2 border-black'>
                        <td className=' w-80 border-r-2 border-black'>500ml ( 1 x 24)</td>
                        <td className=' w-80'><input type="number" onChange={(e) => { setQty500(e.target.value)}} placeholder="Enter quantity" className='w-full h-full p-1 text-center outline-none'/></td>
                    </tr>
                    <tr className='h-10 bg-white border-2 border-black'>
                        <td className=' w-80 border-r-2 border-black'>1000ml ( 1 x 15)</td>
                        <td className=' w-80'><input type="number" onChange={(e) => { setQty1000(e.target.value)}} placeholder="Enter quantity" className='w-full h-full p-1 text-center outline-none'/></td>
                    </tr>
                    <tr className='h-10 bg-white border-2 border-black'>
                        <td className=' w-80 border-r-2 border-black'>1500ml ( 1 x 12)</td>
                        <td className=' w-80'><input type="number" onChange={(e) => { setQty1500(e.target.value)}} placeholder="Enter quantity" className='w-full h-full p-1 text-center outline-none'/></td>
                    </tr>
                    <tr className='h-10 bg-white border-2 border-black'>
                        <td className=' w-80 border-r-2 border-black'>5000ml ( 1 x 4)</td>
                        <td className=' w-80'><input type="number" onChange={(e) => { setQty5000(e.target.value)}} placeholder="Enter quantity" className='w-full h-full p-1 text-center outline-none'/></td>
                    </tr>
                    <tr className='h-10 bg-white border-2 border-black'>
                        <td className=' w-80 border-r-2 border-black'>19000ml ( 1 x 1)</td>
                        <td className=' w-80'><input type="number" onChange={(e) => { setQty19000(e.target.value)}} placeholder="Enter quantity" className='w-full h-full p-1 text-center outline-none'/></td>
                    </tr>
                </tbody>
            </table>
		</div>
	)
}

function AddnewDispatch({ func, empty, setRender }) {
    const manufacturerName = "Sub Store";
    const [date, setDate] = useState(()=>{const today = new Date().toISOString().split('T')[0];return today;});
    const [ml500Qty, setMl500Qty] = useState(0);
    const [ml1000Qty, setMl1000Qty] = useState(0);
    const [ml1500Qty, setMl1500Qty] = useState(0);
    const [ml5000Qty, setMl5000Qty] = useState(0);
    const [ml19000Qty, setMl19000Qty] = useState(0);
    const [emptyData, setEmptyData] = useState([]);
    const [dispatchData, setDispatchData] = useState([]);
    
	const [some, setSome] = useState(0);
	const flag = false
    
    const url = "https://water-server.vercel.app/api";

    useEffect(() => {
        setEmptyData(empty)
    }, [some])

    const handlePost = () => {
        fetch(url + '/dispatch/addDispatch', {
                method: 'POST',
                headers: { 'Content-Type': 'application/JSON' },
                body: JSON.stringify({date, ml500Qty, ml1000Qty, ml1500Qty, ml5000Qty, ml19000Qty}) 
        })
        .then((res, err) => {
            res.ok ? func(0) : console.log("something wrong", err)  
        })
    }

    const handleReport = () => {
        fetch(url + '/report/addReport', {
                method: 'POST',
                headers: { 'Content-Type': 'application/JSON' },
                body: JSON.stringify({manufacturerName, date, ml500Qty: parseInt(ml500Qty)*24 , ml1000Qty: parseInt(ml500Qty)*15, ml1500Qty: parseInt(ml500Qty)*12, ml5000Qty: parseInt(ml500Qty)*4, ml19000Qty, flag}) 
        })
        .then((res, err) => {
            res.ok ? func(0) : console.log("something wrong", err)  
        })
    }

    // const getEmptyData = async () => {
    //     await fetch(url + "/empty/emptyRecieve")
    //     .then(response => response.json())
    //     .then(data => setEmptyData(data))
    // }
    
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
            body: JSON.stringify({ date: ndate, ml500Qty: parseInt(nml500Qty) + parseInt(ml500Qty), ml1000Qty: parseInt(nml1000Qty) + parseInt(ml1000Qty), ml1500Qty: parseInt(nml1500Qty) + parseInt(ml1500Qty), ml5000Qty: parseInt(nml5000Qty) + parseInt(ml5000Qty), ml19000Qty: parseInt(nml19000Qty) + parseInt(ml19000Qty) })
            }
        )
        .then((res, err) => {res.ok ? func(0) : console.log("something wrong", err)}
        )
    }

    useEffect(() => {
        handleGetStore()
    }, [])

    const handleUpdate = async () => {
        const { _id: id, date: ndate, ml500Qty: nml500Qty, ml1000Qty: nml1000Qty, ml1500Qty: nml1500Qty, ml5000Qty: nml5000Qty, ml19000Qty: nml19000Qty } = emptyData[0];
        await fetch(url + "/empty/updateEmpty/" + id, {
            method: 'PUT',
            headers:{'Content-Type':'application/JSON'},
            body: JSON.stringify({date: ndate, ml500Qty: parseInt(nml500Qty)-(parseInt(ml500Qty)*24), ml1000Qty: parseInt(nml1000Qty)-(parseInt(ml1000Qty)*15), ml1500Qty: parseInt(nml1500Qty)-(parseInt(ml1500Qty)*12), ml5000Qty: parseInt(nml5000Qty)-(parseInt(ml5000Qty)*4), ml19000Qty: parseInt(nml19000Qty)-parseInt(ml19000Qty)})})
					.then((res, err) => {
						if (res.ok) {
							func(0);
							setRender(2.2)
						}
						else {
							console.log("something wrong", err)
						}
        })
    }
       
    return (
		<div className=' absolute w-4/6  border-2 border-black rounded-md p-7 bg-white z-20 flex flex-col items-center justify-center ' style={{ boxShadow: "5px 5px 20px black, -5px -5px 20px black" }}>
			<img src="/xmark.svg" alt="" className="absolute w-9 top-0 right-0 m-3 bg-red-600 px-2 py-1 cursor-pointer rounded" onClick={()=>{func(0)}}/>
			<div className=" py-4">
                <div className='text-xl font-bold underline'> Dispatch to Sub Store</div>
			</div>
			<div className="flex w-full">
				<div className=" self-start flex gap-6 py-4">
					<label className='font-bold text-lg' > Date : </label>
					<input type="date" value={date} onChange={(e) => { setDate(e.target.value)}} placeholder="Enter price"  className='w-2/3 p-1 rounded-md border' />
				</div>
            </div>
			<Category setQty500={setMl500Qty} setQty1000={setMl1000Qty} setQty1500={setMl1500Qty} setQty5000={setMl5000Qty} setQty19000={setMl19000Qty} />
            <button className='mt-7 bg-green-600 hover:bg-green-800 px-8 py-2 rounded text-white font-bold ' onClick={() => { handlePost(); setSome(some + 1);handleReport(); handleUpdate(); handleUpdateStore()}}>Submit</button>
		</div>
	)
}

export default AddnewDispatch