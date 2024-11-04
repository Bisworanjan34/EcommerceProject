import React, { useEffect, useRef } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar'
import home from '../../assets/home.jpg'
import Catagoriesitem from '../../components/catagoriesitem/Catagoriesitem'
import Catagories from '../../components/catagories/Catagories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileBeam, faShoppingBag, faShoppingBasket, faSmile, faSmileWink } from '@fortawesome/free-solid-svg-icons'
import homeimg from '../../images/shoppinggirl.png'
import homeimg2 from '../../images/shopinggirl2.png'
const Home = () => {

  const homesmile=useRef()
  const homewelcome=useRef()

  useEffect(()=>{
    homesmile.current.style.transform='translatey(0)'
    homewelcome.current.style.transform='translatey(0)'
    homewelcome.current.style.height='200px'
  },[])
  return (
    <div>
      <Navbar />
      <div className="container-fluid text-center home-welcome " ref={homewelcome} >
       <div className="row">
        <div className="col-4">
         {/* <FontAwesomeIcon icon={faShoppingBag} className='mt-5'/> */}
         <img src={homeimg2} alt="" className='img-fluid mt-3' width={170}/>
        </div>
        <div className="col-4">
        <h3 className='fw-bolder pt-3 '><span className='tpink'>WELCOME</span> TO LIFESTYLE</h3>
        <div className=' home-smile'ref={homesmile}>
        <FontAwesomeIcon icon={faSmile} className='display-4 py-2 tpink'  />
        <p className='m-0  fw-lighter fst-italic '>Smile Please</p>
        </div>
        </div>
        <div className="col-4">
          <img src={homeimg} alt="" className='img-fluid mt-3' width={170}/>
        </div>
       </div>
      </div>
     <Catagories/>
    </div>
  )
}

export default Home
