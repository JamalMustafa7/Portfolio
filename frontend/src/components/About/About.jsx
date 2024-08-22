import React, { useEffect, useState } from 'react'
import styles from './About.module.css'
const About = () => {
    const [text,setText]=useState("")
    useEffect(()=>
    {
        let keywords=["MERN","Asp.Net","Php"]
        
        let currentIndex=0;
        let currentLetter=0

        const id=setInterval(()=>
        {
            console.log(keywords[currentIndex].length)
            if(currentLetter+1<=keywords[currentIndex].length)
            {
                console.log('cond1')
                console.log(keywords[currentIndex].substring(0, currentLetter+1) + '|')
                setText(keywords[currentIndex].substring(0, currentLetter+1) + '|');
                currentLetter++;
            }
            else{
                console.log('cond2')

                currentLetter=0
                currentIndex=(currentIndex+1)%keywords.length
            }
        },300)
        return ()=>
        {
            clearInterval(id)
        }
    },[])

  return (
    <section className={styles.about}>
        
        <div className={styles.header}>
            <p className={styles.animationPara}>I am Muhammad Jamal Mustafa A <span className={styles.skillText}>{text}</span> Developer</p>
            <div className={styles.myImgContainer}>
                <div className={styles.myImg}>
                    <img  src='myPic.png'/>
                </div>
            </div>
            <div id='about1'>
                <h1 className={styles.aboutHeading}>About</h1>
                <p className={styles.intro}>
                A dedicated computer science enthusiast from UET Lahore. My expertise lies in the MERN stack, along with proficiency in ASP.NET and PHP. I'm deeply passionate about web development, where I excel in crafting dynamic and user-friendly applications. With a knack for solving complex problems and a proactive learning approach, I enjoy pushing the boundaries of what's possible in tech. 
                </p>
            </div>
        </div>
    </section>
  )
}

export default About