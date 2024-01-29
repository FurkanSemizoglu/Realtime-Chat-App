import React from 'react'

const ChatNavbar = () => {
  return (
    <div className='flex justify-between items-center w-[90%] mx-auto my-3'>
        <div>   <input type="text" id="search_user" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search User"  /> {/* <input type='text' id="fname" name="fname"  className='p-1 border-solid'  /> */}</div>


        <div className='mr-40'>Chat-App</div>

        <div>Profile</div>
    </div>
  )
}

export default ChatNavbar