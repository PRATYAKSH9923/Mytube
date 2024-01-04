// import React from 'react'
import {useEffect, useState} from 'react'
import {YouTubeVideosApi} from "../../../utils/Constants.js"
import {Link} from "react-router-dom"
import VideoCard from "./SideVideoCard.jsx"
import Shimmer from "./ShimmerEffect.jsx"
const SideVideoListingCard = () => {
  var [response, setResponse]=useState({});
  let getvideolist = async () =>{
    try{
      const videolist= await fetch(YouTubeVideosApi);
      let JsonResponse = await videolist.json();
      setResponse(JsonResponse);
      console.log(JsonResponse);
    }catch{
      console.log("Error");
    }
  }
  useEffect(() =>{
    getvideolist();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ ])
  if(response && Object.keys(response).length === 0){
    return(
      <div className='d-flex pt-2 flex-wrap px-4 '>    
        <Shimmer type="videoslice" />
      </div>
    )
  }
   return(
      <div  className='d-flex pt-2 flex-column px-4'>    
        {response?.items?.map(item =>{
          return (<Link onClick={()=>{ window.scrollTo({ top: 0, behavior: 'auto' })}} style={{color: "black",textDecoration: "none"}} className='d-flex justify-content-center p-2 col-3 w-100' key={item.id} to={"/watch?v="+item.id}><VideoCard key= {item.id} item={item}>VideoList</VideoCard> </Link>)
      })}
    </div>
   )

  }

export default SideVideoListingCard