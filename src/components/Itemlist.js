import React from 'react'
import { CDN_URL } from '../utils/constants';

const Itemlist = ({ Itemdata }) => {
    return (<div>{
        Itemdata.map(item =>
            <div key={item.card.info.id} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>

                <div className='w-9/12'>
                    <div className='py-2'>
                        <span>{item.card.info.name}</span>
                        <span> ₹ {item.card.info.price / 100}</span>

                    </div>
                    <p className='text-xs'>{item.card.info.description}
                    </p>
                </div>

                <div className='w-3/12 p-4'>
                    <div className='absolute'>

                        <button className='p-2 mx-16 bg-black shadow-lg rounded-lg text-white'>
                            Add +
                        </button>
                    </div>


                    <img
                        className="w-full rounded-lg "
                        src={CDN_URL + item.card.info.imageId}
                    ></img>
                </div>



            </div>
        )}
    </div>)
}

export default Itemlist;
