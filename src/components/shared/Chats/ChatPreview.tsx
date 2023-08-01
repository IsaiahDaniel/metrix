import React from 'react'
import Badge from '../Badge/Badge';

type ChatPreviewProps = {
    image: any;
    text: any;
    subText: any;
    time: any;
}

const ChatPreview = ({ image, text, subText, time  }: ChatPreviewProps) => {
  return (
    <div className='divide-y mt-5'>
        <div className='flex'>
            <img src={image} className='w-24 h-20 mr-3 rounded-2xl object-cover' alt="" />
            <div className='flexx'>
                <h3 className='font-bold'>{text}</h3>
                <p className='text-gray-500'>{subText}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <Badge badgeNumber="New" classNames='px-5 py-1 mb-2' />
                <p>{time}</p>
            </div>
        </div>
    </div>
  )
}

export default ChatPreview;