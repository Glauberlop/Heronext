import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import {Hero} from '../types/types';
import styles from '../styles/Home.module.css'
import Card from '../components/Card';
import Image from 'next/image';

export interface Heroes {
    heroes: Hero[];
}

  
const Heroes: NextPage <{response: Heroes }> = (props) => {     
    const {response} = props
    const {heroes} = response;
           
    return <>
     <div className={styles.title_container}>
        <Image src='/images/Hero-logo.png' height='60' width='60' alt='HeroNext'/>
        <h1 className={styles.title}>HeroNext</h1>
        <Image src='/images/Hero-logo.png' height='60' width='60' alt='HeroNext'/>
     </div>
    
    <div  className={styles.heroes_container}>
        {heroes.map((hero)=>(
            <Card key={hero.id} hero={hero}/>
        ))}
     </div>
     </>
}

export const getStaticProps: GetStaticProps<{response: Heroes }> = async () =>{
    const data = await fetch('https://akabab.github.io/superhero-api/api/all.json')
    const response:Hero[] = await data.json()     
        
   return {
       props: { response: {heroes: response} }
   }   
  
}

export default Heroes
