'use client'

import { Header } from "./components/header/header";
import { Market } from "./components/market";
import styles from './page.module.css';

export default function Home() {
    return <div className={styles.cont}>
                <Market />
            </div>
}