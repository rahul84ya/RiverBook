import React from 'react'

const Cards = (props) => {
    
  return (
    <div>
         <a href={props.elem.url} target='_blank'>
             <div className='h-100 w-110 overflow-hidden rounded-xl'> 
            <img className='h-full w-full object-cover ' src={props.elem.download_url} />
           </div>
             <h1 className='text-xl font-bold'>{props.elem.author}</h1>
             <button className='px-1 py-1 ml-20 rounded bg-white felx justify-center items-center text-black text-xs'>Download</button>
            </a>
    </div>
  )
}

export default Cards