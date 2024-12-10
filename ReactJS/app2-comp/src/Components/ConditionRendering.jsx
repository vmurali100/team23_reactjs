import React from "react";
import { useState } from "react";

const ConditionRendering = () => {
  const [showImage, setShowImage] = useState(false);
  const handleShowImage = () => {
    setShowImage(!showImage);
  };
  return (
    <div>
      <button onClick={handleShowImage}>Show Image</button>
      {/* {showImage &&  <img  style={{width:500}} src="https://media.istockphoto.com/id/1443287362/photo/woman-hiking-in-mountains-on-the-background-of-lysefjorden.jpg?s=1024x1024&w=is&k=20&c=SfJhXF81MvbZ2kAdc5tBYR9C7Xs4tmGY2GuRQr_FhDs=" alt="" />}
        <img src="https://media.istockphoto.com/id/1335845017/photo/pink-blooming-lotus-close-up.jpg?s=2048x2048&w=is&k=20&c=zOc_R464oXkyu-nVcwaR22f6Ot7o2idIP74cFAPtN4A=" alt="" /> */}
      {showImage ? (
        <img
          style={{ width: 500 }}
          src="https://media.istockphoto.com/id/1443287362/photo/woman-hiking-in-mountains-on-the-background-of-lysefjorden.jpg?s=1024x1024&w=is&k=20&c=SfJhXF81MvbZ2kAdc5tBYR9C7Xs4tmGY2GuRQr_FhDs="
          alt=""
        />
      ) : (
        <img
          src="https://media.istockphoto.com/id/1335845017/photo/pink-blooming-lotus-close-up.jpg?s=2048x2048&w=is&k=20&c=zOc_R464oXkyu-nVcwaR22f6Ot7o2idIP74cFAPtN4A="
          alt=""
          style={{ width: 500 }}
        />
      )}
    </div>
  );
};

export default ConditionRendering;
