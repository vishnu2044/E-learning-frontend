import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import CoverImageCropper from './CoverImageCropper';
import CoverImageSelector from './CoverImageSelector';

const CoverImageModel = (
    {
        setCoverImageModelTab
    }
) => {
    const [image, setImage] = useState('');
    const [currentPage,  setCurrentPage] = useState('choose-img')
    const [imageAfterCrop, setImageAfterCrop] = useState('')

    const onCoverImageSelected = (selectedImage) =>{
        setImage(selectedImage)
        setCurrentPage("crop-img")
    }

    const onCropDone = (imageCropedArea) =>{
        const canvasEle = document.createElement("canvas")
        canvasEle.width = imageCropedArea.width
        canvasEle.height = imageCropedArea.height

        const context = canvasEle.getContext("2d")

        let imageObj1 = new Image();
        imageObj1.src = image;
        imageObj1.onload = function () {
            context.drawImage(
                imageObj1,
                imageCropedArea.x,
                imageCropedArea.y,
                imageCropedArea.width,
                imageCropedArea.height,
                0,
                0,
                imageAfterCrop.width,
                imageCropedArea.width
            )
            
            const dataUrl = canvasEle.toDataURL('image/jpeg')
            setImageAfterCrop(dataUrl)
            setCurrentPage('choose-img')
        }
    }

    const onCropCancel = () =>{
        setCurrentPage('choose-img')
        setImage('')
    }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-1/2">&#8203;</span>

        <div className="inline-block align-middle justify-center w-screen bg-white rounded-lg px-2 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:max-h-auto h-auto sm:w-full">
            <div  className='flex justify-end'>
                <button onClick={() => setCoverImageModelTab(false)} className='hover:bg-gray-700 shadow-md text-black border hover:text-white p-1 px-2 rounded-lg text-xl cursor-pointer'> <IoClose /> </button>
            </div>
            <div className='mt-4 p-4 '>
                {
                    currentPage === 'crop-img' ? <CoverImageCropper
                                                    image = {image} 
                                                    onCropDone ={onCropDone}
                                                    onCropCancel ={onCropCancel}
                                                    /> : 
                                                    
                    currentPage === 'choose-img' ? 
                    <CoverImageSelector
                    onCoverImageSelected={onCoverImageSelected}    
                    /> 
                    : <></> 
                }

            </div>

            

        </div>
    </div>
</div>
  )
}

export default CoverImageModel