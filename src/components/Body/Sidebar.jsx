// import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"

const Sidebar = () => {
  let styles="p-1 m-1 px-2 mx-2 side-menu-list cursor-pointer rounded d-flex";
  const isMenuOpen= useSelector((store) =>{ return store.app.isMenuOpen})
  if(!isMenuOpen){
    styles="p-1 m-1 px-2 mx-2 side-menu-list cursor-pointer rounded align-self-center"
  }
  const expandedView= ( <div className="d-flex py-2 flex-column">
  <span className={styles}>
    <span className='col-3'><FontAwesomeIcon icon="fa-solid fa-house" /></span>
    <Link to="/"><span>Home</span></Link>
  </span>
  <span className={styles}>
    <span className='col-3'><FontAwesomeIcon icon="fa-solid fa-video" /></span>
    <span> Shorts</span>
  </span>
  <span className={styles}>
    <span className='col-3'><FontAwesomeIcon icon="fa-solid fa-handshake" /></span>
    <span> Subscriptions</span>
  </span>
</div>)
const minimalview = (
  <div className="d-flex py-2 flex-column">
  <span className={styles}>
    <span className='col-2'><Link to="/"><FontAwesomeIcon icon="fa-solid fa-house" /></Link></span>
  </span>
  <span className={styles}>
    <span className='col-2'><FontAwesomeIcon icon="fa-solid fa-video" /></span>
  </span>
  <span className={styles}>
    <span className='col-2'><FontAwesomeIcon icon="fa-solid fa-handshake" /></span>
  </span>
</div>
)
  return (
    isMenuOpen ? expandedView : minimalview
    
  )
}

export default Sidebar