// import React from 'react'
/* eslint-disable react/prop-types */
const SideVideoCard = ({item}) => {
    return (
        <div style={{background:"#f1f1f1"}} className="align-items-center border rounded p-1 w-100 d-flex">
            <img className="rounded col-4" width="100%" src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="col-8 px-4">
                <div className="w-100 pt-2" style={{fontSize: "smaller",fontWeight: "bold"}}>{item.snippet.title}</div>
                <ul className="p-0 m-0"  style={{listStyle:"none",fontSize: "small", color:"#606060"}}>
                    <li>{item.snippet.channelTitle}</li>
                    <li>{item.statistics.viewCount}</li>
                </ul>
            </div>
        </div>
    )
}

export default SideVideoCard