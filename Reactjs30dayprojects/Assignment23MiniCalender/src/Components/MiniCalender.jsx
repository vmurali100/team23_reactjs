import React, {useState, useEffect } from 'react'


const MiniCalender = () => {
    const [date, setDate] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setyear] = useState("");

    useEffect(() => {
        const today = new Date();

        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        setDate((today.getDate() < 10 ? "0" : "") + today.getDate());
        setDay(weekDays[today.getDay()]);
        setMonth(months[today.getMonth()]);
        setyear(today.getFullYear());
    },[]);

    return (
        <div className='hero'>
            <div className='calender'>
                <div className='left'>
                    <p id='data'>{date}</p>
                </div>
                <div className='left'>
                    <p id='day'>{day}</p>
                </div>
                <div className='right'>
                    <p id='month'>{month}</p>
                </div>
                <div className='right'>
                    <p id='year'>{year}</p>
                </div>
            </div>
        </div>
    )

};

export default MiniCalender;