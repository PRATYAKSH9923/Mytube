import {useEffect, useState} from 'react'
import {YouTubeVideosApi} from "../../utils/Constants.js"
import {Link} from "react-router-dom"
import VideoCard from "./buttonsAndCards/VideoCard"
import Shimmer from "./buttonsAndCards/ShimmerEffect.jsx"

const VideoList = () => {
  var [response, setResponse]=useState({});
  let getvideolist = async () =>{
    try{
      const videolist= await fetch(YouTubeVideosApi);
      let JsonResponse = await videolist.json();
      setResponse(JsonResponse);
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
      <div style={{overflowY: "auto",height: "92%"}}  className='d-flex pt-2 flex-wrap '>    
        <Shimmer type="videobox" />
      </div>
    )
  }
   return(
      <div style={{overflowY: "auto",height: "92%"}}  className='d-flex pt-2 flex-wrap '>    
        {response?.items?.map(item =>{
          return (<Link style={{color: "black",textDecoration: "none"}} className='d-flex justify-content-center p-2 col-3' key={item.id} to={"/watch?v="+item.id}><VideoCard key= {item.id} item={item}>VideoList</VideoCard> </Link>)
      })}
    </div>
   )

  }

export default VideoList