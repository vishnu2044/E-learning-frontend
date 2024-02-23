import React, {useRef} from 'react'

const ProfileImageSelector = ({ onImageSelected }) => {

    const inputRef = useRef();
    
    const handleOnChange = (event) => {
      if (event.target.files && event.target.files.length > 0) { // Check for selected file
        const reader = new FileReader();
    
        reader.onload = (e) => { // Move console.log inside onload
          onImageSelected(e.target.result); // Pass the image data
        };
    
        reader.readAsDataURL(event.target.files[0]); // Read the first selected file
      } else {
        console.log("No file selected.");
      }
    };
    
    
        const onChooseImg = () =>{
            inputRef.current.click()
        }

  return (
    <>
        <label onClick={onChooseImg} className="block mb-3 w-fit mt-3">
            <span className="sr-only">Choose profile photo</span>
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleOnChange}
                style={{ display: "none" }}
                className="block w-full text-sm file:cursor-pointer text-slate-500 file:mr-4 file:py-1 file:px-2 
                    file:rounded-full 
                    file:border file:border-gray-50
                    file:text-xs file:shadow-md 
                    file:text-gray-700 
                    hover:file:text-white
                    hover:file:bg-gray-600"
            />
        </label>
        <div>
            <button className='font-normal shadow-md border py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white' onClick={onChooseImg}>choose image</button>
        </div>
    
    </>
  )
}

export default ProfileImageSelector