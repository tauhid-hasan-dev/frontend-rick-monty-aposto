import React, { useEffect, useState } from 'react';
import LocationDetalis from './LocationDetalis';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    //getting location with location API
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location?page=${pageNumber}`)
            .then(res => res.json())
            .then(data => {
                setLocations(data.results)
            })
    }, [pageNumber])
    return (

        <div>
            <div className='flex justify-between py-8 px-5 lg:px-20 '>
                {
                    pageNumber === 1 || <button onClick={() => setPageNumber(pageNumber - 1)} className="btn  bg-[#F9F9F4] text-black hover:bg-[#e9e9dc] border-[#F9F9F4] hover:border-[#e9e9dc] shadow-md btn-sm"><span className='mr-1'> <FaAngleLeft></FaAngleLeft></span> Prev</button>
                }
                {
                    pageNumber === 1 && <button onClick={() => setPageNumber(7)} className="btn  bg-[#F9F9F4] text-black hover:bg-[#e9e9dc] border-[#F9F9F4] hover:border-[#e9e9dc] shadow-md btn-sm">Go to last page</button>
                }

                <h1 className='text-2xl font-bold'>Locations</h1>
                {
                    pageNumber === 7 || <button onClick={() => setPageNumber(pageNumber + 1)} className="btn  bg-[#F9F9F4] text-black hover:bg-[#e9e9dc] border-[#F9F9F4] hover:border-[#e9e9dc] shadow-md btn-sm">Next <span className='ml-2'><FaAngleRight></FaAngleRight></span></button>
                }
                {
                    pageNumber === 7 && <button onClick={() => setPageNumber(1)} className="btn  bg-[#F9F9F4] text-black hover:bg-[#e9e9dc] border-[#F9F9F4] hover:border-[#e9e9dc] shadow-md btn-sm">Go to first page</button>
                }
            </div>
            <div className="overflow-x-auto px-5 lg:px-20 pb-10 ">
                <table className="table table-compact w-full shadow-md ">
                    <thead>
                        <tr>
                            <th className='bg-[#F9F9F4]'></th>
                            <th className='bg-[#F9F9F4]'>Location name</th>
                            <th className='bg-[#F9F9F4]'>Type</th>
                            <th className='bg-[#F9F9F4]'>Dimension</th>
                            <th className='bg-[#F9F9F4]'>Resident Count</th>
                        </tr>
                    </thead>
                    <tbody >
                        {locations.map(location => <LocationDetalis key={location.id} location={location}></LocationDetalis>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Locations;