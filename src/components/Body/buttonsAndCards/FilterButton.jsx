/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const FilterButton = props => {
  return (
    <div className="px-2 parent-filter-buttons ">
        <span style={{backgroundColor:"#0000000d"}} className="filter-buttons px-3 py-1 text-black rounded cursor-pointer" >
            {props.name}
        </span>
    </div>
  )
}

export default FilterButton