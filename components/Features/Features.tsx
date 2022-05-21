import React from "react"
import styles from './Features.module.css'
import Card from "./Card"
import data from "./Features-Api"

const Features = () => {
  return (
    <>
      <section className={`${styles.features} top`} id='features'>
        <div className='container'>
          <div className='heading'>
            <h4>Features</h4>
            <h1>What I Do</h1>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}

            {/*<div className='box btn_shadow'>
              <img src='https://img.icons8.com/glyph-neue/64/000000/polyline.png' alt="" width="300" height="300" />
              <h2>Personal Portfolio April</h2>
              <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>*/}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
