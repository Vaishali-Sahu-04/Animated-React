import React from 'react'
import Card from './Card'
import { useRef } from 'react';
function Foreground() {
    const ref=useRef(null);
    const data=[
        {
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, alias?", filesize:".9mb", close:true, 
        tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"}
    },
    {
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, alias?", filesize:".9mb", close:true, 
        tag:{isOpen:false, tagTitle:"Download Now", tagColor:"green"}
    },
    {
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, alias?", filesize:".9mb", close:true, 
        tag:{isOpen:true, tagTitle:"Upload", tagColor:"blue"}
    }
    ]
  return (
      <div ref={ref} className='fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Card data={item} referance={ref}/>
        ))}
      </div>

  )
}

export default Foreground
