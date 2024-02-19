import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import ProfileImageSelector from './ProfileImageSelector';
import ProfileImageCroper from './ProfileImageCroper';


const ProfileImageModel = ({
    setProfileImageCropTab
}) => {
    const [image, setImage] = useState('');
    const [currentpage, setCurrentPage] = useState('choose-img')
    const [imgAfterCrop, setImgAfterCrop] = useState('')

    const onImageSelected = (selectedImage) =>{
      setImage(selectedImage)
      setCurrentPage('crop-img')
    }

    const onCropDone = (imgCroppedArea) => {
        const canvasEle = document.createElement("canvas");
        canvasEle.width = imgCroppedArea.width;
        canvasEle.height = imgCroppedArea.height;
    
        const context = canvasEle.getContext("2d");
    
        let imageObj1 = new Image();
        imageObj1.src = image;
        imageObj1.onload = function () {
          context.drawImage(
            imageObj1,
            imgCroppedArea.x,
            imgCroppedArea.y,
            imgCroppedArea.width,
            imgCroppedArea.height,
            0,
            0,
            imgCroppedArea.width,
            imgCroppedArea.height
        );
    
        const dataURL = canvasEle.toDataURL("image/jpeg");
        setImgAfterCrop(dataURL);
        setProfileImageCropTab(false)
        };
      };

    const onCropCancel = () => {
        setCurrentPage("choose-img");
        setImage("");
      };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-1/2">&#8203;</span>

                <div className="inline-block align-middle justify-center w-screen bg-white rounded-lg px-2 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:max-h-auto h-auto sm:w-full">
                    <div  className='flex justify-end'>
                        <button onClick={() => setProfileImageCropTab(false)} className='hover:bg-gray-700 shadow-md text-black border hover:text-white p-1 px-2 rounded-lg text-xl cursor-pointer'> <IoClose /> </button>
                    </div>
                    <div className='mt-4 p-4 '>
                        {
                            currentpage === 'crop-img' ? <ProfileImageCroper 
                                                            image={image} 
                                                            onCropDone = {onCropDone}
                                                            onCropCancel = {onCropCancel}
                                                        /> :
                            currentpage === 'choose-img' ? <ProfileImageSelector className='p-4' onImageSelected={onImageSelected} />
                            : <div></div>
                        } 

                    </div>

                    

                </div>
            </div>
        </div>
    );
};

export default ProfileImageModel;
