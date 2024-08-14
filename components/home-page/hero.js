import Image from 'next/image'; 

import classes from './hero.module.css'

function Hero() {
    return ( 
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src="/images/site/khouloud.png" 
                    alt="An image showing Khouloud" 
                    width={300} 
                    height={300}
                />
            </div>
            <h1 >Hi I am khouloud</h1>
            <p>
                I blog about web development - especially frontend framworks like Nextjs
            </p>
        </section>
    );
}
export default Hero;