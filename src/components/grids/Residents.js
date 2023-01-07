import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ResidentCard from './ResidentCard';

function Residents() {
    const data = useLoaderData();
    const residents = data.residents;
    const [residentsObject, setResidentsObject] = useState([])
    console.log(residentsObject);

    //getting data for each resident and creating an array of object to map in the UI
    useEffect(() => {
        residents.map(resident => {
            return fetch(resident)
                .then(res => res.json())
                .then(data => {
                    setResidentsObject(residentsObject => [...residentsObject, data])
                })
        })

    }, [residents])

    return (
        <div>
            <div className='flex justify-center text-3xl font-bold p-5'>
                Resident Count {residents.length}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 pt-10 pb-20 lg:px-20 px-5 ' >
                {
                    residentsObject.map((resident, idx) => <ResidentCard key={idx} resident={resident}></ResidentCard>)
                }
            </div>
        </div>
    )
}

export default Residents