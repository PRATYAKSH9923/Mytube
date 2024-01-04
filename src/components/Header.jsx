/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import Logo from "../assets/logo.png"
import User from "../assets/user.png"
import { useSelector } from "react-redux"
import { AutoSuggestAPI } from '../utils/Constants'
import {toggleMenu} from '../utils/slices/appSlice'
import { pushApiData} from '../utils/slices/cacheSlice'
const header = ()=>{
  const cachedData = useSelector((store)=>{return store.api.apis});
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const dispatch = useDispatch();
    const handleToggle = ()=>{
      console.log("hello");
      dispatch(toggleMenu());
    }
    var handleClickOutside = ()=>{
      setSuggestionList([]);
    }
    const [listingShown, setlistingshown] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  //debouncing for search
  //1:- when i am going to change the searchQuery it will set the timeout
  //2:- if before 200 ms the next character will come it will clearTimeout (because clearTimeout will call after component destroyed)
  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);
    let timer = setTimeout(getSuggestions, 200);
    return ()=>{
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    }
  },[searchQuery])
  useEffect(()=>{
    getSuggestions();
  },[listingShown])

  var makeListing = (x) => {
   return <li key={x} className='px-2 py-1 cursor-pointer suggetion-list'>{x}</li>
  }
  var getSuggestions = async()=>{
    try{
      var key=AutoSuggestAPI+searchQuery
      let obj= {}
      if(cachedData[key] === undefined){
        var result= await fetch(key);
        var JsonResponse = await result.json();
        obj.key= AutoSuggestAPI+searchQuery;
        obj.value= JsonResponse[1];
        dispatch(pushApiData(obj))
        setSuggestionList(JsonResponse[1]);
      }else{
        
        setSuggestionList(cachedData[key]);
      }
    }catch{
      console.log("api is not working");
    }
  }

  return (
    <>
      <div className='d-flex px-2 py-1 header-container'>
        <span className='col-3 youtube-center justify-content-start'>
          <span onClick={()=>{handleToggle()}}  className=' py-2 px-4 cursor-pointer'><FontAwesomeIcon icon="fa-solid fa-bars" /></span>
          <img style={{width:"40%"}} src={Logo} alt="logo"/>
        </span>
        <div className='col-6 youtube-center'>
          <span className='w-75 youtube-center rounded border border border-secondary py-1 px-2 text-secondary'>
            <input 
              className='w-100 border border-white ' 
              type={"text"}
              onFocus={()=>{
                setlistingshown(!listingShown);
              }}
              value={ searchQuery }
              onChange={(e)=>{setSearchQuery(e.target.value)}}
              />
            <FontAwesomeIcon icon="fa-solid fa-search" />
            {suggestionList.length !== 0 &&(
              <div className='listing rounded'>
                <ul className='p-0'>
                  {suggestionList.map(makeListing)}
                </ul>
              </div>
            ) 
            }
          </span>
        </div>
        <div className='col-3 d-flex justify-content-end align-items-center'>
        <img style={{width:"10%"}} src={User} alt="user"/>
        </div>
      </div>
    </>
  )
} 
 export default header