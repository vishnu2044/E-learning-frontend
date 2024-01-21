import React from 'react'

const EditDepartment = (
    {

    }
) => {
  return (
<main id="content" role="main" class="w-full  max-w-md mx-auto p-6">
    <div class="mt-7  rounded-xl shadow-lg  dark:border-gray-700 border-2 border-indigo-300">
      <div class="p-4 sm:p-7">
        <div class="text-center">
          <h1 class="block text-2xl font-bold text-gray-800 ">Add new Deparment</h1>
        </div>

        <div class="mt-5">
          <form >
            <div class="grid gap-y-4">

              <div>
                <label for="email" class="block text-sm font-bold ml-1 mb-2 ">Name</label>
                <div class="relative">
                  <input type="text" name="departmentName" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm  shadow-sm" required aria-describedby="email-error" />
                </div>
                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-image">
                        profile image
                    </label>
                    <input 
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='department_img' type="file" accept="image/*" 
                     />
                </div>

                <div className='flex justify-center'>
                    <button type="submit" class="py-3 px-12 mx-3  inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Add</button>
                    <button   class="py-3 px-12 mx-3  inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                      Cancel</button>

                </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  </main>
  )
}

export default EditDepartment