import { useState } from "react"

export default function Navbar({setCount,ispending}){
  
    const [data,setData]=useState(0);
    function getValue (){
        if(data<100){
setCount(data);
        }else{
            setCount(10);
        }

    }

    return (
        <div className="flex md:justify-between gap-3  items-center md:w-[80vw] w-[60vw] mx-auto mt-4 ">
            <h1 className="md:text-3xl font-extrabold italic ">Image Gallery</h1>
            <div className="flex ">
                <p className="px-3 hidden md:block">How many Image : </p>
            <input className="h-8 border-2 rounded-2xl p-2 w-24 " type="number" placeholder="how many image get" value={data} onChange={e=>setData(e.target.value)}  />
            <button disabled={ispending} onClick={getValue} className="border-2 rounded-2xl p-1 w-19 bg-blue-600 text-white font-bold  cursor-pointer">Search</button>
            </div>
        </div>
    )
}