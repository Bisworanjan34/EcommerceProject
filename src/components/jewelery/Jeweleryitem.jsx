import React from 'react'
import './Jeweleryitem.css'
const Jeweleryitem = ({jewelery}) => {

    let {image,title,price,rating ,id}=jewelery
  return (
    <div>
 <div className="card " style={{width:'18rem',}}>
                                    <img src={image} className="card-img-top" alt="electronic" 
                                   height={150} width={200}
                                    />
                                        <div className="card-body">
                                            <h5 className="card-title fs-6 fw-bold">{title}</h5>
                                            <div className="price-rating d-flex w-75 justify-content-between border m-auto">
                                            <p className="card-text fs-6 fw-bold"> ₹{price}</p>
                                            <p className="card-text fs-6 fw-bold text-primary"> ★★★{rating.rate}</p>
                                            <p className="card-text fs-6 "> {rating.count}views</p>

                                            </div>
                                            <a href={`/jewelerydetails/${id}`}className="btn  btn-warning me-2">product-details</a>
                                            <a href=" " className="btn btn-primary ">Addtocart</a>
                                        </div>
                                </div>
    </div>
  )
}

export default Jeweleryitem
