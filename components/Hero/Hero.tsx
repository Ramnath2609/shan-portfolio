import React from "react"
import styles from './Home.module.css'
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import Image from "next/image"

const Hero = () => {
  const words = React.useMemo(() => ([" Professional Coder.", " Data Scientist."]), [])
  const { text } = useTypewriter({
    words,
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000
  })
  return (
    <>
      <section className={styles.hero} id='home'>
        <div className={`container ${styles['f_flex']} f_flex top`}>
          <div className={`${styles.left} left ${styles.top} top`}>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Shan</span>
            </h1>
            <h2>
              a
              <span>
                  {text}
                  <Cursor cursorStyle="_" />
              </span>
            </h2>

            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

            <div className={`${styles.hero_btn} ${styles.d_flex} d_flex`}>
              <div className={styles.col_1}>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i className='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i className='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i className='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className={styles.col_1}>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <Image src={skill1} alt="" width="20" height="20"  />
                </button>
                <button className='btn_shadow'>
                  <Image src={skill2} alt="" width="20" height="20"  />
                </button>
                <button className='btn_shadow'>
                  <Image src={skill3} alt="" width="20" height="20"  />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={'right_img'}>
              <Image priority src={hero} alt="" width="510" height="700"  />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
