import React, { useState, useEffect } from "react"
import Image from "next/image";
import styles from './Portfolio.module.css'

interface IPortfolioCardProps {
  image: string;
  title: string;
  category: string;
  totalLike: string;
}

const Card = (props: IPortfolioCardProps) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal")
    } else {
      document.body.classList.remove("active-modal")
    }
  }, [modal]);
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <Image src={props.image} alt="" width="300" height="300" onClick={toggleModal}  />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className={`${styles.title} title`}>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={`${styles['modal-content']} d_flex`}>
            <div className={`${styles['modal-img']} left`}>
              <Image src={props.image} alt="" width="300" height="300" layout="responsive"  />
            </div>
            <div className={`${styles['modal-text']} right`}>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
              <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
              <div className={`button f_flex ${styles.mtop}`}>
                <button className='btn_shadow'>
                  LIKE THIS <i className='far fa-thumbs-up'></i>
                </button>
                <button className='btn_shadow'>
                  VIEW PROJECT<i className='fas fa-chevron-right'></i>
                </button>
              </div>
              <button className={`${styles['close-modal']} btn_shadow`} onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
