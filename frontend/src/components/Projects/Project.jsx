import React from 'react'
import style from './project.module.css'
const Project = () => {
  return (
    <div className={style.projects}>
        <h1 className={style.projectsHeading}>Projects</h1>
        <div className={style.projGrid}>
            <div className="project">
                <a href="https://harmonious-bublanina-4871c7.netlify.app/" target='_blank'>
                    <h2 className={`${style.projname} ${style.projectsHeading}`}>Growth School Marketing Page Clone</h2>
                </a>
                    <iframe scrolling="no" title="This is a unique title" src="https://harmonious-bublanina-4871c7.netlify.app/" className={style.runningProject}  style={{border:"none"}} />
            </div>
            <div className="project">
                <a href="https://todo-in-mern.vercel.app/" target='_blank'>
                    <h2 className={`${style.projname} ${style.projectsHeading}`}>Todo in Mern</h2>
                </a>
                    <iframe scrolling="no" title="This is a unique title" src="https://todo-in-mern.vercel.app/" className={style.runningProject}  style={{border:"none"}} />
            </div>
            <div className="project">
                <a href="https://github.com/JamalMustafa7/Bus-Management-System-Using-WPF-and-EntityFramework" target='_blank'>
                    <h2 className={`${style.projname} ${style.projectsHeading}`}>Tansport Management System in .Net</h2>
                </a>
                <div className={style.projectImg}>
                    <img src="/tms.png" alt="" style={{backgroundColor:"#151e28"}}/>
                </div>
                <p className={style.description}>
                    A transport Management system which I made in .Net using WPF for ui and sql server and
                    Entity Framework for database.Distributed Server and client into seperate machine and also made an Asp.Net version of it
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/JamalMustafa7/Chess-in-Python" target='_blank'>
                    <h2 className={`${style.projname} ${style.projectsHeading}`}>Chess in Python</h2>
                </a>
                <div className={style.projectImg}>
                    <img src="/chess.jpeg" alt="" style={{backgroundColor:"#151e28"}}/>
                </div>
                <p className={style.description}>
                    A python project which I made using pygame.I built the whole game engine from scratch
                    and applied algorithms like alpha beta pruning to not only integrate play with friends but
                    also play with ai feature.Dealt with all the edge cases like En passant and castling etc
                </p>
            </div>
        </div>
    </div>
  )
}

export default Project