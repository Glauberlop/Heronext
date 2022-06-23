import { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/About.module.css";

const About: NextPage = () =>{
    return(
        <div className={styles.about}>
            <h1>
                Sobre o Projeto
            </h1>
            <p> Projeto pessoal de estudo e aprimoração do ReactJS, TypeScript e NextJS.
            </p>
            <p> A ideia é futuramente trazer um game estilo Super Trunfo! 
            </p>
            <Image src="/images/Pantera-Negra.png" height='300' width='300' alt='Pantera-Negra'/>
        </div>
    )
}

export default About