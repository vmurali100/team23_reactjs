import React, { useRef } from "react";
import image_0 from './images/back.png'
import image_1 from './images/image-1.png'
import image_2 from './images/image-2.png'
import image_3 from './images/image-3.png'
import image_4 from './images/image-4.png'
import image_5 from './images/image-5.png'
import image_6 from './images/image-6.png'
import image_7 from './images/next.png'

const Gallery = () => {
    const scrollContainerRef = useRef(null);    

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 900;
            const newScrollPosition =
                direction === "left"
                    ? scrollContainerRef.current.scrollLeft - scrollAmount
                    : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.style.scrollBehavior = "smooth";
            scrollContainerRef.current.scrollLeft = newScrollPosition;
        }
    };

    const handleWheel = (event) => {
        event.preventDefault();
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += event.deltaY;
            scrollContainerRef.current.style.scrollBehavior = "auto";
        }
    };

    return (
        <div className="gallery-wrap">
            <img src={image_0} alt="Back" id="backbtn" onClick={() => handleScroll("left")}/>
            <div className="gallery" onWheel={handleWheel} ref={scrollContainerRef}>
                <div>
                    <span><img src={image_1} alt="Image 1" /></span>
                    <span><img src={image_2} alt="Image 2" /></span>
                    <span><img src={image_3} alt="Image 3" /></span>
                </div>

                <div>
                    <span><img src={image_4} alt="Image 4" /></span>
                    <span><img src={image_5} alt="Image 5" /></span>
                    <span><img src={image_6} alt="Image 6" /></span>
                </div>
            </div>
            <img src={image_7} alt="Next" id="nextbtn" onClick={() => handleScroll("right")} />
        </div>
    );
};

export default Gallery;
