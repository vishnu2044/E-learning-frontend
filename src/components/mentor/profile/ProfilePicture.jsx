import React from 'react'

const ProfilePicture = () => {
  return (
    <div>
        <div class="rounded-t-lg h-60 overflow-hidden object-left ">
            <img class="object-cover h-72 overflow-scroll object-top w-full hidden sm:block" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
        </div>
        <div class="w-48 h-48 relative border-2 border-white rounded-xl shadow-xl overflow-hidden justify-start sm:ml-8 mx-auto max-w-screen-sm sm:-mt-28 -mt-72">
            <img class="object-cover object-center h-48 w-full" 
                src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' 
                alt='Woman looking front' /> 
        </div>
        <div class="text-center mt-2 pb-2">
            <h2 class="font-semibold">Sarah Smith</h2>
            <p class="text-gray-500">Freelance Web Designer</p>
        </div>

    </div>
  )
}

export default ProfilePicture