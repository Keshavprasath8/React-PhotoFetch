import Fetch from './Fetch'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { IoSearchOutline } from "react-icons/io5";

const Photo = () => {  
 
const [photos, setPhotos] = useState([])
const [searchs, setSearchs] = useState([])
const [imgs, setImgs] = useState('')
const[show,setShow]=useState(true)
// const [searchs, setSearchs] = useState('')
        useEffect(() => {
        axios.get("https://api.unsplash.com/photos?per_page=30&client_id=UbKXgb2Fq0ypbfNf66FScvM7G_mc8FePQOnwVAUXyZM")
        .then((resp)=>{
          console.log(resp);
          setPhotos(resp.data)
        })
          .catch((err) => console.log(err));
        },[]) 
        const Search = () => {
          if(imgs===""){
            setShow(true)
            return
          }
          setShow(false)
          axios.get(`https://api.unsplash.com/search/photos?per_page=30&query=${imgs}&client_id=UbKXgb2Fq0ypbfNf66FScvM7G_mc8FePQOnwVAUXyZM`)
        .then((resp)=>{
          console.log(resp);
          setSearchs(resp.data.results)
        })
          .catch((err) => console.log(err));
          console.log(imgs);
          
        }

           
  return(
    <>
    <div className='px-40 pt-4'>
    <div className='flex justify-between gap-2 py-4'>
    
    <button className='font-semibold  bg-slate-300 rounded-2xl px-2 '><a href="/" className='flex gap-1 py-2'><span className="material-symbols-outlined">
    home</span><span className='ml-2'>Home</span> </a></button>
    <div className='flex gap-2'>
     <input className='px-2 z-auto ml-40 hover:cursor-pointer bg-slate-300  rounded-2xl' type="text" placeholder='Search Images' onChange={(e) => setImgs(e.target.value)} />
     <button className='btn flex gap-1 bg-slate-300 rounded-2xl px-2 pb-1' onClick={Search}>
     <span className='material-symbols-outlined mt-2'><IoSearchOutline /></span></button>
     </div>
     </div>
     </div>
    <div className='px-20 mx-16'>
    {show ?(<div className='flex flex-wrap mx-auto flex-grow-3  '> {photos.map((item)=>(
      <Fetch   key={item.id} item={item} />
    ))}
    </div>
    ):(
      <div  className='flex flex-wrap mx-auto flex-grow-3'>
      {searchs.map((item) => (
        <div className='px-1 mx-auto py-5' >
            <img 
              key={item.id} 
              src={item.urls.small} 
              alt={item.alt_description} 
              className='w-96 h-80 '
            />
            </div>
          ))}
      </div>
    )}
   

   
    </div>
    </>
  )
}


export default Photo;

