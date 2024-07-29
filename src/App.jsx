import React, { useEffect, useState } from "react";
import MainFactory from "./components/MainF/MainFactory";
import StoreMaintains from "./components/Substores/StoreMaintains";


function App() {
    const [selected, setSelect] = useState(1)




    return (
        <div className="h-screen relative overflow-hidden">
            {/* navigation bar  */}
            <div className="w-full bg-slate-800 flex justify-between px-5 items-center sticky top-0 left-0 " style={{ height: "10vh"}}>
                <img src="/logo-waves.png" alt="logo" className=" h-5/6 rounded-full" />
                <div className="flex justify-between items-center gap-5 text-white">
                    <img src="/profile.svg" alt="profile" className=" w-10 h-10  rounded-full  bg-orange-600 " />
                    <div className=" font-bold pr-3 text-lg">Lovely Sabeer</div>
                </div>
            </div>
            {/* main body  */}
            <div className="flex " style={{ height: "90vh"}}>

                {/* Menu bar content */}
                <div className="flex flex-col w-1/6 border-e-2 border-gray-300  pt-5 ">
                    <div className=" font-bold px-3 py-6 text-lg cursor-pointer hover:bg-slate-200  " onClick={()=>setSelect(1)} >Home</div>
                    <div className=" font-bold px-3 py-6 text-lg cursor-pointer hover:bg-slate-200  " onClick={()=>setSelect(2)} >Main Factory </div>
                    <div className=" font-bold px-3 py-6 text-lg cursor-pointer hover:bg-slate-200  " onClick={()=>setSelect(3)} >Sub Stores</div>
                    <div className=" font-bold px-3 py-6 text-lg cursor-pointer hover:bg-slate-200  " onClick={()=>setSelect(4)} >Sales Report</div>
                    <div className=" font-bold px-3 py-6 text-lg cursor-pointer hover:bg-slate-200  " onClick={()=>setSelect(5)} >Users Management</div>
                </div>

                {/* display Content */}
                {
                    selected === 1 && (
                        <div className=" w-full flex flex-col justify-center items-center ">
                            <img src="/logo-waves.png" alt="logo" className=" h-5/6 rounded-full absolute opacity-20" />
                            <h1 className="text-8xl font-bold z-10 text-center">WAVES WATER  </h1>
                            <h1 className="text-3xl z-10">Bottled Drinking Water</h1>
                        </div>)
                }
                {
                    selected === 2 && (<MainFactory />)
                }
                {
                    selected === 3 && (<StoreMaintains/>)
                }
                {
                    selected === 4 && (
                        <div className=" w-full flex flex-col justify-start items-center ">
                            <img src="/logo-waves.png" alt="logo" className=" h-5/6 rounded-full absolute opacity-20" />
                            <div className="w-full flex flex-col justify-center items-center gap-5 z-10">
                                <h1 className="text-6xl font-bold p-5 ">SALES REPORT</h1> 
                                <button >Add new</button>
                                <div className="grid grid-cols-4 text-center p-5 w-4/5 border-2 border-black rounded-md cursor-pointer  font-bold">
                                    <div>Category: 500 ml</div>
                                    <div>Recieved Bottles: 400</div>
                                    <div>Used Bottles: 400</div>
                                    <div>Balance Bottels: 600</div>
                                </div>
                                <div className="grid grid-cols-4 text-center p-5 w-4/5 border-2 border-black rounded-md cursor-pointer  font-bold">
                                    <div>Category: 1 L</div>
                                    <div>Recieved Bottles: 400</div>
                                    <div>Used Bottles: 400</div>
                                    <div>Balance Bottels: 600</div>
                                </div>
                                <div className="grid grid-cols-4 text-center p-5 w-4/5 border-2 border-black rounded-md cursor-pointer  font-bold">
                                    <div>Category: 1.5 L</div>
                                    <div>Recieved Bottles: 400</div>
                                    <div>Used Bottles: 400</div>
                                    <div>Balance Bottels: 600</div>
                                </div>
                                <div className="grid grid-cols-4 text-center p-5 w-4/5 border-2 border-black rounded-md cursor-pointer  font-bold">
                                    <div>Category: 5 L</div>
                                    <div>Recieved Bottles: 400</div>
                                    <div>Used Bottles: 400</div>
                                    <div>Balance Bottels: 600</div>
                                </div>
                                <div className="grid grid-cols-4 text-center p-5 w-4/5 border-2 border-black rounded-md cursor-pointer  font-bold">
                                    <div>Category: 19 L</div>
                                    <div>Recieved Bottles: 400</div>
                                    <div>Used Bottles: 400</div>
                                    <div>Balance Bottels: 600</div>
                                </div>
                            </div>
                        </div>)
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
                        </div>)
                }
            </div>



        </div>
    );
}

export default App;