import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Hero.module.css'

const Hero = () => {
    return (
			<div id='home' className={styles.hero}>
				<div className={styles.me}>
					<h1 data-aos='zoom-in-up' data-aos-delay='1000' data-aos-once='true'>
						Hi, I am Srijeet.
					</h1>
					<h1
						data-aos='fade-up'
						data-aos-delay='1500'
						data-aos-once='true'
						className={styles.title}
					>
						I am a Full Stack Developer
					</h1>
					<br />
					<Link href='#contact'>
						<button
							id='projects'
							data-aos='zoom-in-right'
							data-aos-delay='1800'
							data-aos-once='true'
							className={styles.button}
						>
							Contact Me
						</button>
					</Link>
				</div>
				<div
					className={styles.overlay}
					data-aos-duration='2000'
					data-aos='zoom-in-left'
					data-aos-once='true'
				>
					<Image
						src='/images/1.png'
						alt='Srijeet Tamrakar'
						priority
						width={1080}
						height={810}
						objectFit='contain'
						className={styles.image}
					/>
				</div>
			</div>
		);
}

export default Hero
