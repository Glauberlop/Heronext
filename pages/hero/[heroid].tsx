import {Hero} from '../heroes/types';



export const getStaticPaths = async() => {

    const maxHeroes = 731
    const api = 'https://akabab.github.io/superhero-api/api/all.json'


    const res = await fetch(`${api}/?limit=${maxHeroes}`)
    const data = await res.json()     
    

    const paths = data.results.map(( {index}:{index:number}) =>{
        
        return{
            params: {id: index.toString()},  
        }
    })
    return {
        paths,
        fallback: false,
      }     
}
export const getStaticProps = async ({context}:{context:any}) => {
    const id = context.params.id
  
    const response = await fetch(`https://akabab.github.io/superhero-api/api/all.json${id}`)
  
    const data = await response.json()
  
    return {
      props: { hero: data },
    }
  }
const Hero = ({hero}:{hero:Hero}) => {
    return (
        <div>
            <h1>{hero.name}</h1>
        </div>
    )
}
export default Hero