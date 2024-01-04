// import React from 'react'
/* eslint-disable react/prop-types */
const Shimmer = ({type}) => {
    var cards=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    var shimmercards=(i)=>{
        return (
            type === "videobox" ? (
              <div key={i} style={{ background: "#f1f1f1", width: "23%" }} className="m-2 align-items-center flex-column border rounded p-3 h-50 ">
                <div className="bg-white mb-2 rounded shimmerBG" style={{ width: "100%", height: "80%" }}></div>
                <div className="w-100 pt-2 bg-white mb-1 shimmerBG"></div>
                <ul className="p-0 m-0 bg-white" style={{ height: "1rem" }}>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            ) : (
              <div style={{ background: "#f1f1f1", height: "5rem" }} className="mb-2 align-items-center border rounded p-1 w-100 d-flex shimmerBG">
                <div className="bg-white rounded col-4 h-100 shimmerBG" width="100%" alt=""></div>
                <div className="col-8 px-4 shimmerBG">
                  <div className="w-100 pt-2 " style={{ fontSize: "smaller", fontWeight: "bold" }}></div>
                  <ul className="p-0 m-0 bg-white" style={{ listStyle: "none", fontSize: "small", color: "#606060" }}>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            )
          );
    }
  return (
    <>
        {
            cards.map(shimmercards)
        }
    </>
  )
}

export default Shimmer;