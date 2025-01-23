import FooterNav from "./FooterNav/FooterNav"
import styles from "./Footer.module.css"

const Footer = () => {
    const pages = ["Inicio","Servicios", "Equipo","Pago", "Terminos y condiciones de uso", "Politica de privacidad"]
  return (
    <footer>
        <div className={styles.link_section}>
       {pages.map((page, index) => (
           <FooterNav key={index} page={page}/>
           ))} 
        </div>
    </footer>
  )
}

export default Footer
