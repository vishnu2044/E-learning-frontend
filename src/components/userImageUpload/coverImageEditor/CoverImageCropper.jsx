import React, { useState } from 'react';
import Cropper from 'react-easy-crop';

const CoverImageCropper = (
  {
    image,
    onCropDone,
    onCropCancel
  }
) => {
  const [crop, setCrop] = useState({x: 0, y: 0})
  const [zoom, setZoom] = useState(1)

  const [croppedArea, SetCroppedArea] = useState(null)
  const [[aspectRatio, setAspectRatio]] = useState(1)

  const oncropComplete = (cropperAreaPercentage, croppedAreaPixels) =>{
    SetCroppedArea(croppedAreaPixels)
  }

  return (
    <>
    <div className='cropper h-80'>
      <div>
        <Cropper 
          image ={image}
          aspect={aspectRatio}
          crop={crop}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          oncropComplete={oncropComplete}
          className='p-2'
          style={{
            containerStyle: {
              width: "90%",
              height: '80%',
              backgroundColor: "#fff",
              marginRight: "1rem",
              marginTop:'4rem',
              marginLeft:'1rem',
              marginBottom:'1rem',
              borderRadius: 15,
              
            }
          }}

        />

      </div>

      <div className='aspect-ratios mt-48'>
        <div className='p-1 flex justify-around'>
          <button
            onClick={()=>{onCropDone(croppedArea)}}
            className='bg-gray-800 rounded-md py-1 px-3 text-white'>
              Crop & Apply
          </button>

          <button onClick={onCropCancel} className='bg-gray-800 rounded-md py-1 px-3 text-white'> Cancel</button>
        </div>

      </div>

    </div>

    </>
  )
}

export default CoverImageCropper