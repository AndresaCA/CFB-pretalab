import { Header } from "../components/Header"
/* import { FileHtml, FileCss, FileJs, FileJsx  } from 'phosphor-react' */
import img from '../assets/portfolio.svg'
import styles from '../styles/pages/portfolio.module.css'

export function Portfolio() {
    return(
        <>
           <Header text="Meu portfólio" image={img} />
           <div className={styles.portfolioContainer}>
                    <div className={styles.portfolioSubcontainer}>
                        <h2 className={styles.portfolioTitle}>O que eu sei</h2>
                        <ul className={styles.portfolioList}>
                            <li className={styles.portfolioListItem}>HTML</li>
                            <li className={styles.portfolioListItem}>CSS</li>
                            <li className={styles.portfolioListItem}>JavaScript</li>
                            <li className={styles.portfolioListItem}>React</li>
                        </ul>
                            
                    </div>
                    
                    <div className={styles.portfolioSubcontainer}>
                        <h2 className={styles.portfolioTitle}>O que já fiz</h2>
                            <ul className={styles.portfolioList}>
                                <li className={styles.portfolioListItemDown}>Portfolio</li>
                                <li className={styles.portfolioListItemDown}>Todo list</li>
                            </ul>
                    </div>
           </div>
        </>
    )
}