import React from 'react'
import './footer.css'
import './footer.scss'
import video from '../../Assets/video3.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";


const Footer = () =>{
  return (
   <section className='footer'>
    <div className="videoDiv">
      <video src={video} loop autoPlay muted type="video3/mp4"></video>
    </div>
    <div className="seccontent container">
      <div className="contentDiv flex">
        <div  data-aos="fade-up"className="text">
          <small>KEEP IN TOUCH</small>
          <h2>Travel with us</h2>
        </div>
        <div className="inputDiv flex">
          <input type="text" placeholder='Enter email address' />
          <button  data-aos="fade-up" className='btn flex' type='submit'>
            SEND<FiSend className="icon"/>
          </button>
        </div>
      </div>
      <div className="footercard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href="#" className='logo flex'>
            < MdOutlineTravelExplore className="icon"/>Travel.
            </a>
          </div>
          <div  data-aos="fade-up" className="footerparagraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe corporis ducimus inventore est ipsa natus accusamus! Corporis consequuntur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsa quae quibusdam dicta aliquid adipisci laboriosam accusamus ab ullam minima, debitis corrupti, repellat nihil obcaecati sequi dolor eius? Dicta, neque!</div>
          <div className="footersocial">
            <AiOutlineTwitter className="icon"/>
            <AiOutlineYoutube className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
          </div>
        </div>

        <div className="footerLinks grid">
          <div  data-aos="fade-up"  data-aos-duration="4000" className="linkGroup">
            <span className='groupTitle'>
              OUR AGENCY
            </span>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Service
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Insurence
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Agency
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Tourist
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Payment
            </li>
          </div>

         {/*group two*/}

          <div  data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
            <span className='groupTitle'>
              PARTNER
            </span>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Bookings
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Rentcars
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              HostelWorld 
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Trivago
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Tripadvisor
            </li>
          </div>

            {/*group three*/}

          <div  data-aos="fade-up"  data-aos-duration="4000"className="linkGroup">
            <span className='groupTitle'>
              LAST MINUTE
            </span>

            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Londan
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              California 
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Indonesia
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Europe
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Oceania
            </li>
          </div>

        </div>

        <div className="footerDiv flex">
          <small>BEST TRAVEL WEBSITE THEME</small>
          <small>COPYRIGHTS RESERVED-ISRATECH 2024</small>

        </div>
        
      </div>
    </div>

   </section>
  )
}

export default Footer