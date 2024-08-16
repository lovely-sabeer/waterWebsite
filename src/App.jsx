import React, { useEffect, useState } from "react";
import Empty from "./components/MainF/Empty";
import Dispatch from "./components/MainF/Dispatch";
import Report from "./components/MainF/Report";
import Distributers from "./components/Substores/Distributers";
import Customer from "./components/Substores/Customer";
import Stock from "./components/Substores/Stock";

function App() {
    const [selected, setSelect] = useState(1)
    
    return (
			<div className="h-screen relative overflow-hidden">
            <div className="w-full bg-slate-800 flex justify-between px-5 items-center sticky top-0 left-0 " style={{ height: "10vh"}}>
                <img src="/logo-waves.png" alt="logo" className=" h-5/6 rounded-full" />
                <div className="flex justify-between items-center gap-5 text-white">
                    <img src="/profile.svg" alt="profile" className=" w-10 h-10  rounded-full  bg-orange-600 " />
                    <div className=" font-bold pr-3 text-lg">Lovely Sabeer</div>
                </div>
            </div>
            <div className="flex " style={{ height: "90vh"}}>

                <div className="flex flex-col w-1/6 border-e-2 border-gray-300  pt-5 ">
                    <div className=" font-bold px-3 py-4 text-lg cursor-pointer hover:bg-slate-300  " onClick={()=>setSelect(1)} >Home</div>
					<div className=" font-bold px-3 text-lg cursor-pointer " >
						<div>Main Factory</div>
						<ul className=" ">
							<li className="py-4 pl-3  hover:bg-slate-300" onClick={() => setSelect(2.1)}>Material Purchase</li>
							<li className="py-4 pl-3  hover:bg-slate-300" onClick={() => setSelect(2.2)}>Dispatch</li>
							<li className="py-4 pl-3  hover:bg-slate-300"  onClick={() => setSelect(2.3)}>Factory Report</li>
						</ul>
					</div>
					<div className=" font-bold px-3 text-lg cursor-pointer" >
						<div>Main Store</div>
						<ul className="w-full">
							<li className="py-4 pl-6  hover:bg-slate-300" onClick={() => setSelect(3.1)}>Whole Sellers</li>
							<li className="py-4 pl-6  hover:bg-slate-300" onClick={() => setSelect(3.2)}>Customers</li>
							<li className="py-4 pl-6  hover:bg-slate-300"  onClick={() => setSelect(3.3)}>Stock Details</li>
						</ul>
					</div>
					<div className=" font-bold px-3 py-4 text-lg cursor-pointer hover:bg-slate-300  " onClick={()=>setSelect(5)} >Users Management</div>
				</div>
                {
                    selected === 1 && (
                        <div className=" w-full flex flex-col justify-center items-center ">
                            <img src="/logo-waves.png" alt="logo" className=" h-5/6 rounded-full absolute opacity-20" />
                            <h1 className="text-8xl font-bold z-10 text-center">WAVES WATER  </h1>
                            <h1 className="text-3xl z-10">Bottled Drinking Water</h1>
        				</div>
                    )
                }
                {
                    selected === 2.1 && (<Empty/>)
                }
                {
                    selected === 2.2 && (<Dispatch/>)
                }
                {
                    selected === 2.3 && (<Report/>)
                }
                {
                    selected === 3.1 && (<Distributers/>)
                }
                {
                    selected === 3.2 && (<Customer/>)
                }
                {
                    selected === 3.3 && (<Stock/>)
                }
                {
                    selected === 5 && (
                        <div className=" w-full flex flex-col justify-start items-center ">
                            <img src="/logo-waves.png" alt="logo" className=" h-5/6 rounded-full absolute opacity-20" />
                            <div className="w-full flex flex-col justify-center items-center gap-5 z-10">
                                <h1 className="text-6xl font-bold p-5 ">USER MANAGEMENT</h1> 
                                <button >Add New User</button>
                                <div className="grid grid-cols-4 text-center p-5 w-4/5 border-2 border-black rounded-md cursor-pointer  font-bold">
                                    <div>Name</div>
                                    <div>Position</div>
                                </div>
                                <div className="grid grid-cols-4 text-center p-5 w-4/5 border-2 border-black rounded-md cursor-pointer  font-bold">
                                    <div>Lovely sabeer</div>
                                    <div>Recieved Bottles: 400</div>
                                </div>
                            </div>
    					</div>
    				)
                }
      	    </div>
        </div>
    );
}


export default App;