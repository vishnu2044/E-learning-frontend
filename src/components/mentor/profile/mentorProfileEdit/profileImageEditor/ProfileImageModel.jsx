import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

import ProfileImageSelector from './ProfileImageSelector';
import ProfileImageCroper from './ProfileImageCroper';

const ProfileImageModel = ({
    setProfileImageCropTab
}) => {
    const [image, setImage] = useState('');
    const [currentpage, setCurrentPage] = useState('choose-img')

    const onImageSelected = (selectedImage) =>{
      setImage(selectedImage)
      setCurrentPage('crop-img')
    }

    const onCropDone = (imgCroppedArea) => {}
    const onCropCancel = () => {}

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-1/2">&#8203;</span>

                <div className="inline-block align-middle justify-center w-screen bg-white rounded-lg px-2 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full h-screen sm:h-auto">
                    <div  className='flex justify-end'>
                        <button onClick={() => setProfileImageCropTab(false)} className='hover:bg-gray-700 shadow-md text-black border hover:text-white p-1 px-2 rounded-lg text-xl cursor-pointer'> <IoClose /> </button>
                    </div>
                    <div className='mt-2 p-2'>
                        {
                            currentpage === 'crop-img' ? <ProfileImageCroper 
                                                            image={image} 
                                                            onCropDone = {onCropDone}
                                                            onCropCancel = {onCropCancel}
                                                        /> :
                            currentpage === 'choose-img' ? <ProfileImageSelector onImageSelected={onImageSelected} />
                            : <div></div>
                        }   

                    </div>

                    

                </div>
            </div>
        </div>
    );
};

export default ProfileImageModel;
