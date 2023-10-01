import React from 'react'
import {BsDownload} from "react-icons/bs";
import "./Footer.css"
import Googleplay from "../../../images/playstore.png";
import Appstore from "../../../images/Appstore.png";


const Footer = () => {
  return (
    <footer id="footer">
        <div className='leftFooter'>
            <h4>DOWNLOAD OUR APP <BsDownload/></h4>
            <p>Download App for Android and IOS Mobile Phone</p>
            <div className='store'>
              <img src={Googleplay} alt='Googleplay'/>
              <img src={Appstore} alt='Appstore'/>
            </div>
        </div>
        <div className='midFooter'>
            <h1>E-COMMERCE</h1>
            <p>High Quality is our first Priority</p>
            <p>Copyrights 2023 &copy; UdayBharadwa</p>
        </div>
        <div className='rightFooter'>
            <h2>Follow Us</h2>
            <a href='/'>Instagram</a>
            <a href='/'>Youtube</a>
            <a href='/'>Facebook</a>
        </div>
    </footer>
  )
}

export default Footer