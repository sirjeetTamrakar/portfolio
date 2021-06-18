import React from 'react'
import Image from 'next/image'
import { Carousel } from 'react-bootstrap'
import { projects } from '../constants/constants'
import styles from '../styles/Projects.module.css'

const Projects = () => {
    return (
        <div>
        <h1  className={styles.head}>PROJECTS</h1>
        <div className={styles.main} >
            {projects.map(({title, visit, images, tags, id }) => (
                <div className={styles.div} data-aos="zoom-in-up" key={id} >
                    <div className={styles.overflow} >
                        <Carousel  nextIcon='' prevIcon=''>
                            {images.map((image, i) => (
                                <Carousel.Item key={i}>
                                    <Image data-aos="zoom-in-down" placeholder='blur'  priority className={styles.image} src={image} height={810} width={1080} quality={10} alt='project_image' />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    <div className={styles.title}>
                        <h1 className={styles.h1}>{title.toUpperCase()}</h1>
                        <div className={styles.tags} >
                        {tags.map((tag, i) => (
                            <h6 className={styles.tag} key={i}>{tag}</h6>
                        ))}
                        </div>
                        <a href={visit} target='_blank'><button className={styles.button}>View</button></a>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Projects
