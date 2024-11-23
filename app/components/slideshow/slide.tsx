import { useState, useEffect } from 'react';
import styles from './slide.module.css';
import axios from 'axios';

export const Slide = () => {

    const [items, setItems] = useState([]);
    const [classes, setClasses] = useState('');

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((result) => {
            setItems(result.data);
        })
    })

    return <div className={styles.cont}>
                {items.map(
                    (e: any, i) => <img key={i} src={e.image} />
                )}
            </div>
}