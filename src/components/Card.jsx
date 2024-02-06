import React from 'react'
import { FaFileImage } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className='flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaFileImage/>
        <p className='text-xm leading-tight mt-5 font-semibold'>{data.description}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='mb-2 flex items-center justify-between py-3 px-8'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                {data.close ? <IoIosCloseCircleOutline/> :<FaDownload size=".7em" color='white'/>}
                </span>
            </div>
            {
                data.tag.isOpen && (
                <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                )
            }
            
        </div>
    </motion.div>
  )
}

export default Card
