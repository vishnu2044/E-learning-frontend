import React, { useState } from 'react';
import Cropper from 'react-easy-crop';

const ProfileImageCroper = (
  {
    image,
    onCropDone,
    onCropCancel
  }
) => {
  const [crop, setCrop] = useState({x: 0, y: 0})
  const [zoom, setZoom] = useState(1)

  const [croppedArea,setCroppedArea ] = useState(null)
  const [aspectRatio, setAspectRatio] = useState(1)

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };


  return (
    <>
    <div className='cropper h-80'>

      <div>
          <Cropper

          image = {image}
          aspect={aspectRatio}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
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

        
    </div>
      <div className='aspect-ratios mt-48' >

      <div className='p-1 flex justify-around'>
        <button 
          onClick={()=> {onCropDone(croppedArea)} }
          className='bg-gray-800 rounded-md py-1 px-3 text-white'>
            Crop & Apply
        </button>

        <button onClick={onCropCancel} className='bg-gray-800 rounded-md py-1 px-3 text-white'>cancel</button>
      </div>


        
      </div>
    </>
  )
}

export default ProfileImageCroper