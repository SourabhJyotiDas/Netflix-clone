import React from 'react'
import logo from "../logo.png"
import { Link } from "react-router-dom"
import { ImSearch } from "react-icons/im"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {

    const toggleMEnu = () => {
        document.getElementById("burger").classList.toggle("hidden")
        document.getElementById("close").classList.toggle("hidden")
        document.getElementById("mobileList").classList.toggle("hidden")
    }
    return (
        <div className='sticky top-0 md:static'>
            <nav className=" bg-black flex justify-center items-center p-3 md:justify-around">

                <img className='w-[20%] lg:w-[15%]' src={logo} alt="logo" />

                <div className=' space-x-3 text-white hidden md:block'>
                    <Link to="/tvshows" >TV Shows</Link>
                    <Link to="/movies" >Movies</Link>
                    <Link to="/recent" >Recently Added</Link>
                    <Link to="/mylist" >My List</Link>
                </div>

                <ImSearch className='text-white hidden cursor-pointer text-xl md:block'/>
                <GiHamburgerMenu onClick={toggleMEnu} id='burger' className='text-white text-xl absolute left-5 md:hidden' />
                <AiOutlineClose onClick={toggleMEnu} id='close' className='text-white text-xl absolute left-5 hidden' />
            </nav>

            <div id='mobileList' className='hidden'>
                <div className='mobileList flex justify-start space-y-5 space-x-5 flex-col  h-[100vh] w-[70vw] fixed bg-[#2f2f2f] text-white ' >
                    <div></div>
                    <Link to="/tvshows" >TV Shows</Link>
                    <div className='h-[1px] bg-white'></div>

                    <Link to="/movies" >Movies</Link>
                    <div className='h-[1px] bg-white'></div>

                    <Link to="/recent" >Recently Added</Link>
                    <div className='h-[1px] bg-white'></div>

                    <Link to="/mylist" >My List</Link>
                    <div className='h-[1px] bg-white'></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Header