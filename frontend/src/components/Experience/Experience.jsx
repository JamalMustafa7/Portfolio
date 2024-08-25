import React from 'react';
import styles from './experience.module.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const ExperienceTimeline = () => {
  return (
    <div className={styles.education} id='experience'>
    <h2 className={styles.experienceHeading}>Education and Experience</h2>
    <VerticalTimeline>

        {/* Education: Bachelor of Computer Science */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - Present"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Computer Science</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Engineering and Technology, Lahore</h4>
          <p>CGPA: 3.2</p>
          <p>ECAs: Teacher’s Assistant</p>
          <img src='/education/uet.png' alt="Work Icon" style={{ width: '70px',margin:"8px" }} /> 
        </VerticalTimelineElement>

        {/* Education: Intermediate in Science */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          contentStyle={{ background: 'rgb(233, 100, 99)', color: '#fff' }}
          iconStyle={{ background: 'rgb(155, 7, 56)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">Intermediate in Science</h3>
          <h4 className="vertical-timeline-element-subtitle">Sharif Education Complex, Lahore</h4>
          <p>Grade: A+</p>
          <img src='/education/sec.png' alt="Work Icon" style={{ width: '70px',margin:"8px" }} /> 

        </VerticalTimelineElement>

        {/* Experience: Teacher's Assistant */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sept 2023 – Jan 2024"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Teacher’s Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Engineering and Technology, Lahore</h4>
          <p>
            Directed and guided a class of 50 students.
            Taught complex programming fundamentals, enhancing students' foundational knowledge.
            Organized and administered examinations and quizzes effectively.
          </p>
          <img src='/education/uet.png' alt="Work Icon" style={{ width: '70px',margin:"8px",float:"left" }} /> 

        </VerticalTimelineElement>

        {/* Experience: Web Development Internee at Hazen Technologies Inc */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2024 – Aug 2024"
          contentStyle={{ background: 'rgb(233, 150, 33)', color: '#fff' }}
          iconStyle={{ background: 'rgb(233, 150, 33)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Web Development Internee</h3>
          <h4 className="vertical-timeline-element-subtitle">Hazen Technologies Inc, Lahore</h4>
          <p>
            Completed a course of web development fundamentals (Html, CSS, Js).
            Made a complex website clone from scratch, deployed it on Netlify and Github and presented it.Got the chance
            to attend informative sessions and presented a project
          </p>
          <img src='/education/hazen.png' alt="Work Icon" style={{ width: '70px',margin:"8px",float:"left" }} /> 

        </VerticalTimelineElement>

        {/* Experience: Web Development Internee at Netsol Technologies Inc */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2024 - Present"
          contentStyle={{ background: 'rgb(150, 33, 243)', color: '#fff' }}
          iconStyle={{ background: 'rgb(150, 33, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Web Development Internee</h3>
          <h4 className="vertical-timeline-element-subtitle">Netsol Technologies Inc, Lahore</h4>
          <p>
            Attended ICAN training sessions.
          </p>
          <img src='/education/netsol.png' alt="Work Icon" style={{ width: '90px',margin:"8px 8px 8px -10px",float:"left" }} /> 

        </VerticalTimelineElement>

        {/* Final element */}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
      <a href="/education/cv.pdf" download="Muhammad_Jamal_Mustafa_CV.pdf" className={styles.downloadButton}>
        Download My CV
      </a>
    </div>    
  );
};

export default ExperienceTimeline;



