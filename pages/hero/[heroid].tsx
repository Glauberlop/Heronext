
import {Hero} from '../../types/types';
import styles from '../../styles/Hero.module.css';

export const getStaticPaths = async() => {

    const maxHeroes = 731
    const api = 'https://akabab.github.io/superhero-api/api/all.json'


    const res = await fetch(`${api}?limit=${maxHeroes}`)
    const data:[] = await res.json()     
    

    const paths = data.map(( _ , index) =>{
        
        return{
            params: {heroid: (index+1).toString()},  
        }
    })
    console.log(paths)
    return {
        paths: paths,
        fallback: false,
      }     
}
export const getStaticProps = async (context:{params: any;context:any}) => {
    const id = context.params.heroid
  
   try{ const response = await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
  
    const data = await response.json()
  
    return {
      props: { hero: data },
    }
  }catch(error){
    return {
        props: { hero: null },
      }
  }};



const Hero = ({hero}:{hero:Hero | null} ) => {
    if (hero == null){
        return <div>
            <h1>NÃO ENCONTRADO</h1>
        </div>
    }
    return (
        <div className={styles.hero_container}>
        <div>
             <h1 className={styles.title}>{hero.name}</h1>
            <img src={hero.images.md} alt={hero.name}></img>
            
        </div>
        <div >
            <h2 className={styles.title}>Powerstats</h2>
            <div className={styles.powerstats_container} >
            <div>
                <h3 className={styles.powerstats_title}>Intelligence:</h3>
                <p className={styles.statsValue}>{hero.powerstats.intelligence}</p>
                <h3 className={styles.powerstats_title}>Strength:</h3>
                <p className={styles.statsValue}>{hero.powerstats.strength}</p>
                <h3 className={styles.powerstats_title}>Speed:</h3>
                <p className={styles.statsValue}>{hero.powerstats.speed}</p>
            </div>
            <div>
                <h3 className={styles.powerstats_title}>Durability:</h3>
                <p className={styles.statsValue}>{hero.powerstats.durability}</p>
                <h3 className={styles.powerstats_title}>Power:</h3>
                <p className={styles.statsValue}>{hero.powerstats.power}</p>
                <h3 className={styles.powerstats_title}>Combat:</h3>
                <p className={styles.statsValue}>{hero.powerstats.combat}</p>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Hero