import React, { useState, useEffect } from "react"
import Image from 'next/image';
import styles from './Blog.module.css'

interface ICardProps {
  image: string;
  title_one: string;
  desc_one: string;
  date: string;
  title_two: string;
  desc_two: string;
  desc_three: string;
  title_three: string;
}

const Card = (props: ICardProps) => {
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
  }, [modal])

  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <Image src={props.image} alt="" width="300" height="300" onClick={toggleModal}  />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.date}</span>
          {/*<label>
            <i className='far fa-heart'></i> {props.date}
          </label>*/}
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className={`${styles.modal} ${styles['modal-blog']}`}>
          <div onClick={toggleModal} className='overlay'></div>
          <div className={`${styles['modal-content']}`}>
            <div className='modal-img left'>
              <Image src={props.image} alt="" width="300" height="300" />
            </div>
            <div className={`${styles['modal-text']} right`}>
              <span>{props.date}</span>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              <h1>{props.title_two}</h1>
              <p>{props.desc_two}</p>

              <h1>{props.title_three}</h1>
              <p>{props.desc_three}</p>

              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>

              {/*---------Leave Message----------  */}
              <div className='contact mtop'>
                <h1>Leave a Reply</h1>

                <form className='blog_contact d_flex'>
                  <div className='left'>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                    <input type='text' placeholder='Website' />
                    <button className='btn_shadow'>SUBMIT NOW</button>
                  </div>
                  <div className='right'>
                    <textarea cols={30} rows={12} placeholder='Comment'></textarea>
                  </div>
                </form>
              </div>
              {/*---------Leave Message----------  */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
