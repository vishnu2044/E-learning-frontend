import React, { useContext, useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import CoverImageCropper from './CoverImageCropper';
import CoverImageSelector from './CoverImageSelector';
import { SuccessMessage } from '../../../alertBox/SuccessMessage';
import { ErrorMessage } from '../../../alertBox/ErrorMessage';
import AuthContext from '../../../context/AuthContext';
import { baseUrl } from '../../../configure/urls';
import UserImageContext from '../../../context/common/UserImages';

const CoverImageModel = (
    {
        setCoverImageModelTab
    }
) => {
    const [image, setImage] = useState('');
    const [currentPage,  setCurrentPage] = useState('choose-img')
    const [imageAfterCrop, setImageAfterCrop] = useState('')
    const {authToken} = useContext(AuthContext)
    const [coverImgCropDone, setCoverImgCropDone] = useState(false)
    const {getCoverImg} = useContext(UserImageContext)

    const onCoverImageSelected = (selectedImage) =>{
        setImage(selectedImage)
        setCurrentPage("crop-img")
    }

    const onCropDone = (imgCroppedArea) =>{
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
            
            const dataUrl = canvasEle.toDataURL('image/jpeg')
            setImageAfterCrop(dataUrl)
            setCoverImgCropDone(true)
            setCurrentPage('choose-img')
        }
    }

    const coverImgUpload = async() =>{
        ErrorMessage({message: "its working"})
        if (!imageAfterCrop){
            ErrorMessage({message: "image not found"})
            return
        }
        if (!authToken){
            ErrorMessage({message: "Authtoken not present please try again"})
            window.location.reload()
        }

        const base64Data = imageAfterCrop.split(",")[1]
        const blob = await fetch(`data:image/jpeg;base64,${base64Data}`).then(response => response.blob())
        const formData = new FormData()
        formData.append("cover_img", blob)

        try{
            const response = await fetch(`${baseUrl}/user-profile/upload-cover-image/`, {
                method: "POST",
                body: formData,
                headers:{
                    "Authorization": "Bearer " + authToken.access
                }
            })
            const data = await response.json()
            if (response.status === 200){
                SuccessMessage({message: "cover iamge uploaded successfully"})
                setCoverImageModelTab(false)
                getCoverImg()
            }

        }catch (error){
            ErrorMessage({message: "An error found!"})
            console.log(error);

        }
    }

    useEffect(()=>{
        if (coverImgCropDone){
            coverImgUpload()
        }

    }, [coverImgCropDone])

    const onCropCancel = () =>{
        setCurrentPage('choose-img')
        setImage('')
    }

  return (
<div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
  <div className="flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <span className="hidden sm:inline-block sm:align-middle sm:h-1/2">&#8203;</span>

    <div className="inline-block align-middle justify-center w-full  max-w-4xl bg-white rounded-lg px-2 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-h-screen sm:max-w-3xl h-auto sm:w-full">
      <div className='flex justify-end'>
        <button onClick={() => setCoverImageModelTab(false)} className='hover:bg-gray-700 shadow-md text-black border hover:text-white p-1 px-2 rounded-lg text-xl cursor-pointer'> <IoClose /> </button>
      </div>
      <div className='mt-4 p-4 '>
        {
          currentPage === 'crop-img' ? <CoverImageCropper
                                          image={image}
                                          onCropDone={onCropDone}
                                          onCropCancel={onCropCancel}
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