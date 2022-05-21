import React from "react"
import logo1 from "./pic/f_logo.png"
import Image from "next/image"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <Image src={logo1} alt="" width="78" height="97"  />
          </div>
          <p>© 2021. All rights reserved by GorkCoder-Themes.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
