import {useEffect}from 'react'
import {useDispatch} from "react-redux"
import { closeMenu } from '../../utils/slices/appSlice';
import { useSearchParams } from 'react-router-dom'
import SideVideoListingCard from "./buttonsAndCards/SideVideoListingCard"
import CommentSection from "./buttonsAndCards/CommentSection"
const Watch = () => {
    var mydispatch = useDispatch();
    let [searchParams ] = useSearchParams();
    let id=searchParams.get("v");
    
    useEffect(()=>{
        mydispatch(closeMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <>
    <div className='d-flex w-100  h-100'>
      <div className='col-7'>
        <div className='h-75 p-2'>
          <iframe
              className='rounded border'
              width="100%" 
              height="100%" 
              src={"https://www.youtube.com/embed/"+id+"?si=4bjhmfJLa5R1I_3g"}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
          </iframe>
        </div>
        <div>
          <CommentSection/>
        </div>
      </div>
      <div className='col-5'>
        <SideVideoListingCard/>
      </div>  
    </div>  
    </>
  )
}

export default Watch