import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import {Hero} from './types';

export interface Heroes {
    heroes: Hero[];
}

const mapFn = (hero: Hero ) => {
    return <div key={hero.id}>
        <h3>{hero.name}</h3>
        <img src={hero.images.md} alt={hero.name}></img>
    </div>
  
    }
  
const Heroes: NextPage <{response: Heroes }> = (props) => {     
    const {response} = props
    const {heroes} = response;
           
    return <>
        {heroes.map(mapFn)}
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