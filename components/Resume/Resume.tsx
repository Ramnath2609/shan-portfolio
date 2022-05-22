import React from "react"
import ResumeApi from "./ResumeApi"
import styles from './Resume.module.css'
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <section className={styles.Resume} id='resume'>
        <div className='container top'>
          <div className={`${styles.heading} heading text-center`}>
            <h4>7+ YEARS OF EXPERIENCE</h4>
            <h1>My Resume</h1>
          </div>

          <div className={`${styles['content-section']} mtop ${styles.d_flex} d_flex`}>
            <div className={`${styles.left} left`}>
              <div className={`${styles.heading} heading`}>
                <h4>2007-2010</h4>
                <h1>Education Quality</h1>
              </div>

              <div className={`${styles.content} content`}>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div>
            <div className={`${styles.left} left`}>
              <div className={`${styles.heading} heading`}>
                <h4>2007-2010</h4>
                <h1>Job Experience</h1>
              </div>

              <div className={`${styles.content} content`}>
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
