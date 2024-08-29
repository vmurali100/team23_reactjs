import React, { useEffect, useState } from 'react';

const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const counDownDate = new Date("Oct 17, 2024 00:00:00").getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = counDownDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
            const minutes = Math.floor(distance % (1000 * 60 * 60 * 24)) / (1000 * 60);
            const seconds = Math.floor(distance % (1000 * 60)) / 1000

            setTimeLeft({
                days: days.toString().padStart(2, '0'),
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0')
            });
        };
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval)
        
    }, []);
    return (
        <div className='container'>
            <img src="" alt="" />
            <div className='content'>
                <p>Website underMaintaince</p>
                <h1>we are launching Soon</h1>
                <div className='launchtime'>
                    <div>
                        <p id='days'>{timeLeft.days}</p>
                        <span>Days</span>
                    </div>
                    <div>
                        <p id='hours'>{timeLeft.hours}</p>
                        <span>Hours</span>
                    </div>
                    <div>
                        <p id='minutes'>{timeLeft.minutes}</p>
                        <span>Minutes</span>
                    </div>
                    <div>
                        <p id='seconds'>{timeLeft.seconds}</p>
                        <span>Seconds</span>
                    </div>
                    <div>
                        <button type='button'>
                            learn More <img src="" alt="" />
                        </button>
                    </div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;
