import Link from "next/link";
import Image from "next/image";

const Navbar = () =>{
    return(
        <nav>
            <div>
                <Image src="/images/Hero.png" height="40" width="40" alt="HeroNext"></Image>
                <h1>HeroNext</h1>
            </div>
            <ul>
                <li>
                    <Link href='/'><a>Home</a></Link>
                </li>
                <li>
                    <Link href='../heroes'><a>Heroes</a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar