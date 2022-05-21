import React from "react"
import Image from "next/image"
import styles from './Features.module.css'
import Link from "next/link"

const Card = (props: any) => {
  return (
    <>
      <div className={`${styles.box} box btn_shadow`}>
        <Image src={props.image} alt="" width="64" height="64" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <Link href='/'>
          <i className='fas fa-arrow-right'></i>
        </Link>
      </div>
    </>
  )
}

export default Card
