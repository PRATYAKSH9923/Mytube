import Sidebar from "./Body/Sidebar.jsx"
import {Outlet} from "react-router-dom"
import { useSelector } from "react-redux"
const Body = ()=>{
  const isMenuOpen = useSelector((store)=>{return store.app.isMenuOpen});

  return (
    <>
      <div className="d-flex body-container">
        <div className={isMenuOpen ? "vw-11" : "vw-6"}>
          <Sidebar/>
        </div> 
        <div className={isMenuOpen ? "vw-89 pt-1 h-100" : "vw-94 pt-1 h-100"}>
          <Outlet/>
        </div>
      </div>  
    </>
  )
}
 export default Body