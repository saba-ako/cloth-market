'use client';

import { useEffect, useState } from 'react';
import { Nav } from './nav/nav';
import styles from './page.module.css';
import axios from 'axios';

export default () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((e) => {
            setProducts(e.data);
            setAmount(products.length);
        });
    });
    
    const [amount, setAmount] = useState(0);

    return <div className={styles.cont}>
                <Nav />
                <div className={styles.right}>
                    <h1>All Products</h1>
                    <p>{amount} Products</p>
                    <div className={styles.board}>
                        {products.map((e: any, i) => 
                            <div key={i} className={styles.box}>
                                <img className={styles.product} src={e.image} />
                                <p>{e.title}</p>
                                <h3>{e.price}$</h3>
                            </div>
                        )}
                    </div>
                </div>
            </div>
}