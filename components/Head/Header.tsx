import React, { useState, useEffect, useCallback } from "react"
import styles from './Header.module.css'
import logo from "../pic/logo.png"
import Image from "next/image"

const Header = () => {

  useEffect(() => {
    // fixed Header
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".pageHeader")
      header?.classList.toggle("active", window.scrollY > 100)
    })
  }, [])
  // Toogle Menu
  const [mobileView, setMobile] = useState(false)

  const toggleMobileView = useCallback(() => setMobile(!mobileView), [mobileView]);

  const setMobileViewFalse = useCallback(() => setMobile(false), []);

  return (
    <>
      <header className={`${styles.pageHeader}`}>
        <div className={`${styles.container} container d_flex`}>
          <div className='logo'>
            <Image src={logo} alt="" width="139px" height="70px"  />
          </div>

          <div className='navlink'>
            <ul className={mobileView ? "nav-links-mobile" : `${styles.link} f_flex uppercase`} onClick={setMobileViewFalse}>
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>features</a>
              </li>
              <li>
                <a href='#portfolio'>portfolio</a>
              </li>
              <li>
                <a href='#resume'>resume</a>
              </li>
              <li>
                <a href='#clients'>clients</a>
              </li>
              <li>
                <a href='#blog'>blog</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <button className={styles['home-btn']}>BUY NOW</button>
              </li>
            </ul>

            <button className='toggle' onClick={toggleMobileView}>
              {mobileView ? <i className={`fas fa-times ${styles.close} home-btn`}></i> : <i className={`fas fa-bars ${styles.open}`}></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
