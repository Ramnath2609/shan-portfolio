import React from "react"
import styles from './Resume.module.css'

interface IResumeCardProps {
  title: string;
  year: string;
  rate: string;
  desc: string;
}

const Card = (props: IResumeCardProps) => {
  return (
    <>
      <div className={`${styles.box} box ${styles['btn_shadow']} btn_shadow`}>
        <div className='title_content d_flex'>
          <div className={`${styles.title} title`}>
            <h2>{props.title}</h2>
            <span>{props.year}</span>
          </div>
          <div className={styles.rate}>
            <button className={`${styles['btn_shadow']} btn_shadow`}>{props.rate}</button>
          </div>
        </div>
        <hr />
        <p>{props.desc}</p>
      </div>
    </>
  )
}

export default Card
