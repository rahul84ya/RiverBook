import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import Cards from './components/cards'
import {House} from 'lucide-react'


const App = () => {

  const [UserData, setUserData] = useState([])

  const [index, setIndex] = useState(1)
   
   //api call
  const getData= async()=>{
         const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
         setUserData(response.data) //userData has response datas
      }

   useEffect(function(){
      getData()
   },[index]) //pass here index in useEffect to call the get data link with (new index)-that's getting changed with prev/next button
      

   let printUserData = <h1 className='text-gray-400 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Please wait... Loading...</h1>

   if(UserData.length >0){
       printUserData = UserData.map(function(elem,idx){ //now printuserdata has datas from userdata using map()
           return <div key={idx}>
           <Cards elem={elem} />
           </div>
       })
   }


  return (
    <div className='bg-black overflow-auto h-screen text-white p-4 relative m-0 '>
       <div className='flex justify-center fixed top-0 left-0 right-0 h-23 bg-black m-0 gap-10'>
        <button 
         onClick={()=>{
          setIndex(1)
          setUserData([])
         }}
         className='active: cursor-pointer mt-0'><House size={36} /></button>
        <h1 className='font-bold text-6xl text-center mb-12 mt-2'>RiverBook</h1>
       </div>
       <div className='flex flex-wrap gap-3 '>
        {/* <h1 className='text-6xl fixed font-bold'>{index} </h1> */}
        {printUserData}
       </div>
        <div className='flex justify-center gap-4 mt-13'> 
          <button 
          style={{opacity: index==1? 0.5:1 }}
       className='flex justify-center items-center px-8 py-3 text-sm bg-amber-300 text-black rounded active:scale-95'
       onClick={()=>{
         if(index>1){
          setIndex(index-1)
          setUserData([]) // to load next page fast
         }
       }}
       >Prev</button>
       <h1 className='flex justify-center items-center'>Page{index}</h1>
        <button 
       className='flex justify-center items-center px-8 py-3 text-sm bg-amber-300 text-black rounded active:scale-95'
       onClick={()=>{
          setIndex(index+1)
          setUserData([])
       }}
       >Next</button>
       </div>
    <footer 
    className='flex justify-center items-center mt-10 text-sm text-gray-400'>
      Copyright © 2026 RiverBook. All rights reserved.
      </footer>
    </div>
  )
}

export default App