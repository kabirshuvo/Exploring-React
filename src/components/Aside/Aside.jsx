import React, { useEffect, useState } from 'react';
import './Aside.css';

const Aside = ({readingTime}) => {
    const [time, setTime] = useState(readingTime);

    useEffect(()=>{
        const getStorageTime = localStorage.getItem("readingTime")
        setTime(getStorageTime)
    },[readingTime]);

    return (
        <>
            <div className='adide-div card w-100 p-5'>
            <div className='click-counter'>
                <p>Spent time on read : {time} Min.</p>
            </div>
            <div className='adide-div card w-100 p-5'>
                <p>Add Your Fevorites</p>
            </div>
            </div>
        </>
    );
};

export default Aside;