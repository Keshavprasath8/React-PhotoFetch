import React from 'react'
import { useState } from 'react'
const Fetch = ({item}) => {
  const [imgs, setImgs] = useState([])
  const [searchs, setSearchs] = useState('')

  const Search = () => {
    setSearchs(imgs)
    console.log(imgs);
    console.log(searchs);
  }
  return (
    <div className='px-1 mx-auto py-5'>
       
        <div >
            <img className='w-96 h-80 ' src={item.urls.thumb} alt="" />
            
        </div>
    </div>
  )
}

export default Fetch