import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { faAdd, faBagShopping, faGift, faGifts, faHelicopter, faQuestion, faQuestionCircle, faStarAndCrescent } from '@fortawesome/free-solid-svg-icons'
import sponcer from '../images/sponsors.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="subFooter">

        <div className="about">
          <h5 className=''>About</h5>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Careers</p>
          <p>Flipkart Stories</p>
          <p>Press</p>
          <p>corporate Information</p>
        </div>
        <div className="group-companies">
          <h5>GROUP-COMPAINES</h5>
          <p>Maintra</p>
          <p>Cleartrip</p>
          <p>Shopssy</p>
        </div>
        <div className="help">
          <h5>HELP</h5>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
          <p>Report Infringement</p>
        </div>
        <div className="consumer-policy">
          <h5>CONSUMER POLICY</h5>
          <p>Cancellation & Returns</p>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
          <p>Grievance Redressal</p>
          <p>EPR Compliance</p>
        </div>
        <div className="mail-us">
          <h5>Mail-Us</h5>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
          <div className="social">
            <h5>Social</h5>
            <div className="sub-social">
            <div className="facebook">
              <FontAwesomeIcon icon={faFacebook}/>
            </div>
            <div className="facebook">
            <FontAwesomeIcon icon={faXTwitter}/>
            </div>
            <div className="facebook">
            <FontAwesomeIcon icon={faYoutube}/>
            </div>
            </div>
           
          </div>
        </div>
        <div className="register-address">
          <h5>Registered Office Address:</h5>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
          <p>CIN : U51109KA2012PTC066107</p>
          <p>Telephone: <a href="">044-45614700 / 044-67415800</a></p>
        </div>
      </div>
      <div className="end-footer">
        <h5><FontAwesomeIcon icon={faBagShopping} className='me-2 text-warning'/>
          Become a seller</h5>
        <h5><FontAwesomeIcon icon={faStarAndCrescent}className='me-2 text-warning'/>
          Advertise</h5>
        <h5><FontAwesomeIcon icon={faGift}className='me-2 text-warning'/>
          Gift cards</h5>
        <h5><FontAwesomeIcon icon={faQuestionCircle}className='me-2 text-warning'/>
          Help center</h5>
        <h5>© 2007-2024 Flipkart.com</h5>
        <div className="sponcer-img">
         <img src={sponcer} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer