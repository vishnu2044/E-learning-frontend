import userEvent from '@testing-library/user-event'
import React, { useRef } from 'react'
import { SuccessMessage } from '../../../alertBox/SuccessMessage';
import { ErrorMessage } from '../../../alertBox/ErrorMessage';

const CoverImageSelector = (
  {
    onCoverImageSelected
  }
) => {
  const inputRef = useRef();

  const handleOnChange = (event) =>{
    if (event.target.files && event.target.files.length > 0){
      const reader = new FileReader();

      reader.onload = (e) =>{
        onCoverImageSelected(e.target.result)
      }

      reader.readAsDataURL(event.target.files[0]);
    }else{
      console.log("No files selected");
      ErrorMessage({message: "image not selected"})
    }
  }

  const onChooseImg = ()=>{
    inputRef.current.click()
  }

  return (
    <>
    <label>
      <span>Choose Cover Photto</span>
      <input 
        type="file" 
        accept='image/*'
        ref={inputRef}
        onChange={handleOnChange}
        style ={{display: "none"}}
        
      />
    </label>
    <div>
    <button className='font-normal shadow-md border py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white' onClick={onChooseImg}>choose image</button>
    </div>

    </>
  )
}

export default CoverImageSelector