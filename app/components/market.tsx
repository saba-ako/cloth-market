import Link from 'next/link';
import { Latest } from './latest/latest';
import styles from './market.module.css';
import { Slide } from './slideshow/slide';

export const Market = () => {
    return <div className={styles.cont}>
                <div className={styles.inner1}>
                    <h1>Introducing Your New Workout Wardrobe</h1>
                    <Link href={'./shop'} className={styles.shop}>Start shopping</Link>
                </div>
                <div className={styles.inner2}>
                    <div className={styles.box}>
                        <h2>The Cielo Story</h2>
                    </div>
                    <div className={styles.box}>
                        <h2>View Our Collection</h2>
                    </div>
                    <div className={styles.box}>
                        <h2>Read About Us</h2>
                    </div>
                </div>
                <h1>LATEST ARRIVALS</h1>
                <Latest />
                <h1>ALL PRODUCTS</h1>
                <Slide />
            </div>
}