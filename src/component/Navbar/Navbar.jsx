import Button from '../Button'
import Logo from '../../assets/code-with-susan-wafula-high-resolution-logo-transparent.png'
import styles from './navbar.module.css'



const Navbar = ()=>{
    return(
        <nav className={styles.nav}>
        <div className={styles.navLogo}>
            <img src={Logo} />
        </div>

        <div className={styles.navLink}>
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
        </div>

        <div className={styles.navButton}>
            <Button color='bg-blue-500' text='Login'/>
        </div>
    </nav>

    )
}

export default Navbar