import React from "react"
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from "react-icons/fa"
import "./footerStyles.css"


const Footer=() => {
return(
<div className="footer">
 <div className="footer-container">
   <div className="left">
    <div className="location">
     <FaSearchLocation size={20} style={{color: "#fffff", marginRight: "2rem"}} />
       <div>
         <p>123 ACME St.</p>
          <h4>Houston, Tx</h4>
         </div>
        </div>
       <div className="phone">
     <h4><FaPhone size={20} style={{color: "#ffff", marginRight: "2rem"}} />+234 837 063 15</h4> 
    </div>
    <div>
    <h4><FaMailBulk size={20} style={{color: "#ffff", marginRight: "2rem"}} />samieyung01@gmail.com</h4>  
    </div>
   </div>
   <div className="right">
   <h4>About The Company</h4>
    <p>lorem Ipsum,lorem Ipsum lorem Ipsum lorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem
    lorem Ipsumvlorem Ipsumlorem Ipsumlorem Ipsum lorem Ipsum
     Ipsumlorem Ipsumlorem Ipsumlorem Ipsum</p>
   
   <div className="social">
    <FaFacebook size={30} style={{color: "#ffff", marginRight: "1rem"}} />
    <FaTwitter size={30} style={{color: "#ffff", marginRight: "1rem"}} />
    <FaLinkedin size={30} style={{color: "#ffff", marginRight: "1rem"}} />
   </div>
   </div>
  </div>
</div>
)


}
export default Footer;