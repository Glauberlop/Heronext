import Link from "next/link";
import Image from "next/image";

import styles from '../styles/Navbar.module.css'

const Navbar = () =>{
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/Hero.png" height="40" width="40" alt="HeroNext"></Image>
                <h1>HeroNext</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href='/'><a>Home</a></Link>
                </li>
                <li>
                    <Link href='../heroes'><a>Heroes</a></Link>
                </li>
                <li>
                    <Link href='../about'><a>About</a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar