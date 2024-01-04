// import React from 'react'
import Button from "./buttonsAndCards/FilterButton"
import {Link} from "react-router-dom"
const ButtonList = () => {
  let names=["All","Music","Gaming","Live","Soccer","Cricket"]
  return (
    <div style={{fontSize: "0.9rem"}} className="d-flex p-2">
      {
        names.map(name =>{
          if(name === "Live"){
            return (<Link style={{color: "black",textDecoration: "none"}} key={name} to={"/live?v=Um0gWi6pwGU"}><Button key={name} name={name}/></Link>)
          }
          return (<Button key={name} name={name}/>)
        })
      }
     </div>
  )
}

export default ButtonList