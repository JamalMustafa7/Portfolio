import React from 'react'
import style from './technology.module.css'
const Technology = () => {
  return (
    <div className={style.technology} id="technology">
        <h1 className={style.technologyHeading}>Technology</h1>
        <div className={style.techGrid}>
            <div className="tech">
                <div>
                    <img src="/htmlcssjs.png" alt="" />
                </div>
            </div>
            <div className="tech">
                <div>
                    <img src="/mern.png" alt="" />
                </div>
            </div>
            <div className="tech">
                <div>
                    <img src="/aspnet.png" alt="" />
                </div>
            </div>
            <div className="tech">
                <div>
                    <img src="/php.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technology