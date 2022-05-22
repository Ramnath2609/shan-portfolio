import React from "react"
import TestimonialApi from "./TestimonialApi"
import styles from './Testimonial.module.css'
import Image from 'next/image';

interface ISlideProps {
  id: number;
  image: string;
  design: string;
  name: string;
  offcer: string;
  post: string;
  date: string;
  desc: string;
  valueIndex: number;
  index: number;
}

const Slide = ({ id, image, design, name, offcer, post, date, desc, valueIndex, index }: ISlideProps) => {
  let position = "nextSlide"
  if (valueIndex === index) {
    position = "activeSlide"
  }
  if (valueIndex === index - 1 || (index === 0 && valueIndex === TestimonialApi.length - 1)) {
    position = "lastSlide"
  }

  return (
      <article className={`d_flex ${styles[position]} ${styles.testimon}`} key={id}>
        <div className={`${styles.left} left box_shodow`}>
          <div className='img'>
            <Image src={image} alt="" width="150" height="150"  />
          </div>
          <div className={`${styles.details} details mtop`}>
            <span className='primary_color'>{design}</span>
            <h2>{name}</h2>
            <label>{offcer}</label>
          </div>
        </div>
        <div className={`${styles.right} right`}>
          <div className='icon'>
            <div className={styles.quote}>
              <i className='fa fa-quote-right' />
            </div>
          </div>

          <div className={`${styles.content} content box_shodow mtop`}>
            <h1>{post}</h1>
            <h3>{date}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </article>
  )
}

export default Slide
