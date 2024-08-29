import React, { useRef, useEffect } from 'react';

const ImageAnimation = () => {
    const imageBoxRef = useRef(null);
    const imageWrapRef = useRef(null);
    const originalImageRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const imageBox = imageBoxRef.current;
        const imgwrap = imageWrapRef.current;
        const originalimg = originalImageRef.current;
        const line = lineRef.current;

        originalimg.style.width = imageBox.offsetWidth + 'px';

        const leftSpace = imageBox.offsetLeft;

        const handleMouseMove = (e) => {
            const boxWidth = e.pageX - leftSpace + 'px';
            imgwrap.style.width = boxWidth;
            line.style.width = boxWidth
        }

        imageBox.addEventListener('mousemove', handleMouseMove);

        return () => {
            imageBox.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);
    return(
        <div className='containner'>
            <div className='image-box' ref={imageBoxRef}>
                <div className='image'>
                    <img src="" alt="" width="100%"/>
                    <div className='img-drop' ref={imageWrapRef}>
                        <img src="" alt="origianl image" id='originalImg' ref={originalImageRef} />
                    </div>
                    <span id='line' ref={lineRef}>
                        <img src="" alt="Arrow" className='arrow' />
                    </span>
                </div>
            </div>
        </div>
    )
};

export default ImageAnimation;

