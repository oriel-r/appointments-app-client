import React from 'react'
import styles from "./Navlink.module.css"
const Navlink = ({page}) => {
  return (
   <>
        <a className={styles.navlink}>{page}</a>
   </>
  )
}

export default Navlink
