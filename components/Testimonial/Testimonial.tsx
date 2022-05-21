import React, { useState, useEffect } from "react"
import Slide from "./Slide"
import styles from './Testimonial.module.css'
import TestimonialApi from "./TestimonialApi"

const Testimonial = () => {
  const [data, setdata] = useState(TestimonialApi)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = data.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, data])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <>
      <section className={styles.Testimonial} id='clients'>
        <div className='container'>
          <div className='heading text-center'>
            <h4>WHAT CLIENTS SAY</h4>
            <h1>Testimonial</h1>
          </div>
          <div className={styles.slide}>
            {data.map((value, valueIndex) => {
              return <Slide key={value.id} {...value} valueIndex={valueIndex} index={index} />
            })}

            <div className={styles.slide_button}>
              <button className={`btn_shadow ${styles.prev_btn}`} onClick={() => setIndex(index - 1)}>
                <i className='fas fa-arrow-left'></i>
              </button>
              <button className={`btn_shadow ${styles.next_btn}`} onClick={() => setIndex(index + 1)}>
                <i className='fas fa-arrow-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial
