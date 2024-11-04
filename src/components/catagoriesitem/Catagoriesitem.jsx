import React from 'react'
import './Catagoriesitem.css'
import { Link } from 'react-router-dom'
const Catagoriesitem = ({img,title,path}) => {
  return (
    <div className='catagories-item-main'>
            <Link to={path}>
      <div className="catagories-item ">
        <div className="catagories-item-body p-2 mt-5" style={{height:'140px',width:'150px'}}>
            <div className="cata-link-div">
            <img src={img} alt="" width={'100%'} height={90}/>
            <p className='text-center text-decoration-none'>{title}</p>

        </div>
      </div>
            </div>
            </Link>
    </div>
  )
}

export default Catagoriesitem
