/* eslint-disable react/prop-types */
// import React from 'react'
import User from "../../../assets/user.png"
const MessageCard = ({item}) => {
  return (
    <ul className="p-0">
        <div style={{fontSize: "0.7rem"}} className={"d-flex custom-bg-color-dark"}>
            <img className= "p-1" 
            style={{
            width:"8%",
            padding:"0.2rem" 
            }} 
            src={User} alt="user"/>
            <div className="d-flex flex-column">
                <span style={{fontWeight: '500'}} className="px-1">{item.name}</span>
                <span className="px-2">{item.message}</span>
            </div>
        </div>
    </ul>
  )
}

export default MessageCard