import React, { useState } from 'react'
import Itemlist from './Itemlist';

const RestaurantCategory = (props) => {
    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        props.setshowIndex()
    }

    return (
        <div>
            <div className='w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4'>
                <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                    <span className='text-lg font-bold'>{props.data.title + ' (' + props.data.itemCards.length + ') '}</span>
                    <span>{'⬇️'}</span>

                </div>
                {props.showItems && <Itemlist Itemdata={props.data.itemCards}></Itemlist>}
            </div>

        </div>
    )
}

export default RestaurantCategory