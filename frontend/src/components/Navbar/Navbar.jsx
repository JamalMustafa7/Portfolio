import React, { useEffect, useState ,useRef} from 'react'
import { MdDarkMode } from "react-icons/md";
import styles from './navbar.module.css'
const Navbar = () => {
    const hamburger=useRef(null)
    const [isOpen,setIsOpen]=useState(false)
    useEffect(()=>{
        if(isOpen)
        {
            function changeOpen(event)
            {
                if( event.target!==hamburger.current && !hamburger.current.contains(event.target))
                {
                    console.log(event.target)
                    setIsOpen(!isOpen);
                }
            }
            document.addEventListener('mousedown',changeOpen)
    
            return ()=>document.removeEventListener('mousedown',changeOpen);
        }
    },[isOpen])
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <img src='brandLogo.png' />
        </div>
        <ul className={`${styles.navlinks} ${isOpen&&styles.open}`} >
            <li><a href="#about1">About</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><MdDarkMode size={18}/> </li>
        </ul>
        <div className={styles.hamburger}  ref={hamburger} onClick={()=>setIsOpen(!isOpen)}>
            <span style={{transform:isOpen&&"translateY(6.5px) rotate(50deg)"}}></span>
            <span style={{visibility:isOpen?"hidden":"visible"}}></span>
            <span style={{transform:isOpen&&"translateY(-7px) rotate(-50deg)"}}></span>
        </div>
    </div>
  )
}

export default Navbar