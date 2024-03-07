import React, {useState} from 'react'
import './navbar.css'
import './navbar.scss'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {RiCloseCircleLine} from 'react-icons/ri'
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const[active ,setActive] = useState ('navBar')
    //function to toggle navbar
    const showNav = () =>{
        setActive("navBar activeNavbar")
    }

     //function to remove navbar
     const removeNavbar = () =>{
        setActive("navBar removeNavbar")
    }
  return (
    <section className='navBarSection'>
        <header className="header flex">
            <div className='logoDiv'>
                <a href="#" className='logo flex'>
                    <h1><MdOutlineTravelExplore className="icon"/>  Travels.</h1>
                </a>
                
            </div>
            <div className={active}>
                <ul className='navLists flex'>
                    <li className='navItems'>
                        <a href="#" className="navLink">Home</a>
                    </li>
                    <li className='navItems'>
                        <a href="#" className="navLink">packags</a>
                    </li>
                    <li className='navItems'>
                        <a href="#" className="navLink">shop</a>
                    </li>
                    <li className='navItems'>
                        <a href="#" className="navLink">About</a>
                    </li>
                    <li className='navItems'>
                        <a href="#" className="navLink">pages</a>
                    </li>
                    <li className='navItems'>
                        <a href="#" className="navLink">News</a>
                    </li>
                    <li className='navItems'>
                        <a href="#" className="navLink">contact</a>
                    </li>
                    <button className='btn'>
                        <a href="#">BOOK NOW</a>
                    </button>
                </ul>
                <div onClick={removeNavbar}className="closeNavbar">
                    <RiCloseCircleLine className='icons'/>
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className='icons'/>

            </div>
        </header>
    </section>
   
  )
}

export default Navbar