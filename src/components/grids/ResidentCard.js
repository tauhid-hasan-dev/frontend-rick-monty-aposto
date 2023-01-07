import React from 'react'
import { FaCircle } from "react-icons/fa";

function ResidentCard({ resident }) {
    console.log(resident);
    const { name, status, species, type, gender, image, origin, location } = resident;
    //Name, species, type, gender ve origin


    return (
        <div className="card card-side bg-slate-800  text-white shadow-xl gap-3  ">
            <figure className='mr-3 w-[45%] h-full'><img src={image} alt="Movie" /></figure>
            <div className=" flex flex-col justify-between  py-5">
                <div className='flex items-center gap-2'>
                    {status === 'Alive' && <FaCircle className={"text-green-500"}></FaCircle>}
                    {status === 'Dead' && <FaCircle className={"text-red-500"}></FaCircle>}
                    {status === 'unknown' && <FaCircle className={"text-yellow-500"}></FaCircle>}
                    <h2 className="card-title text-[18px]">{resident.name}</h2>
                </div>

                <p className='text-sm'><span className='text-slate-300'>Status:</span> {status} </p>
                <p className='text-sm'><span className='text-slate-300'>Type:</span> {type ? type : "Not Found"}</p>
                <p className='text-sm'><span className='text-slate-300'>Gender:</span> {gender}</p>
                <p className='text-sm'><span className='text-slate-300'>Origin:</span> {origin.name}</p>
                <p className='text-sm'><span className='text-slate-300'>Location:</span> {location.name}</p>

            </div>
        </div>
    )
}

export default ResidentCard