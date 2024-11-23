import axios from 'axios';
import styles from './latest.module.css';
import { useState, useEffect } from 'react';

export const Latest = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=4')
        .then((result) => {
            setProducts(result.data);
        });
    }, []);

    return <div className={styles.cont}>
                {products.map((e: any, i) => 
                    <div key={i} className={styles.box}>
                        <img src={e.image} />
                        <p>{e.title}</p>
                        <h3>{e.price}$</h3>
                    </div>)
                }
            </div>
}