import React from 'react'

const Contact = () => {
  return (
    <div>
     <h1 className="font-bold text-3xl m-4 p-4">Contact Us</h1>
     <form>
      <input type="text" className='border border-black m-2 p-2' placeholder='name'></input>
      <input type="text" className='border border-black m-2 p-2' placeholder='message'></input>
      <button  className='border border-black bg-gray-100 m-2 p-2 rounded-xl'>submit</button>

     </form>
    </div>
  )
}

export default Contact