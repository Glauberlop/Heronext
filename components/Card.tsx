import Link from 'next/link';
import {Hero} from '../types/types';
import styles from '../styles/Card.module.css'


const Card = ({hero}: {hero:Hero}) => {
    return (    
        
     <div className={styles.card}>
        <img src={hero.images.sm} alt={hero.name}></img>
        <h3 className={styles.title}>{hero.name}</h3>
        <Link href={`/hero/${hero.id}`}>
            <a className={styles.btn}>Detalhes</a>
        </Link>

     </div>
     
    )
}

export default Card