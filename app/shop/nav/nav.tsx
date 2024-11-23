import styles from './nav.module.css';

export const Nav = () => {
    return <div className={styles.cont}>
                <h2>Browse by</h2>
                <p>All Products</p>
                <p>Sport Bras</p>
                <p>Leggings</p>
                <p>Shirts</p>
                <p>Shorts</p>
                <p>New Arrivals</p>
                <p>Best Sellers</p>
                <h2>Filter By</h2>
                <div>
                    <h3>Price</h3>
                    <button>+</button>
                </div>
                <div>
                    <h3>Color</h3>
                    <button>+</button>
                </div>
                <div>
                    <h3>Size</h3>
                    <button>+</button>
                </div>
            </div>
}