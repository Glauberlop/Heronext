import { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/About.module.css";

const About: NextPage = () =>{
    return(
        <div className={styles.about}>
            <h1>
                Sobre o Projeto
            </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Dolores impedit et molestias. Labore asperiores nisi error 
                 delectus autem harum eum illum mollitia in perferendis consequuntur 
                 nesciunt fugiat possimus, magnam perspiciatis.
            </p>
            <Image src="/images/Pantera-Negra.png" height='300' width='300' alt='Pantera-Negra'/>
        </div>
    )
}

export default About