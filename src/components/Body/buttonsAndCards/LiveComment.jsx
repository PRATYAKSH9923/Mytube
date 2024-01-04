import {useEffect} from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux"
import { addMessage} from '../../../utils/slices/chatSlice';
import Card from "./MessageCard"


const LiveComment = () => {
    var dispatch = useDispatch();
    function generateRandomObject() {
        const randomName = generateRandomString();
        const randomMessage = generateRandomString();
        
        return {
          name: randomName,
          message: randomMessage
        };
      }
      
      function generateRandomString() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const length = 5; // You can adjust the length as needed
        let randomString = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomString += characters.charAt(randomIndex);
        }
      
        return randomString;
      }
    const messages =  useSelector((store)=>{
       return store.chat.messages
    })
    useEffect(()=>{
      const i= setInterval(() => {
        dispatch(addMessage(generateRandomObject(), 15))
      }, 2000);
      return ()=>{
        clearInterval(i);
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
  return (
    <div style={{height: "70%", overflow: "auto"}} className='d-flex pt-2 flex-column px-4'>    
        {messages?.map(item =>{
          return (<Card key= {item.name} item={item}>VideoList</Card>)
      })}
    </div>
  )
}

export default LiveComment