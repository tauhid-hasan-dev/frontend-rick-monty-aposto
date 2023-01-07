import React, { useEffect, useState } from 'react';
import LocationDetalis from './LocationDetalis';

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    console.log(pageNumber)


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location?page=${pageNumber}`)
            .then(res => res.json())
            .then(data => {
                /* console.log(data) */
                setLocations(data.results)
            })
    }, [pageNumber])
    return (

        <div>
            <div className='flex justify-between py-5'>
                {
                    pageNumber === 1 || <button onClick={() => setPageNumber(pageNumber - 1)} className="btn btn-success btn-sm">Prev</button>
                }
                {
                    pageNumber === 1 && <button onClick={() => setPageNumber(7)} className="btn btn-success btn-sm">Go to last page</button>
                }

                <h1 className='text-2xl font-bold'>Locations</h1>
                {
                    pageNumber === 7 || <button onClick={() => setPageNumber(pageNumber + 1)} className="btn btn-success btn-sm">Next</button>
                }
                {
                    pageNumber === 7 && <button onClick={() => setPageNumber(1)} className="btn btn-success btn-sm">Go to first page</button>
                }
            </div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Dimension</th>
                            <th>Total residents</th>
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