import React from 'react'
import Catagoriesitem from '../catagoriesitem/Catagoriesitem'
import productsimg from '../../assets/products.png'
import jeweleryimg from '../../assets/jewelery1.avif'
import electronicimg from '../../assets/electronics.jpg'
import menimg from '../../assets/men.jpg'
import womenimg from '../../assets/women.jpg'
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Catagories.css'
const Catagories = () => {
    
  return (
    <div className='catagories-main-div '>
      <div className="catagories-div d-flex justify-content-center m-auto ">
        <Catagoriesitem img={productsimg} title={'Products'} path={'/products'} />
        <Catagoriesitem img={jeweleryimg} title={'Jewelery'} path={'/jewelery'} />
        <Catagoriesitem img={electronicimg} title={'Electronics'} path={'/electronics'} />
        <Catagoriesitem img={menimg} title={'Men Fashion'} path={'/mens'} />
        <Catagoriesitem img={womenimg} title={'Women Fashion'} path={'/womens'} />
        </div>


        <div className="cata-search-box w-50 m-auto d-flex align-items-center">
        <>
      <Form.Label htmlFor="inputPassword5"></Form.Label>
      <Form.Control
        type="text"
        id="inputText5"
        aria-describedby="TextHelpBlock"
        className=''
      />
    </> 
    <FontAwesomeIcon icon={faSearch} className='text-light ms-4'/>
        </div>
        <h5 className='text-light text-center fw-bold text-uppercase mt-2'>search product items</h5>
        <p className='text-light text-center text-uppercase mt-2'style={{fontSize:'11px',wordSpacing:'2px'}}> enter whatever you like just go for it any item you can search in this search box </p>
        <p className='text-light text-center text-capitalize fst-italic mt-5'style={{fontSize:'20px',wordSpacing:'2px'}}>welcome to lifestyle</p>
       

    </div>

  )
}

export default Catagories
